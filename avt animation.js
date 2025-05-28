// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     });
   
//     // Observe each element with different animations
//     document.querySelectorAll('.in-animation4,.in-animation5,.in-animation6, .in-animation7, .in-animation8').forEach(section => {
//       observer.observe(section);
//     });
//    });
   

import { useEffect } from "react";

const AtvAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1, // Start animation early
      rootMargin: "0px 0px -100px 0px" // Extra buffer from bottom
    });

    const elementsToAnimate = document.querySelectorAll(
      ".in-animation4, .in-animation5, .in-animation6, .in-animation7"
    );

    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer on component unmount
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // This component does not render anything
};

export default AtvAnimation;


