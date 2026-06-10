import gsap from "gsap";
import './style.css';

const box = document.querySelector('.box');

// gsap.set(box,{
//     x : -300
// })

// gsap.to(box, {
//     x: 800,
//     duration: 2,
//     delay: 1,
//     // repeat:-1,
//     ease: "power2.inOut",
//     // yoyo : true
  
// });

// callback function 

gsap.to(box,{
    x:500,
    duration:2,
    delay:1,

    // onStart: ()=>{
    //     console.log("hello");
        
    // }

    // onComplete: ()=>{
    //     console.log("hello after animation");
        
    // }

    onUpdate:()=>{
        console.log("update hello");
        
    }

})