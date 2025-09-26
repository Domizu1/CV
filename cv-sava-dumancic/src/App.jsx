import './index.css'
import About from './components/About'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBE4D8] ">
      <div className="w-full max-w-[1000px] h-[1100px] p-10 rounded-lg shadow-lg bg-[#161E2F]">
        <About />
      </div>
    </div>
  )
}

export default App
