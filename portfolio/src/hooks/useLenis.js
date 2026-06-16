"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

   // update scroll trigger on every lenis scroll

   lenis.on('scroll', ScrollTrigger.update)

   // use gsap ticker instead of requestAnimationFrame

   gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
   })

   // prevent lag from gsap ticker smoothing

   gsap.ticker.lagSmoothing(0);

   // refresh scrolltrigger after setup

   ScrollTrigger.refresh()

    return () => {
      gsap.ticker.remove((time)=>{
        lenis.raf(time * 1000)
      });

      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);
}