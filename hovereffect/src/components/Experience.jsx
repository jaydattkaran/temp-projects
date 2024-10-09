import { useEffect, useState } from "react";
import gsap from "gsap";

const Experience = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        const maskElement = document.querySelector('.mask');
        const sizes = {
            initial: 40,
            expanded: 400,
        };

        const handleMouseMove = (events) => {
            const size = isHovered ? sizes.expanded : sizes.initial;

            gsap.to(maskElement, {
                maskSize: `${size}px`,
                duration: 0.5,
                onUpdate: () => {
                    // document.querySelector('.normal p').style.opacity = 0
                    maskElement.style.maskPosition = `${events.clientX - size/2}px ${events.clientY - size/2}px`;
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
                    onMouseEnter={()=> setIsHovered(true)}
                    onMouseLeave={()=> setIsHovered(false)}
                    className="hover-text"
                >
                    Not a decade, actually a university student who is just actively producing cool shit since 2022 and navigating to my carrer.
                </p>
            </div>
            <div className="normal">
                <p>
                Over <span> a decade </span>of experience in interactive design and working with some of the most talented people in the business.
                </p>
            </div>
        </div>

        
    );
};

export default Experience;


