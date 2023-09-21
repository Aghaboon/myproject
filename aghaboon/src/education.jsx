import './App.css';
import ListItem from './ListItem';
import { motion } from "framer-motion";

const Education = () => {
    const Educationlist = ['Prince Mugrin University', 'Expected Graduation: June 2024', 'Academic Achievements:']
    const Achievements = ['Awarded the Prince Faisal bin Abdulaziz Award for Academic Excellence in the preparatory year (2020/2021).']
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            <div className="conText flex flex-col justify-center items-center">
                <div className='bgCont py-2 px-4'>
                    <article>
                        <motion.b
                            animate={{ y: 0 }}
                            initial={{ y: "100%" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className='mainText text-3xl'>
                            Bachelor’s Degree in Software Engineering
                        </motion.b>
                        <motion.article
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <ListItem items={Educationlist} subitems={Achievements} />
                        </motion.article>
                    </article>
                </div>
            </div>
        </motion.div>

    );
}

export default Education;