import {useRef} from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Samvaad: Blogging Platform",
        img:"/SAMVAD6.jpg",
        desc:"Samvaad is a blogging website built using the MEAN stack, offering multiple pages for users to share thoughts and stories. Though not fully responsive, it allows bloggers to post and interact, fostering an online community.",
        
    },
    {
        id:2,
        title:"Slurpy: Recipe Website",
        img:"/slurpy.jpg",
        desc:"Slurpy is a cooking recipe website designed to provide users with a variety of dishes. It features detailed recipe instructions, ingredient lists, and user-friendly navigation to help both beginners and seasoned cooks explore new meals.",

    },
    {
        id:3,
        title:"RailResolve: Travel Partner",
        img:"/railmadad.jpg",
        desc:"RailResolve is a website offering train journey support, featuring a chatbot, sentiment analysis for urgent issues, SOS alerts, image detection for reporting issues, feedback forms, and regional language options.",

    }
];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref,
        //  offset:["start start","end start"]
        });

    const y = useTransform(scrollYProgress,[0,1], [-300,300])


    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
    
  );
};

export default Portfolio