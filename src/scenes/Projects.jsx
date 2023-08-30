import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative'>
      <a className={overlayStyles} href={link}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{description}</p>
      </a>

      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-2/3' />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className='flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title='Movie App'
            description='Movie App built with React Native and TMDB API'
            link='https://github.com/josiehandeveloper/movieApp'
          />
          <Project
            title='Music Player'
            description='Music App built with React, Redux, and Shazam API'
            link='https://lyriks-onthego.netlify.app/'
          />

          {/* ROW 2 */}
          <Project
            title='Dashboard'
            description='Full Stack Dashboard built with React on the front-end and MongoDB on the back-end'
            link='https://admin-frontend-fq6a.onrender.com '
          />
          <Project
            title='Job Search'
            description='React Native App built with JSearch API'
            link='https://github.com/josiehandeveloper/job-search-app'
          />
          <div
            className='flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
