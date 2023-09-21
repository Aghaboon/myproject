import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import ListItem from './ListItem';
import { motion } from "framer-motion";


const Skills = () => {
    const programmingLanguages = ['Java', 'Python', 'JavaScript'];
    const WebDevelopment = ['React', 'Node.js', 'HTML', 'CSS'];
    const TechnologiesTools = ['GitHub', 'Express', 'Sprint Boot', 'Maven', 'Swing', 'Lucidchart', 'Tkinter', 'Jira'];
    const SoftSkills = ['Problem-Solving', 'Teamwork', 'Communication'];
    const Languages = ['Fluent in Arabic', 'Good in English'];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            <div className="conText flex flex-col justify-center items-center">
                <div className="bgCont text-3xl flex flex-col justify-center items-center py-4 px-2">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="w-[80vw]">
                        <Accordion variant="splitted" selectionMode="multiple" className="accoDis flex flex-col justify-center items-center ">
                            <AccordionItem aria-label="Accordion 1" title={<p className="text-2xl font-bold">Programming Languages</p>} className="w-full text-2xl font-medium text-gray-800 bg-white">
                                <ListItem items={programmingLanguages} />
                            </AccordionItem>
                            <AccordionItem aria-label="Accordion 2" title={<p className="text-2xl font-bold">Web Development</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                                <ListItem items={WebDevelopment} />
                            </AccordionItem>
                            <AccordionItem aria-label="Accordion 3" title={<p className="text-2xl font-bold">Software Technologies and Tools</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                                <ListItem items={TechnologiesTools} />
                            </AccordionItem>
                            <AccordionItem aria-label="Accordion 4" title={<p className="text-2xl font-bold">Soft Skills</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                                <ListItem items={SoftSkills} />
                            </AccordionItem>
                            <AccordionItem aria-label="Accordion 5" title={<p className="text-2xl font-bold">Languages</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                                <ListItem items={Languages} />

                            </AccordionItem>
                        </Accordion>
                    </motion.div>

                </div>
            </div>
        </motion.div>


    );
}

export default Skills;