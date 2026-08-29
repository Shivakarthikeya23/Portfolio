import { useEffect, useRef } from "react";

function Cursor() {
	const dotRef = useRef(null);
	const ringRef = useRef(null);

	useEffect(() => {
		const isCoarse = window.matchMedia("(pointer: coarse)").matches;
		const reducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (isCoarse || reducedMotion) return;

		document.documentElement.classList.add("has-custom-cursor");

		let mouseX = -100;
		let mouseY = -100;
		let ringX = -100;
		let ringY = -100;
		let hovering = false;
		let rafId;

		const onMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			if (dotRef.current) {
				dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
			}
		};

		const onPointerOver = (e) => {
			hovering = !!e.target.closest('[data-cursor="hover"]');
		};

		const tick = () => {
			ringX += (mouseX - ringX) * 0.18;
			ringY += (mouseY - ringY) * 0.18;
			if (ringRef.current) {
				const scale = hovering ? 1.8 : 1;
				ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
			}
			rafId = requestAnimationFrame(tick);
		};

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("pointerover", onPointerOver);
		rafId = requestAnimationFrame(tick);

		return () => {
			document.documentElement.classList.remove("has-custom-cursor");
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("pointerover", onPointerOver);
			cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<>
			<div ref={dotRef} className="cursor-dot" aria-hidden="true" />
			<div ref={ringRef} className="cursor-ring" aria-hidden="true" />
		</>
	);
}

export default Cursor;
