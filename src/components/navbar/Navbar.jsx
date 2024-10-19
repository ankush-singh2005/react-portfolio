import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar></Sidebar>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}}>Ankush</motion.span>
            <div className="social">
                <a href="https://www.instagram.com/eeryhue/"><img src="/instagram.png" alt="" /></a>
                <a href="https://leetcode.com/u/weirderror/"><img src="/leetcode.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/ankushsingh18/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/ankush-singh2005"><img src="/github.webp" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
