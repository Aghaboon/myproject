import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import ListItem from './ListItem';


const Skills = () => {
    const programmingLanguages = ['Java', 'Python', 'JavaScript'];
    const WebDevelopment = ['React', 'Node.js', 'HTML', 'CSS'];
    const TechnologiesTools = ['GitHub', 'Express', 'Sprint Boot', 'Maven', 'Swing', 'Lucidchart', 'Tkinter', 'Jira'];
    const SoftSkills = ['Problem-Solving', 'Teamwork', 'Communication'];
    const Languages = ['Fluent in Arabic', 'Good in English'];
    return (
        <div className="conText flex flex-col justify-center items-center">
            <div className="bgCont text-3xl flex flex-col justify-center items-center py-3 px-2.5">
                <Accordion variant="splitted" selectionMode="multiple" className="accoDis flex flex-col justify-center items-center ">
                    <AccordionItem aria-label="Accordion 1" title={<p className="text-2xl ">Programming Languages</p>} className="w-full text-2xl font-medium text-gray-800 bg-white">
                        <ListItem items={programmingLanguages} />
                    </AccordionItem>
                    <AccordionItem aria-label="Accordion 2" title={<p className="text-2xl">Web Development</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                        <ListItem items={WebDevelopment} />
                    </AccordionItem>
                    <AccordionItem aria-label="Accordion 3" title={<p className="text-2xl">Software Technologies and Tools</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                        <ListItem items={TechnologiesTools} />
                    </AccordionItem>
                    <AccordionItem aria-label="Accordion 4" title={<p className="text-2xl">Soft Skills</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                        <ListItem items={SoftSkills} />
                    </AccordionItem>
                    <AccordionItem aria-label="Accordion 5" title={<p className="text-2xl">Languages</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
                        <ListItem items={Languages} />

                    </AccordionItem>
                </Accordion>
            </div>
        </div>

    );
}

export default Skills;