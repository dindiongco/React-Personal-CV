import { SelectedPage } from '../shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import multitaskingImg from '../assets/undraw_multitasking.svg'
import PrimaryHeading from '../shared/PrimaryHeading'
import IconSlider from '../components/IconSlider'
import useMediaQuery from '../hooks/useMediaQuery'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Home({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery('(min-width:767px)')

  return (
    <section id='home' className='md:h-full py-10'>
        {/*  */}
        <motion.div className='md:flex md:h-[75%] py-8 items-center justify-center gap-20 w-5/6 mx-auto'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/* MAIN HEADER */}
            <div className='basis:3/5'>
                {/* HEADINGS */}
                <motion.div className='text-center md:text-left' 
                initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }}>
                    <PrimaryHeading>DAVID INDIONGCO</PrimaryHeading>
                    <h3 className='basis-3/5 font-montserrat text-xl font-bold italic gradient-text py-4'>
                        a Software Developer.
                    </h3>
                </motion.div>

                {/* ACTIONS */}
                <motion.div className='text-center md:text-left'
                initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{delay:0.2, duration: 0.5}} variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }}>
                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-primary-400 mb-8'
                    onClick={() => setSelectedPage(SelectedPage.Contact)}
                    href={`#${SelectedPage.Contact}`}>
                        <button className='bg-secondary-400 rounded-md p-3'>Get In Touch</button>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* IMAGE */}
            <div className='basis-1/3'>
                <img src={multitaskingImg} alt="multi-tasking-graphic" />
            </div>
        </motion.div>
        {/* Carousel */}
        {isAboveMediumScreens && 
        <div className='w-5/6 mx-auto'>
            <IconSlider></IconSlider>
        </div>
        }
    </section>
  )
}

export default Home