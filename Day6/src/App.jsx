import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import AnimateOnX from './components/AnimateOnX'
import { motion } from 'motion/react'
import { div } from 'motion/react-client'


const App = () => { 
  // const boxRef = useRef(null)
  // const boxRef = useRef([])
  // const containerRef = useRef(null)
  // const {contextSafe}=useGSAP(()=>{
  //   gsap.to(boxRef.current,{
  //     x:700,
  //     delay:1,
  //     duration:0.5,
  //     stagger:{
  //       each:0.2,
  //       from:"random"
  //     }
  //   })
  // },{scope : containerRef.current, dependencies:[], revertOnUpdate:true})

  //.................. for motion....................
  const containerVarient = {
    hidden:{},
    visible:{}
  } 

  const boxVarient = {
    hidden:{
      opacity : 0
    },
    visible:{
      opacity : 1,
      x :500,
    }
  }
  return (
    // <div ref={containerRef} >
    //   {/* <div ref={boxRef} className="box"></div>
    //   <AnimateOnX>
    //       <div className="box1"></div>
    //     </AnimateOnX> */}

    //     {/* for stagger */}

    //     <div ref={(el)=>boxRef.current.push(el)} className='box'></div>
    //     <div ref={(el)=>boxRef.current.push(el)} className='box'></div>
    //     <div ref={(el)=>boxRef.current.push(el)} className='box'></div>

    // </div>

    //  .................now we start with motion ......................
    
    // <div>
    //    <div className="page"></div> 
    //   <motion.div initial={{opacity:0 ,scale:0.7}} 
    //   transition={{duration:1, ease:"easeInOut"}} 
    //      animate={{x:500 , opacity:1}}  
    //      whileHover={{scale: 1.6}}  
    //    whileTap={{scale:0.5}}  
    //      viewport={{once:false , amount: 1}}
    //     whileInView={{opacity:1, scale:1}} 
    //     className="box"></motion.div> 
    //    <div className="page"></div> 
    // </div>
    

      //........................... now we plying with variants ..................
     <div>
      <motion.div
       variants = {containerVarient}
         initial = 'hidden'
         animate= 'visible' 
         transition={{staggerChildren : 0.1}}
      className="containerDiv">
         <motion.div
        variants={boxVarient}
        transition ={{duration : 1.3 , ease : "easeInOut"}}
          className="box"></motion.div>
                   <motion.div
        variants={boxVarient}
        transition ={{duration : 1.3 , ease : "easeInOut"}}
          className="box"></motion.div>
                   <motion.div
        variants={boxVarient}
        transition ={{duration : 1.3 , ease : "easeInOut"}}
          className="box"></motion.div>
      </motion.div>
    </div>
  )
}

export default App