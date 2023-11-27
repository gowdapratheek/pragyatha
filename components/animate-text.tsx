"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export const TypingAnimationText = ({
	text,
	className,
	children,
}: {
	text: string;
	className?: string;
	children?: React.ReactNode;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once: true });
	const defaultAnimations = {
		hidden: {
			opacity: 0,
			scale: 0.1,
		},
		visible: {
			opacity: 1,
			scale: 2,
		},
	};

	return (
		<motion.span
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			transition={{ staggerChildren: 0.1 }}
		>
			<span className={className}>
				{text.split("").map((char, index) => (
					<motion.span
						key={index}
						variants={defaultAnimations}
					>
						{char}
					</motion.span>
				))}{" "}
			</span>
			<motion.span
				variants={defaultAnimations}
				transition={{ duration: 1 }}
			>
				{children}
			</motion.span>
		</motion.span>
	);
};
