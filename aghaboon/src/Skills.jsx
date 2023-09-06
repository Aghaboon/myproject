import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import ListItem from './ListItem';


const Skills = () => {
    const programmingLanguages = ['Java', 'Python', 'JavaScript'];
    const WebDevelopment = ['React', 'Node.js', 'HTML' , 'CSS'];
    const TechnologiesTools =['GitHub', 'Express', 'Sprint Boot','Maven', 'Swing', 'Lucidchart', 'Tkinter','Jira'];
    const SoftSkills = ['Problem-Solving', 'Teamwork','Communication'];
    const Languages = ['Fluent in Arabic', 'Good in English'];
    return ( 
        <div className="para text-3xl font-bold">
            <Accordion selectionMode="multiple" className="">
                <AccordionItem aria-label="Accordion 1" title="Programming Languages" className="pl-2 font-extrabold bg-gray-400">
                    <ListItem items={programmingLanguages} />
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 2" title="Web Development" className="pl-2 font-extrabold bg-cyan-500">
                    <ListItem items={WebDevelopment}/>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 3" title="Software Technologies and Tools" className="pl-2 font-extrabold bg-sky-500">
                    <ListItem items={TechnologiesTools}/>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 4" title="Soft Skills" className="pl-2 font-extrabold bg-blue-500">
                    <ListItem items={SoftSkills}/>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 5" title="Languages" className="pl-2 font-extrabold bg-blue-500">
                    <ListItem items={Languages} />
                </AccordionItem>
            </Accordion>
        </div>
     );
}
 
export default Skills;