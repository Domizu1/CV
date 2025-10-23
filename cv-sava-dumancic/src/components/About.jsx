import avatar from "../assets/sava_avatar.png"
import gym from "../assets/gym.svg"
import book from "../assets/book.svg"
import plane from "../assets/plane.svg"
import run from "../assets/runner.svg"
import astronomy from "../assets/astronomy.svg"
import coffee from "../assets/coffee.svg"
import { motion } from "framer-motion"

function About() {
  return (
    <div className="flex gap-8">
      <div>
        <img
          src={avatar}
          alt="picture"
          className="h-[320px] w-auto rounded-xl mr-6 shadow-2xl"
        />
      </div>

      <div className="flex flex-col gap-6">
        <motion.div className="text-[#C7C9D9] bg-[#384358] w-[550px] p-5 rounded-2xl"
            initial={{ opacity: 0, x:-100, filter: "blur(10px)" }}
              animate={{ opacity: 1, x:0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.8,
              }}
        >
          <motion.p className="leading-relaxed"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 1.2,
              }}
            >
            I am a Frontend Developer with solid knowledge of JavaScript, HTML,
            and CSS, as well as strong experience in React and modern web
            technologies. My journey in development started with a brief period
            working on backend systems, which gave me a deeper understanding
            of how everything connects behind the scenes.
          </motion.p>
        </motion.div>

        <motion.div className="bg-[#384358] w-[550px] flex items-center text-[#C7C9D9] rounded-xl p-4"
          initial={{ opacity: 0, x:300, filter: "blur(10px)" }}
              animate={{ opacity: 1, x:0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.8,
              }}
        >
          <motion.span className="text-[#C7C9D9] font-semibold"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
          >
            Intrests</motion.span>
          <motion.span className="mx-4 h-15 w-px bg-[#C7C9D9]/50"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
          ></motion.span>

          <motion.div className="flex gap-3 flex-wrap"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
          >
            <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2">
               <span>
                <img src={gym} alt="gym-icon" className="w-7 h-7 align-middle" />
               </span>
                <p>CrossFit</p>
            </div>
            <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2">
               <span>
                <img src={book} alt="book-icon" className="w-7 h-7 align-middle"/>
               </span>
                <p>Comics & Books</p>
            </div>
            <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2">
               <span>
                <img src={plane} alt="plane-icon" className="w-7 h-7 align-middle" />
               </span>
                <p>Travel</p>
            </div>
            <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2">
               <span>
                <img src={run} alt="" className="w-7 h-7 align-middle"/>
               </span>
                <p>Trail Races</p>
            </div>
            <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2">
               <span>
                <img src={astronomy} alt="" className="w-7 h-7 align-middle"/>
               </span>
                <p>Astronomy</p>
            </div>
            <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2">
               <span>
                <img src={coffee} alt="" className="w-7 h-7 align-middle"/>
               </span>
                <p>Coffee</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
