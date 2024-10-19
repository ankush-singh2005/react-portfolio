import "./services.scss"
import {animate, motion} from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
}

const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on making websites that have
             <br />  a good user experience</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1> <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Designs</h1>
            </div>
            <div className="title">
                
                <h1> <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
            <motion.div className="box" whileHover={{backgroundColor: "#FADCD5", color:"black"}}>
                <h2>Custom Designs</h2>
                <p>I craft responsive, tailored websites that capture your brand’s essence. Whether you need a new site or redesign, I deliver unique solutions to engage your audience and drive results.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: "#FADCD5", color:"black"}}>
                <h2>Scalable</h2>
                <p>I build scalable, secure web applications using cutting-edge technologies. My solutions ensure your website adapts and grows with your business, providing speed, performance, and reliability every step of the way.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: "#FADCD5", color:"black"}}>
                <h2>User Friendly</h2>
                <p>I design intuitive, mobile-optimized websites that offer seamless user experiences across all devices. Your site will be easy to navigate and fully responsive, ensuring users stay engaged and satisfied.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: "#FADCD5", color:"black"}}>
                <h2>Customer Support</h2>
                <p>Fast, reliable development with clear communication. I meet deadlines and offer post-launch support, ensuring your website stays up to date and performs efficiently as your business evolves.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services