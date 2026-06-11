import gsap from "gsap";
import './style.css';



// gsap.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 1,
//   // stagger: 0.2
//   // stagger : -0.2

//   stagger:{
//     each:0.1,
//     // from: "center"
//     // from : "edges"
//     from : "random"
//   }
// })  

// gsap.from("h1 span",{
//   yPercent:100,
//   duration:1.5,
//   opacity:0,
//   ease:"expo.out",
//   stagger:{
//     each:0.08,
//     from:"random"
//   },
// })

// ..................timeline...............................

// gsap.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 1,
// })  

const tl = gsap.timeline()

// tl.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 1,
// }).to('.box1',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// }).to('.box2',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// }).to('.box3',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// })


// ..............position parameter.........................

// ...... tl.to(Element,{properties},parameter) .............

// types
// 1. " < "

// tl.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 1,
// }).to('.box1',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// },"<").to('.box2',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// }).to('.box3',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// })

// 1 .I. 

// <0.4 isme thoda delay ke sath chalega 

// tl.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 1,
// }).to('.box1',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// },).to('.box2',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// },"<0.4").to('.box3',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// })

// 2. -=0.3  isse hum before animation ko delay ko - kar sakte hain

// tl.to(".box", {
//   x: 600,
//   duration: 1.3,
//   ease: "power4.out",
//   delay: 1,
// }).to('.box1',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// },).to('.box2',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// },"-=0.8").to('.box3',{
//    x: 600,
//   duration: 1.3,
//   ease: "power4.out",
// })

// 3. LABELS jis jis animation me same naam hoga wo animation sath me chalenge

tl.to(".box", {
  x: 600,
  duration: 1.3,
  ease: "power4.out",
  delay: 1,
}).to('.box1',{
   x: 600,
  duration: 1.3,
  ease: "power4.out",
},"madhur").to('.box2',{
   x: 600,
  duration: 1.3,
  ease: "power4.out",
}).to('.box3',{
   x: 600,
  duration: 1.3,
  ease: "power4.out",
},"madhur")

