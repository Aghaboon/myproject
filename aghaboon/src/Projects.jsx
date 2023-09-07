import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const Projects = () => {
  let tabs = [
    {
      id: "Takaful",
      label: "Takaful Club",
      content: [
        "A web application that enables the administration to post programs on the website allows participants to register for them. Also, participants have been automatically distributed for transportation.",
        "Contributed to create database and developing backend.",
        "JavaScript Express Mysql",
      ],
    },
    {
      id: "OnlyBooks",
      label: "OnlyBooks",
      content: [
        "A software application designed for college students that enables them to buy, sell, or borrow used books by providing a user-friendly platform that makes the exchange process simpler, quicker, and more secure.",
        "Contributed to analysis and design models of the project.",
      ],
    },
    {
      id: "Inky",
      label: "Inky Puzzle",
      content: [
        "Developed the client-Server where the client requests a solved puzzle image or an unsolved image from the server.",
        "The final version includes the functions that solve the puzzle, and check whether the user’s solution is correct.",
        "#Java #Spring Boot #Maven #Swing",
      ],
    },
    {
      id: "Chat",
      label: "Chat Application",
      content: [
        "Contributed to developing a chat room using a client-server architecture. The chat room also allows multiple users to join and send messages simultaneously.",
        "#Python #Tkinter",
      ],
    },
  ];

  return (
    <div>
      <div className="para pt-[250px] grid justify-center w-full ">
        <Tabs aria-label="Dynamic tabs" items={tabs} className="flex justify-center w-full">
          {(item) => (
            <Tab key={item.id} title={item.label} >
              <Card className="w-[60vw]">
                <CardBody>
                  <ul>
                    {item.content.map((point, index) => (
                      <li className="list-disc list-inside" key={index}>{point}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
