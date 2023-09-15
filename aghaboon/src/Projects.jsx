import { Accordion, AccordionItem } from "@nextui-org/accordion";
import ListItem from './ListItem';

const Projects = () => {
  const PersonalWebsite = ['Developed a responsive personal portfolio website using React.', 
  'Integrated LinkedIn and GitHub profiles for easy access.', 
  'Implemented a dynamic contact form for visitor inquiries.', 
  'Technologies:'];
  const subWebsite = ['React.js', 'NextUI']
  const Takaful = [
    'A web application that enables the administration to post programs on the website allows participants to register for them. Also, participants have been automatically distributed for transportation.',
    'Contributed to create database and developing backend.',
    'Technologies:'];
  const subTakaful = ['JavaScript', 'Express', 'Mysql']
  const OnlyBooks = [
    'A software application designed for college students that enables them to buy, sell, or borrow used books by providing a user-friendly platform that makes the exchange process simpler, quicker, and more secure.',
    'Contributed to analysis and design models of the project.'
  ];
  const Inky = [
    'Developed the client-Server where the client requests a solved puzzle image or an unsolved image from the server.',
    'The final version includes the functions that solve the puzzle, and check whether the user’s solution is correct.',
    'Technologies:'
  ];
  const subInky = ['Java', 'Spring Boot', 'Swing'];
  const Chat = [
    'Contributed to developing a chat room using a client-server architecture. The chat room also allows multiple users to join and send messages simultaneously.',
    'Technologies:'
  ];
  const subChat = ['Python', 'Tkinter'];
  return (
    <div className="conText flex flex-col justify-center items-center">
      <div className="bgCont text-3xl flex flex-col justify-center items-center py-4 px-2">
        <Accordion variant="splitted" selectionMode="multiple" className="accoDis flex flex-col justify-center items-center ">
          {/* <AccordionItem aria-label="Accordion 1" title={<p className="text-2xl ">Personal Portfolio Website</p>} className="text-2xl font-medium text-gray-800 bg-white">
            <ListItem items={PersonalWebsite} subitems={subWebsite} />
          </AccordionItem> */}
          <AccordionItem aria-label="Accordion 1" title={<p className="text-2xl font-bold">Takaful</p>} className="w-full  text-2xl font-medium text-gray-800 bg-white">
            <ListItem items={Takaful} subitems={subTakaful} />
          </AccordionItem>
          <AccordionItem aria-label="Accordion 2" title={<p className="text-2xl font-bold">OnlyBooks</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
            <ListItem items={OnlyBooks} />
          </AccordionItem>
          <AccordionItem aria-label="Accordion 3" title={<p className="text-2xl font-bold">Inky Puzzle</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
            <ListItem items={Inky} subitems={subInky} />
          </AccordionItem>
          <AccordionItem aria-label="Accordion 4" title={<p className="text-2xl font-bold">Chat Application</p>} className="w-full text-2xl font-medium text-gray-800 bg-gray-400">
            <ListItem items={Chat} subitems={subChat} />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;
