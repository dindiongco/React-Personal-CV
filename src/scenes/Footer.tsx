import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <footer className="bg-secondary-400 py-6">
        <div className="mx-auto w-5/6 gap-16 md:flex justify-center items-center">
            <div>
                <ul className="flex justify-center gap-8 py-8 scale-[200%]">
                    <li><a href="https://www.linkedin.com/in/david-indiongco/"><AiFillLinkedin/></a></li>
                    <li><a href="https://github.com/dindiongco"><AiFillGithub/></a></li>
                </ul>
                <p>© David Indiongco - All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer