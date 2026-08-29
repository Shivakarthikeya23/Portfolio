import { useEffect, useRef } from "react";

function Magnetic({ children, strength = 0.35, className = "" }) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const onMove = (e) => {
			const rect = el.getBoundingClientRect();
			const x = e.clientX - (rect.left + rect.width / 2);
			const y = e.clientY - (rect.top + rect.height / 2);
			el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
		};

		const onLeave = () => {
			el.style.transform = "translate(0px, 0px)";
		};

		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);

		return () => {
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
		};
	}, [strength]);

	return (
		<div
			ref={ref}
			data-cursor="hover"
			className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
		>
			{children}
		</div>
	);
}

export default Magnetic;
