import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SmoothScroll({ children }) {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			duration: 1.1,
			smoothWheel: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		const update = (time) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(update);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(update);
			lenis.destroy();
		};
	}, []);

	return children;
}

export default SmoothScroll;
