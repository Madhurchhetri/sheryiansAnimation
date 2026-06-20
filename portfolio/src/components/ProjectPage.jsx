"use client"
import { useRef } from "react"
import TextRevela from "./TextRevela"
import gsap , {ScrollTrigger, useGSAP} from "@/libs/gsap"
import useViewTransition from "@/hooks/useViewTransition"
 

const ProjectPage = ({project, nextProject}) => {

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(()=>{

        const sections = gsap.utils.toArray('section')

        // console.log(sections);
        

        gsap.to(imageRef.current,{
            clipPath : "inset(0% 0 0% 0)",
            scale: 1,
            duration: 1.4,
            delay: 0.5,
            ease : "expo.out"
        })

        sections.forEach((section,idx)=>{
            const container = section.children[0];

            gsap.to(container,{
                rotate : 0,
                ease: "none",
                scrollTrigger : {
                    trigger: section,
                    start: "top bottom",
                    end : "top 20%",
                    scrub : true,
                },
            });

            if(idx === sections.length-1) return;

            ScrollTrigger.create({
                trigger : section,
                start : "bottom bottom",
                end :"bottom top",
                pin : true,
                pinSpacing : false,
            })
        })


    },{ scope: containerRef })

    const {navigateTo} = useViewTransition()

    const handleClick = () =>{
         navigateTo(`/project/${nextProject.slug}`)
    }

  return (
    <>
        <main ref={containerRef}>
            <section className="h-screen  w-full" >
                <div className="sectionContainer h-full w-full flex pt-[7rem] pb-[4rem] px-[3rem] gap-5">
                    <div className="firstSegment h-full w-[8%]">
                    <TextRevela>
                        <h3 className="text-[2rem]">{project.number}</h3>
                    </TextRevela>
                </div>
                <div className="secondSegment h-[85%] w-[30%] ">
                    <div className="imagDiv h-full w-full overflow-hidden">
                        <img 
                        ref={imageRef}
                         style={{
                        clipPath:"inset(0% 0 100% 0)"
                     }}
                        className="h-full w-full object-cover scale-[1.5]" src={project.coverImage} alt={project.title} />
                    </div>
                </div>
                <div className="thirdSegment h-[85%] w-[62%] flex flex-col justify-end  ">
                    <div className="heading ">
                        <TextRevela delay="0.85" splitBy="chars">
                            <h2 className="text-[5rem]">{project.title}</h2>
                        </TextRevela>
                    </div>
                    <div className="subHeading flex gap-[3rem] ">
                        <TextRevela delay="0.85" splitBy="words">
                            <h2 className="text-[1.8rem] leading-[1.2]">{project.subtitle}</h2>
                        </TextRevela>
                        <TextRevela delay="0.85" splitBy="chars">
                            <h2 className="text-[1.8rem] leading-[1.2]">{project.year}</h2>
                        </TextRevela>
                    </div>
                     <div className="description w-[70%] text-balance mt-[2rem]">
                        <TextRevela delay="0.85" splitBy="lines">
                            <p className="text-[1rem] leading-[1.2]">{project.description}</p>
                        </TextRevela>
                    </div>
                </div>
                </div>
            </section>
            {project.gallery.map((elem ,idx)=>{
                return(
                    <section key={idx} className=" h-screen w-full">
                        <div style={{transformOrigin : "bottom left"}} className="sectionContainer h-full w-full rotate-[30deg]">
                            <img className="h-full w-full object-cover" src={elem} alt={idx} />

                        </div>
                    </section>
                )
            })}
            
           
            <footer className="h-screen flex items-center justify-center w-full">
                <h1 onClick={handleClick} className=" cursor-pointer">{nextProject.title}</h1>
            </footer>
        </main>
    </>
  )
}

export default ProjectPage