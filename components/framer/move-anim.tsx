import * as motion from "motion/react-client";
import { Children } from "react";

interface Props {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    stagger?: number;
}

const MoveAnim: React.FC<Props> = ({
    children,
    delay = 0,
    className = "",
    stagger = 0.1,
}) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: {
                            opacity: 0,
                            rotateX: -80,
                        },
                        visible: {
                            opacity: 1,
                            rotateX: 0,
                            transition: {
                                duration: 1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            },
                        },
                    }}
                    style={{
                        transformOrigin: "top center",
                        transformPerspective: 400,
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MoveAnim;
