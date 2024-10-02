'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ bgColor = '#ff0000', index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ offset: ["1 1", "0 0"], target: ref });
    const minScale = 0.7 + (index / (3 - 1)) * 0.3;
    const scale = useTransform(scrollYProgress, [0, 1], [1, minScale]);
    const y = useTransform(scrollYProgress, [0, 1], [(index * 80), 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.75, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scale, background: bgColor, top: 100, y, opacity }}
            className="px-10 py-5 rounded-md h-[400px] sticky border-4 border-white origin-top">
            <div className="text-5xl text-white font-bold border-b border-white pb-4 mb-4">
                Lorem ipsum dolor sit amet.
            </div>
            <div className="text-lg text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa nunc, pellentesque eget enim quis, imperdiet fringilla metus. Integer et lacus interdum, sollicitudin leo eget, ornare elit. Curabitur pulvinar nisl id arcu vestibulum, maximus faucibus tortor condimentum. Suspendisse laoreet nunc sit amet condimentum congue. Nullam feugiat aliquet nunc, vitae pharetra diam sollicitudin id. Vestibulum eget semper turpis. Aenean a tempor.
            </div>

        </motion.div>
    )
}
export default Card;