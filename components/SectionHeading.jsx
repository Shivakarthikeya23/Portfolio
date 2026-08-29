import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SectionHeading({ subtext, title, className = "", center = false }) {
	const headRef = useRef(null);

	useEffect(() => {
		if (!headRef.current) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		gsap.registerPlugin(ScrollTrigger);

		const words = headRef.current.querySelectorAll(".word");

		const ctx = gsap.context(() => {
			gsap.fromTo(
				words,
				{ yPercent: 120, opacity: 0 },
				{
					yPercent: 0,
					opacity: 1,
					stagger: 0.08,
					ease: "power3.out",
					duration: 0.8,
					scrollTrigger: {
						trigger: headRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				}
			);
		}, headRef);

		return () => ctx.revert();
	}, []);

	const words = title.split(" ");

	return (
		<div className={`${center ? "text-center" : ""} ${className}`}>
			<p className="sectionSubText">{subtext}</p>
			<h2
				ref={headRef}
				className={`sectionHeadText overflow-hidden flex flex-wrap gap-x-4 ${
					center ? "justify-center" : ""
				}`}
			>
				{words.map((word, i) => (
					<span key={`${word}-${i}`} className="overflow-hidden">
						<span className="word inline-block">{word}</span>
					</span>
				))}
			</h2>
		</div>
	);
}

export default SectionHeading;
