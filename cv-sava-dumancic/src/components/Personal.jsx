import coursesImg from '../assets/coursesvg.svg'
import educationImg from '../assets/educationsvg.svg'
import languageImg from '../assets/speaksvg.svg'


function Personal(){
    return(
    <div>
        <h2 className='text-white text-center text-2xl font-semibold mb-6 mt-4 tracking-[8px]'>Personal Info</h2>
        <div className="flex text-white mt-6 gap-10">
            <div className="bg-[#384358] rounded-xl w-full min-h-[140px] p-5">
                <div className='flex items-center gap-2'>
                    <h2 className="font-semibold text-[20px]">Education</h2>
                    <img src={educationImg} alt="educationImg" className='w-7 h-7'/>
                </div>
                
                <div className="border-b border-gray-500 my-4 pb-4">
                    <h4>Stevan Sremac Gymnasium</h4>
                    <span>2017</span>
                </div>
                <div>
                    <h4>Faculty of Electronic Engineering Niš</h4>
                    <span>Systems Management</span>
                </div>
            </div>
            <div className="bg-[#384358] rounded-xl w-full min-h-[140px] p-4">
                    <div className='flex items-center gap-3'>
                        <h2 className="font-semibold text-[20px]">Courses</h2>
                        <img src={coursesImg} alt="coursesImg" className='w-7 h-7'/>
                        
                    </div>
                    
                    <ul className="gap-3 mt-4 flex flex-col">
                        <li className="border-b border-gray-500">Git & Github Course</li>
                        <li className="border-b border-gray-500">Introduction to JavaScript</li>
                        <li className="border-b border-gray-500">Advanced Javascript</li>
                        <li className="border-b border-gray-500">React JS (with Tailwind)</li>
                        <li className="border-b border-gray-500">English Course</li>
                    </ul>
            </div>
            <div className="bg-[#384358] rounded-xl w-full min-h-[140px] p-4">
                <div className='flex items-center gap-3'>
                    <h2 className='font-semibold text-[20px]'>Languages</h2>
                    <img src={languageImg} alt="languageImg" className='w-7 h-7' />
                </div>
                    <ul className='gap-3 mt-4 flex flex-col gap-4 mt-10'>
                        <li className='border-b border-gray-500'>English</li>
                        <li className='border-b border-gray-500'>Serbian</li>
                        <li className='border-b border-gray-500'>Croatian</li>
                    </ul>

            </div>
        </div>
    </div>
    )
}

export default Personal