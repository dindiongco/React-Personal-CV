import { SelectedPage } from "../shared/types"
import {motion} from 'framer-motion'
import PrimaryHeading from "../shared/PrimaryHeading"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Experience({setSelectedPage}: Props) {
  return (
    <section id='experience' className='md:h-full pt-40'>
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

        <motion.div
        className='h-[50%]'
        initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x: 0}
        }}>
            <h3 className="py-4">
                <span className='gradient-text'>Infosys</span> - Consultant {'(11/2021 - 04/2023)'}
            </h3>
            <div className="">
                <p>
                As a Developer for British Petroleum (BP), I worked on a project that involved the use of Python and AWS to monitor the end-to-end services at clients’ sites and provide data visualisation as well as alerting capabilities when certain metrics were not met. During this project, I was able to develop my Python programming skills such as writing scripts to automate email alerts and pull data in from different sources and persisting it into a database. Further to this, I developed my knowledge in AWS and event driven architecture to get real time data using services such as SNS/SQS and CloudWatch Logs, and then use Lambda functions to retrieve that data. I worked on the UI/UX of the application for visualising data that is easily digestible for stakeholders, and this involved building complex SQL queries. The project also used Agile Methodologies with daily stand up and weekly sprints to consistently meet and exceed the clients’ needs.
                </p>
            </div>
        </motion.div>

        <motion.div
        className='h-[50%]'
        initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.5}} transition={{duration: 0.5}} variants={{
            hidden: {opacity: 0, x:-50},
            visible: {opacity: 1, x: 0}
        }}>
            <h3 className="py-4">
                <span className='gradient-text'>QA LIMITED</span> - Consultant {'(06/2021 - 11/2021)'}
            </h3>
            <div className="grid gap-3">
                <p>
                    As a trainee SDET Consultant, I worked on three different projects to hone my skills in Software Development. The projects helped me develop a foundation in Software Development with skills to develop fully functional and tested Full-stack applications. I learned how to use Java to for Backend Development using the Spring Boot framework, Javascript along with CSS for Frontend development and MySQL for the database. All projects were tested aiming for industry standard 80% coverage. Checkout some of the projects <a target="_blank" href="https://github.com/dindiongco"><span className="text-primary-400 font-bold">here</span></a>.
                </p>
            </div>
        </motion.div>


        </motion.div>
    </section>
  )
}

export default Experience