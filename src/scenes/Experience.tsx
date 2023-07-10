import { SelectedPage } from "../shared/types"
import {motion} from 'framer-motion'
import PrimaryHeading from "../shared/PrimaryHeading"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Experience({setSelectedPage}: Props) {
  return (
    <section id='experience' className='md:h-full py-10'>
        {/*  */}
        <motion.div className='md:h-[75%] py-8 w-5/6 mx-auto'
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}>
            {/* HEADER */}
            <motion.div
            className='md:w-3/5'
            initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}>
                <PrimaryHeading>
                    <span className='gradient-text'>EXPERIENCE</span>
                </PrimaryHeading>
        </motion.div>

        <div>
            <motion.div
            className='md:w-3/5'
            initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}>
                <PrimaryHeading>
                    <span className='gradient-text'>QA LIMITED</span> - 
                </PrimaryHeading>
            </motion.div>
        </div>


        </motion.div>
    </section>
  )
}

export default Experience