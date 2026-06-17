"use client"
import { useRef } from "react"
import TextRevela from "./TextRevela"
import gsap from "@/libs/gsap"


const CARD_H = 280
const CARD_W = 200
const SCALE = 1.35

const CarousalCard = ({projects , onHoverStart , onHoverEnd}) => {
    const cardRef = useRef(null)
    const imageRef = useRef(null)

    const numberRef = useRef(null)
    const titleRef = useRef(null)

    const onEnter = () =>{
        onHoverStart?.()

        gsap.to(cardRef.current,{
            width : CARD_W * SCALE,
            height : CARD_H * SCALE,
            duration:0.4,
            ease : "power3.out",
        })

        numberRef.current?.play();
        titleRef.current?.play();
        
    }

        const onLeave = () =>{
        onHoverEnd?.()

        gsap.to(cardRef.current,{
            width : CARD_W ,
            height : CARD_H ,
            duration:0.1,
            ease : "power3.out",
        })

        numberRef.current?.reverse();
        titleRef.current?.reverse();
        
    }
    
  return (
    <div ref={cardRef} 
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    style={{
        width : CARD_W,
        height : CARD_H,
        flexShrink : 0,
        overflow : "visible",
        cursor : "pointer"
    }}
    className="relative"
    >

    {/* //title pannel */}

    <div
    style={{bottom : "calc(100% + 1rem)"}}
     className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[1rem] ">
        <TextRevela ref={numberRef} trigger="manual" splitBy = "chars">
            <h3>
                {projects.number}
            </h3>
        </TextRevela>
        <TextRevela ref={titleRef} trigger="manual" splitBy = "words">
            <h3>
                {projects.title}
            </h3>
        </TextRevela>
     </div>

     <div ref={imageRef} className="imageDiv absolute h-full w-full overflow-hidden">
        <img
        style={{transformOrigin:"center", userSelect:"none"}} 
        className="h-full w-full object-cover" 
        src={projects.coverImage} alt={projects.title} />
     </div>
    
    </div>
  )
}

export default CarousalCard