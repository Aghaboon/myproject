import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";


const Skills = () => {
    return ( 
        <div>

            <Accordion selectionMode="multiple" className="cont">
                <AccordionItem aria-label="Accordion 1" title="Programming Languages:" className="accordion-item">
                        <ul className='skillsList'>
                            <li className='skillsList'>
                                Java
                            </li>
                            <li className='skillsList'>
                                Python
                            </li>
                            <li className='skillsList'>
                                JavaScript
                            </li>
                        </ul>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 2" title="Web Development:" className="accordion-item">
                        <ul>
                            <li>
                                React
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 3" title="Software Technologies and Tools:" className="accordion-item">
                        <ul>
                            <li>
                                GitHub
                            </li>
                            <li>
                                Express 
                            </li>
                            <li>
                                Sprint Boot
                            </li>
                            <li>
                                Maven 
                            </li>
                            <li>
                                Swing
                            </li>
                            <li>
                                Lucidchart
                            </li>
                            <li>
                                Tkinter 
                            </li>
                            <li>
                                Jira
                            </li>
                        </ul>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 4" title="Soft Skills:" className="accordion-item">
                        <ul>
                            <li >
                                Problem-Solving
                            </li>
                            <li>
                                Teamwork
                            </li>
                            <li>
                                Communication
                            </li>
                        </ul>
                </AccordionItem>
                <AccordionItem  aria-label="Accordion 5" title="Languages:" className="accordion-item">
                        <ul>
                            <li>
                                Fluent in Arabic
                            </li>
                            <li>
                                Good in English
                            </li>
                        </ul>
                </AccordionItem>
            </Accordion>
            {/* <article className='eduPara'>
                <ul>
                    <li>
                        <b>Programming Languages:</b>
                        <ul className='skillsList'>
                            <li className='skillsList'>
                                Java
                            </li>
                            <li className='skillsList'>
                                Python
                            </li>
                            <li className='skillsList'>
                                JavaScript
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Web Development:</b>
                        <ul>
                            <li>
                                React
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Software Technologies and Tools:</b>
                        <ul>
                            <li>
                                GitHub
                            </li>
                            <li>
                                Express 
                            </li>
                            <li>
                                Sprint Boot
                            </li>
                            <li>
                                Maven 
                            </li>
                            <li>
                                Swing
                            </li>
                            <li>
                                Lucidchart
                            </li>
                            <li>
                                Tkinter 
                            </li>
                            <li>
                                Jira
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Soft Skills:</b>
                        <ul>
                            <li >
                                Problem-Solving
                            </li>
                            <li>
                                Teamwork
                            </li>
                            <li>
                                Communication
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Languages:</b>
                        <ul>
                            <li>
                                Fluent in Arabic
                            </li>
                            <li>
                                Good in English
                            </li>
                        </ul>
                    </li>
                </ul>
            </article> */}
        </div>
     );
}
 
export default Skills;