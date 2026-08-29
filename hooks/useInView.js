import { useEffect, useRef, useState } from "react";

// Reports once a ref'd element is near the viewport, so callers can defer
// mounting expensive children (e.g. 3D scenes) until they're actually needed.
function useInView(rootMargin = "200px") {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (inView || !ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ rootMargin }
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [inView, rootMargin]);

	return [ref, inView];
}

export default useInView;
