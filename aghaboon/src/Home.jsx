import './App.css';
import { motion } from "framer-motion";

const Home = () => {
  const Space = '\u00A0\u00A0\u00A0\u00A0\u00A0';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className='conText flex flex-col justify-center items-center'>
        <div className='bgCont py-2 px-4' >
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className='mainText font-bold text-3xl'>
            About Me
          </motion.h1>
          <motion.article
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-xl font-medium leading-9'>
            {Space} I am a senior Software Engineering student with a deep passion for both front-end and back-end development.
            During my internship at Bineyes, I gained valuable experience in creating web prototypes and developing user interfaces, adhering to Agile-Scrum methodologies to ensure efficient project management.
            <br />
            {Space} Currently, I am pursuing a Bachelor's Degree in Software Engineering at Prince Mugrin University,
            where I have consistently excelled academically, earning accolades for my dedication to excellence.
            <br />
            {Space} Professionally, I am proficient in a range of programming languages and technologies, including HTML, CSS, JavaScript, and Python.
            My hands-on experience spans various projects, from web applications to chat rooms and puzzle-solving applications, showcasing my ability to tackle diverse challenges.
            <br />
            {Space} My commitment to continuous learning is evidenced by my certifications in JavaScript, CSS, HTML, and UI/UX design.
            Beyond my technical proficiency, I am an active member of esteemed student clubs such as the Google Developer Students Club and the Software Engineering Club.
            These involvements reflect my dedication to personal and professional growth within the software engineering field.
          </motion.article>
        </div>
      </div>
    </motion.div>


  );
}

export default Home;