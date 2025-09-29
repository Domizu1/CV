import html from "../assets/html.svg"
import react from "../assets/react.svg"
import css from "../assets/css.svg"
import tailwind from "../assets/tailwind.svg"
import js from "../assets/js.svg"
import git from "../assets/git.svg"
import github from "../assets/github.svg"
import jira from "../assets/jira.svg"
import figma from "../assets/figma.svg"
import linux from "../assets/linux.svg"



function Skills(){
  return(
    <div className=" gap-10 mt-5 items-start">
      <div className="grid gap-8">

        <div className="bg-[#384358] flex w-full justify-between  items-center text-[#C7C9D9] rounded-xl p-4 mt-6 gap-10">
          <h3 className="w-[180px] tracking-wider">Programing Skills</h3>
          <span className="mx-1 self-stretch w-px bg-[#C7C9D9]/50"></span>
          <div className="flex gap-20">
            <span><img src={js} alt="js-icon" className="w-10 h-10"/></span>
            <span><img src={react} alt="react-icon" className="w-10 h-10"/></span>
            <span><img src={html} alt="html-icon"className="w-10 h-10" /></span>
            <span><img src={css} alt="css-icon" className="w-10 h-10"/></span>
            <span><img src={tailwind} alt="tailwind-icon" className="w-10 h-10"/></span>
          </div>
        </div>

        <div className="bg-[#384358] flex justify-between  items-center text-[#C7C9D9] rounded-xl p-4 gap-10">
          <h3 className="w-[180px] tracking-wider">General Skills</h3>
          <span className="mx-1 self-stretch w-px bg-[#C7C9D9]/50"></span>
          <div className="flex gap-20">
            <span><img src={git} alt="git-icon" className="w-10 h-10"/></span>
            <span><img src={github} alt="github-icon" className="w-10 h-10"/></span>
            <span><img src={jira} alt="jira-icon"className="w-10 h-10" /></span>
            <span><img src={figma} alt="figma-icon" className="w-10 h-10"/></span>
            <span><img src={linux} alt="linux-icon" className="w-10 h-10"/></span>
          </div>
        </div>
      </div>
      {/* <div className="row-span-2 bg-[#384358] text-[#C7C9D9] rounded-xl mt-6 h-[175px] flex flex-col justify-between items-center text-center py-4">
        <h1 className="text-xl tracking-wider">Languages</h1>
        <div className="flex flex-col items-center gap-2">
            <p className="font-semibold">Serbian</p>
            <p className="font-semibold">English</p>
        </div>
    </div> */}
</div>
  )
}


export default Skills 