import './index.css'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Personal from './components/Personal'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBE4D8] ">
      <div className="w-full max-w-[1000px] h-full p-10 rounded-lg shadow-lg bg-[#161E2F]">
        <About />
        <Experience />
        <Skills />
        <Personal />
      </div>
    </div>
  )
}

export default App
