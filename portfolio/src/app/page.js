"use client"
import InfiniteCarousel from "@/components/InfiniteCarousel";
import TextRevela from "@/components/TextRevela";
import { projects } from "@/data/projects";
import { useRef } from "react";


export default function Home() {
  // const triggerRef = useRef(null)

  // const handleHoverEnter = ()=>{
  //   triggerRef.current?.play()
  // }
  // const handleHoverLeave = ()=>{
  //   triggerRef.current?.reverse()
  // }
  return (
    <main className="bg-amber-50 text-black h-screen w-full flex items-start">
    {/* <div 
    onPointerEnter={handleHoverEnter}
    onPointerLeave={handleHoverLeave}
    className="h-[8rem] w-[12rem] bg-red-500"></div>
      <TextRevela
      ref={triggerRef}
       scrollStart="top 75%" 
       className='text-[3rem]'>
        hello every one
      </TextRevela> */}

      <InfiniteCarousel projects={projects}/>
    </main>
  );
}
