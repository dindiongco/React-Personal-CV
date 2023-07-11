import { motion } from 'framer-motion'
import { SelectedPage } from '../shared/types'
import PrimaryHeading from '../shared/PrimaryHeading'
import digitalNomadImg from '../assets/undraw_digital_nomad.svg'
import useMediaQuery from '../hooks/useMediaQuery'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function About({setSelectedPage} : Props) {
    const isAboveMediumScreens = useMediaQuery('(min-width: 767px)')

  return (
    <section id='about' className='md:h-full pt-40'>
        <div className="w-5/6 mx-auto md:h-full">
            <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.About)} className='md:flex gap-20'>
                {/* IMAGE */}
                {isAboveMediumScreens && <div className='basis-[50%]'>
                    <img className='md:h-[80%] md:w-[580%]' src={digitalNomadImg} alt="" />
                </div>}
                {/* HEADER */}
                <motion.div
                className="basis-[50%] text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
            
                    <PrimaryHeading>About Me</PrimaryHeading>
                    <p className='py-8'>My interest in the IT industry started mainly during my Economics course at university. I was part of many group projects where I was always learning about new technologies. I had to use software-based systems such as MATLAB and STATA MP to complete my assignments. With Economics being an analytical and data focused degree, I was able to practice these skills and further improve upon them. My experience at university has helped me realise that I enjoy working with the software aspect of technology and I look forward to building upon my programming knowledge.</p>
                    <p>I currently specialise in using Python and AWS Technologies to accelerate data processes along with being skilled at designing highly resilient web pages.</p>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default About