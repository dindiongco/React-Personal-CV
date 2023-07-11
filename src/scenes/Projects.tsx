import PrimaryHeading from "../shared/PrimaryHeading"
import { SelectedPage } from "../shared/types"
import {motion} from "framer-motion"
import shortly from '../assets/shortly.png'
import room from '../assets/room-page.png'
import stockTracker from '../assets/stock-tracker.png'
import movieLib from '../assets/movie-lib.png'
import advice from '../assets/advice-generator.png'
import Project from "../components/Project"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const projects = [
    {
        'name': 'URL Shortening Landing Page',
        'description': 'Created an URL Shortening Application connected to shrtcde API to create shortened URLs and display them like in the designs. Used React and CSS for the frontend and Axios for the API connection.',
        'image': shortly,
        'url': 'https://github.com/dindiongco/url-shortening-landing-page'
    },
    {
        'name': 'Movie Library',
        'description': 'Flask Project where you can register and login and then add your own reviews and ratings based on movies you have watched. Each user will have a separate movie library saved in the database. Used an API to retrieve details on the movies such as the title and image of the movie. Created using Python Flask, CSS, Bootstrap 5 and HTML.',
        'image': movieLib,
        'url': 'https://github.com/dindiongco/movie-library'
    },
    {
        'name': 'Advice Generator',
        'description': 'Created an Advice Generator Application connected to Advice JSON API to generate the advice quotes. Used React and CSS for the frontend and Axios for the API connection.',
        'image': advice,
        'url': 'https://github.com/dindiongco/fem-advice-generator-app'
    },
    {
        'name': 'Stock Tracker',
        'description': 'Application built with Flask and Matplotlib. Uses Alphavantage API to take in daily, weekly or monthly data based on a stock ticker and displays it using a Matplotlib graph. Displays recent news based on the stock ticker using data from MarketAux API.',
        'image': stockTracker,
        'url': 'https://github.com/dindiongco/stock-tracker'
    },
    {
        'name': 'Room Landing Page',
        'description': 'Created a Landing page for room, with responsive design and slider. Used React-Typescript and CSS for the frontend.',
        'image': room,
        'url': 'https://github.com/dindiongco/room-landing-page'
    },
]

function Projects({setSelectedPage}: Props) {
  return (
    <section id='projects' className='md:h-full pt-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
            <motion.div
            className='mx-auto w-5/6' 
            initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}>
                <div className='md:w-5/6'>
                    <PrimaryHeading>HERE ARE SOME OF MY <span className="gradient-text">PROJECTS</span>...</PrimaryHeading>
                    <p className="my-5 pb-20">
                        I create projects to further my understanding and to learn new things whether it be languages or software development best practices.
                    </p>
                </div>
            </motion.div>
            <div className="md:w-6/7 mx-auto w-full overflow-x-auto overflow-y-hidden">
                <Swiper
                // install Swiper modules
                modules={[Scrollbar, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }}
                }
                scrollbar={{ draggable: true }}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="px-6"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide>
                            <Project 
                            key={`${project.name}-${index}`}
                            url={project.url}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects