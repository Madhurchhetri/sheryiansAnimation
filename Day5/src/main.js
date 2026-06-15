// import gsap from 'gsap'
// import './style.css'
// import { SplitText } from "gsap/SplitText";
// import { Draggable } from 'gsap/Draggable';
// import { InertiaPlugin } from 'gsap/InertiaPlugin';
// import { Flip } from 'gsap/Flip';
// // import { useImperativeHandle } from 'react';

// gsap.registerPlugin(SplitText, Draggable , InertiaPlugin , Flip );

// // const split = new SplitText('.title  h1',{
// //   type:"chars ,words,lines",
// //   wordsClass: "titleWord",
// //   charsClass:"titleChars"
// // })


// // gsap.from(split.chars,{
// //   yPercent:100,
// //   opacity:0,
// //   duration:1.2, 
// //   ease: 'expo.out',
// //   stagger:{
// //     each:0.09,
// //     from:"center"
// //   }
// // })

// // Draggable.create('.box',{
// //   bounds:"#app",
// //   type:"x y",
// //   edgeResistance:1
// // })

// // Draggable.create('.box',{
// //   bounds:"#app",
// //   type:"x y",
// //   edgeResistance:1,
// //   inertia : true,
// //   dragResistance:0.5
// // })


// const img = document.querySelector(".specialImage")
// const img2 = document.querySelector(".specialImage2")

// console.log(img);


// img.addEventListener("click",()=>{

//   const state = Flip.getState(img);
//   console.log(state);
  
//   const state2 = Flip.getState(img2);

//   document.querySelector('.imageShow').appendChild(img)
//   document.querySelector('.imageGallery').appendChild(img2)

//   Flip.from(state,{
//     duration:1.3,
//     ease: 'power3.inOut'
//   })
//    Flip.from(state2,{
//     duration:1.3,
//     ease: 'power3.inOut'
//   })
// })


import gsap from "gsap";
import { Flip } from "gsap/Flip";
import "./style.css";

gsap.registerPlugin(Flip);

const gallery = document.querySelector(".imageGallery");
const imageShow = document.querySelector(".imageShow");

function attachEvents() {
  const galleryImages = document.querySelectorAll(".imageGallery img");

  galleryImages.forEach((img) => {
    // duplicate listeners avoid karne ke liye
    img.onclick = () => {
      const currentShowImage = imageShow.querySelector("img");

      const state = Flip.getState([img, currentShowImage]);

      // Swap images
      imageShow.appendChild(img);
      gallery.appendChild(currentShowImage);

      Flip.from(state, {
        duration: 1.3,
        ease: "power3.inOut",
        absolute: true,
      });

      // Swap ke baad naye order ke liye listeners refresh
      attachEvents();
    };
  });
}

attachEvents();