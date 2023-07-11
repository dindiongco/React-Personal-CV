import { SelectedPage } from "../shared/types"
import PrimaryHeading from "../shared/PrimaryHeading"
import { motion } from "framer-motion"
import {useForm} from 'react-hook-form'
import welcomeCats from '../assets/undraw_welcome_cats.svg'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Contact({setSelectedPage}: Props) {
    const {
        register, formState: {errors}
    } = useForm()

  return (
    <section id="contact" className="md:h-full pt-40">
        <motion.div className="w-5/6 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            {/* HEADER */}
            <motion.div
            className='md:w-3/5'
            initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}>
                <PrimaryHeading>
                    <span className='gradient-text'>KEEP</span> IN TOUCH...
                </PrimaryHeading>
                {/* <p className='my-5'>
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p> */}
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className='mt-10 justify-between gap-20 md:flex '>
                <motion.div
                className='mt-10 basis-3/5 md:mt-0'
                initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
                    hidden: {opacity: 0, y:50},
                    visible: {opacity: 1, y: 0}
                }}>
                    <form target='_blank' method='POST' action='https://formsubmit.co/d42acb7a4cf7bb344d0276b8c02034e7'>
                        <input className='mb-5 w-full rounded-lg px-5 py-3 text-secondary-400' type="text" placeholder='NAME' 
                        {...register('name', {required:true, maxLength: 100})}/>
                        {errors.name && (
                            <p className='mt-1 text-primary-400'>
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                            </p>
                        )}
                        <input
                            className='mb-5 w-full rounded-lg px-5 py-3 text-secondary-400'
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" &&
                                "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}
                        <textarea className='mb-5 w-full rounded-lg px-5 py-3 text-secondary-400' placeholder='MESSAGE' rows={4} cols={50}
                        {...register('message', {required:true, maxLength: 2000})}/>
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === 'required' && 'This field is required.'}
                                {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                            </p>
                        )}
                        <button type="submit" className='mt-5 rounded-lg bg-secondary-400 px-20 py-3 transition duration-500 hover:text-primary-400'>
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div className='relative mt-16 basis-2/5 md:mt-0'
                initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{delay:0.2, duration: 0.5}} variants={{
                    hidden: {opacity: 0, y:50},
                    visible: {opacity: 1, y: 0}
                }}>
                    <div className=''>
                        <img className='w-full' src={welcomeCats} alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact