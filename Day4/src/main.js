// import gsap from "gsap";
// import './style.css';

// const play = document.querySelector('.play')
// const pause = document.querySelector('.pause')
// const reverse = document.querySelector('.reverse')
// const restart = document.querySelector('.restart')
// const seek = document.querySelector('.seek')


// const tl = gsap.timeline({paused:true});

// tl.to('.box',{
//   x:1200,
//   duration:1.3,
//   ease: "power4.out",
//   delay: 0.6
// }).to('.box1',{
//   x:1200,
//   duration:1.3,
//   ease: "power4.out",
// }).to('.box2',{
//     x:1200,
//   duration:1.3,
//   ease: "power4.out",
// }).addLabel("third").to('.box3',{
//     x:1200,
//   duration:1.3,
//   ease: "power4.out",
// })

// play.addEventListener('click',()=>{
//   tl.play();
// })

// pause.addEventListener('click',()=>{
//   tl.pause();
// })

// restart.addEventListener('click',()=>{
//   tl.restart();
// })

// reverse.addEventListener('click',()=>{
//   tl.reverse();
// })

// seek.addEventListener('click',()=>{
//   tl.seek("third");
// })


// ..........................for scroll trigger..........................

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css'

gsap.registerPlugin(ScrollTrigger);

// gsap.to('.box',{
//   x:1200,
//   duration:1,
//   ease:"power4.out",
//   scrollTrigger:{
//     trigger:".page2",
//     start:"top top",
//     end:"top -40%",
//     scrub:true,
//     pin:true
//   }
// })

gsap.set('.imageDiv',{
  scale:0.3,
})
gsap.set('.content',{
  gap: "35rem",
})

const tl = gsap.timeline({
    scrollTrigger:{
    trigger:".page2",
    start:"top top",
    end:"top -100%",
    scrub:true,
    pin:true
  }
})

tl.to('.imageDiv',{
  scale:1,
  duration:1,
  ease:"power4.out", 
}).to('.content',{
  gap:"3rem",
},"<")