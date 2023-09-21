import ListItem from './ListItem';
import { motion } from "framer-motion";

const WorkExperinces = () => {
    const bineyes = ['Bineyes', 'June 2023 – August 2023', 'Academic Achievements:']
    const Achievements = [
        'Contributed to creating a prototype design for a web application.',
        'Developed the front-end of the web application and documented the software.',
        'Followed Agile-Scrum software development methodology.',
        'Utilized: Figma, HTML, CSS, JavaScript, Django, Jira.'
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            <div className='conText flex flex-col justify-center items-center'>
                <div className='bgCont py-2 px-4'>
                    <article>
                        <b className='mainText text-3xl'>Front-end Development Intern</b>
                        <motion.article
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <ListItem items={bineyes} subitems={Achievements} />
                        </motion.article>

                    </article>
                </div>

            </div>
        </motion.div>

    );
}

export default WorkExperinces;