import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {

  useEffect(() => {

    const tl = gsap.timeline();

    tl.from(".bgBar", {
      y: 200,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".txt-1", {
      y: 50,
      opacity: 0,
      duration: 0.6
    }, "-=0.3")
    .from(".txt-2", {
      y: 80,
      opacity: 0,
      duration: 0.8
    }, "-=0.4");

    gsap.utils.toArray(".subSectionContain").forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%"
      },
      opacity: 0,
      y: 80,
      stagger: 0.15,
      duration: 1
    });
  }, []);
};
