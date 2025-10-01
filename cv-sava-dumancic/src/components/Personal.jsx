function Personal(){
    return(
    <div>
        <h2>Personal Info</h2>
        <div className="flex text-white mt-6 gap-10">
            <div className="bg-[#384358] rounded-xl w-full min-h-[140px] p-5">
                <h2>Education</h2>
                <div >
                    <h4>Stevan Sremac Gymnasium</h4>
                    <span>2017</span>
                </div>
                <div>
                    <h4>Faculty of Electronic Engineering Niš</h4>
                    <span>Systems Management</span>
                </div>
            </div>
            <div className="bg-[#384358] rounded-xl w-full min-h-[140px] p-4">
                    <h2>Courses</h2>
                    <ul>
                        <li>Git & Github Course</li>
                        <li>Introduction to JavaScript</li>
                        <li>Advanced Javascript</li>
                        <li>React JS (with Tailwind)</li>
                        <li>English Course</li>
                    </ul>
            </div>
            <div className="bg-[#384358] rounded-xl w-full min-h-[140px] p-4">
                    <h2>Languages</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

            </div>
        </div>
    </div>
    )
}

export default Personal