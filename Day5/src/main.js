import gsap from 'gsap'
import './style.css'
import { SplitText } from "gsap/SplitText";
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(SplitText, Draggable , InertiaPlugin , Flip );

// const split = new SplitText('.title  h1',{
//   type:"chars ,words,lines",
//   wordsClass: "titleWord",
//   charsClass:"titleChars"
// })


// gsap.from(split.chars,{
//   yPercent:100,
//   opacity:0,
//   duration:1.2, 
//   ease: 'expo.out',
//   stagger:{
//     each:0.09,
//     from:"center"
//   }
// })

// Draggable.create('.box',{
//   bounds:"#app",
//   type:"x y",
//   edgeResistance:1
// })

// Draggable.create('.box',{
//   bounds:"#app",
//   type:"x y",
//   edgeResistance:1,
//   inertia : true,
//   dragResistance:0.5
// })


const img = document.querySelector(".specialImage")
const img2 = document.querySelector(".specialImage2")



img.addEventListener("click",()=>{

  const state = Flip.getState(img);
  const state2 = Flip.getState(img2);

  document.querySelector('.imageShow').appendChild(img)
  document.querySelector('.imageGallery').appendChild(img2)

  Flip.from(state,{
    duration:1.3,
    ease: 'power3.inOut'
  })
   Flip.from(state2,{
    duration:1.3,
    ease: 'power3.inOut'
  })
})