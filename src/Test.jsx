import {motion} from "framer-motion"
export const Test = () => {
  const variants ={
    visible:{opacity:1},
    hidden: {opacity:0},
  }

  return (
    <div className="course">
        <motion.div className="box"  variants={variants} initial="hidden" animate="visible" transition={{duration:2}}></motion.div>
    </div>
  )
}
