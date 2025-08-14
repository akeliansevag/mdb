"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Odometer = dynamic(() => import("react-odometerjs"), {
    ssr: false,
    loading: () => <div>0</div>,
});

interface Props {
    value: number;
    duration?: number;
}

const Meter = ({ value, duration = 1000, ...props }: Props) => {
    const [totalClients, setTotalClients] = useState<number>(0);

    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const timeoutId = setTimeout(
                () => setTotalClients(value),
                duration
            );
            return () => clearTimeout(timeoutId);
        }
    }, [inView, value, duration]);

    return (
        <div ref={ref}>
            <Odometer
                start={0}
                value={totalClients}
                duration={duration}
                {...props}
            />
        </div>
    );
};

export default Meter;
