import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const HoverComponent = ({ hoverText, normalText }) => {
    const [isHovered, setIsHovered] = useState(false);
    const maskRef = useRef(null);  // Use ref to target the correct mask element

    useEffect(() => {
        const maskElement = maskRef.current;
        const sizes = {
            initial: 40,
            expanded: 450,
        };

        const handleMouseMove = (event) => {
            const size = isHovered ? sizes.expanded : sizes.initial;

            gsap.to(maskElement, {
                maskSize: `${size}px`,
                duration: 0.5,
                onUpdate: () => {
                    maskElement.style.maskPosition = `${event.clientX - size / 2}px ${event.clientY - size / 2}px`;
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered]);

    return (
        <div id="main">
            <div className="mask" ref={maskRef}>
                <p 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="hover-text"
                >
                    {hoverText}
                </p>
            </div>
            <div className="normal">
                <p>{normalText}</p>
            </div>
        </div>
    );
};

export default HoverComponent;
