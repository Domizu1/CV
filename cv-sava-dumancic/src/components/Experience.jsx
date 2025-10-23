import { easeIn, motion } from "framer-motion"

function Experience(){
    return(
        <>
        <div>
           <motion.h1
      className="text-white text-center text-2xl font-semibold mb-6 mt-4 tracking-[8px]"
      initial={{ opacity: 0, x: -100 , filter: "blur(4px)"}}
      animate={{ opacity: 1, x: 0 , filter: "blur(0px)"}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 1.6
      }}
    >
      Work Experience
    </motion.h1>
        </div>
        <div className="flex justify-between items-start w-full mx-auto gap-6 mt-6">
            <motion.div className="flex-1"
                initial={{ opacity: 0, filter: "blur(4px)"}}
                animate={{opacity: 1, filter: "blur(0px)"}}
                transition={{
                    duration:0.5,
                    ease: easeIn,
                    delay: 1.8
                }}
                >
                <div className="text-white bg-[#384358] rounded-xl w-[450px] h-[300px] p-4">
                <motion.h1
                    className="text-xl opacity-90 font-semibold"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                        delay: 1.8
                    }}
                    >
                Better Collective
                </motion.h1>
                <motion.h3 className="text-lg mt-1 opacity-70"
                    initial={{ filter: "blur(4px)" , opacity: 0.5 }}
                    animate={{ filter: "blur(0px)" , opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 2
                    }}
                >Ad Tech Specialist</motion.h3>
                <motion.span className="text-xs opacity-50"
                    initial={{ filter: "blur(4px)" , opacity: 0.5 }}
                    animate={{ filter: "blur(0px)" , opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 2
                    }}
                >2023 - present</motion.span>
                <div className="border-b border-gray-500/80 my-2"></div>
                <motion.p className="mt-4 text-sm tracking-wide space-y-1"
                    initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 2
                    }}
                >
                        In this role, I advanced my skills and expanded my knowledge through the support
                        of an exceptional team. I developed strong multitasking abilities and adapted to a
                        fast-paced, dynamic environment. This company provided opportunities for
                        growth, even beyond my core field, helping me continually evolve. I look forward
                        to building on these experiences as the pace of change accelerates.
                </motion.p>
            </div>  
            </motion.div>
            <motion.div className="text-white bg-[#384358] rounded-xl w-[450px] h-[300px] p-4"
                initial={{ opacity: 0, filter: "blur(4px)"}}
                animate={{opacity: 1, filter: "blur(0px)"}}
                transition={{
                    duration:0.5,
                    ease: easeIn,
                    delay: 1.8
                }}
            >
                <motion.h1 className="text-xl opacity-90 font-semibold"
                    initial={{ filter: "blur(4px)" , opacity: 0.5 }}
                    animate={{ filter: "blur(0px)" , opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                        delay: 2
                    }}
                >Syrmia Way (Now part of AMD)</motion.h1>
                <motion.h3 className="text-lg mt-1 opacity-70"
                    initial={{ filter: "blur(4px)" , opacity: 0.5 }}
                    animate={{ filter: "blur(0px)" , opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 2
                    }}
                >Practicant (Paid Internship)</motion.h3>
                <motion.span className="text-xs opacity-50"
                    initial={{ filter: "blur(4px)" , opacity: 0.5 }}
                    animate={{ filter: "blur(0px)" , opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 2
                    }}
                >2021 - 2023</motion.span>
                <div className="border-b border-gray-500/80 my-2"></div>
                <motion.p className="mt-4 text-sm list-disc list-inside tracking-wide textspace-y-1"
                    initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 2
                        }}>
                    Gained invaluable hands-on experience with an exceptional company where I
                    built the foundational skills I apply today. Here, I mastered key technical concepts
                    and learned the importance of professional conduct and effective collaboration.
                    Worked on diverse projects spanning backend and frontend development
                </motion.p>
            </motion.div>
        </div>
        </>
    )
}


export default Experience