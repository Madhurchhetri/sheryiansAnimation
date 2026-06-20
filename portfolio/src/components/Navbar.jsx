import Link from "next/link"
import TextRevela from "./TextRevela"


const Navbar = () => {
  return (
    <div className=" h-[6vh] z-[30] px-[3rem] top-0 left-0  flex items-center justify-between w-full text-black  bg-white">
      <div className="leftNameSide">
      <TextRevela>
        <Link href={"./"}> Madhur Chhetri </Link>
      </TextRevela>
        
      </div>
      <div className="rightLinkSide">
      <TextRevela className=" flex items-center gap-5">
        <Link href={"./"}> Home</Link>
        <Link href={'./about'}> About</Link>
        <Link href={'./contact'}> Contact</Link>
      </TextRevela>
        
      </div>
    </div>
  )
}

export default Navbar