import { useEffect, useState } from "react";
import gsap from "gsap";

const Designer = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const maskElement = document.querySelector('.mask');
        const sizes = {
            initial: 40,
            expanded: 500,
        };

        const handleMouseMove = (events) => {
            const size = isHovered ? sizes.expanded : sizes.initial;

            gsap.to(maskElement, {
                maskSize: `${size}px`,
                duration: 0.5,
                onUpdate: () => {
                    // document.querySelector('.normal p').style.opacity = 0
                    maskElement.style.maskPosition = `${events.clientX - size / 2}px ${events.clientY - size / 2}px`;
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered]); // Add isHovered as a dependency

    return (
        <div id="main">
            <div className="mask">
                <p
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="hover-text"
                >
                    As AI is also there so trying to understand Web3 so that i can place a job in that field and i guess it is more interesting.
                </p>
            </div>
            <div className="normal">
                <p>
                    I'm a <span>selectively skilled</span> web developer with strong focus on producing high quality & impactful digital experience.
                </p>
            </div>
        </div>
    );
};

export default Designer;
