import React from 'react';
import './NavBar.css';
// import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import aghaboon from './assets/Aghaboon.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} height={"fit-content"}>
      <div className='flex flex-col justify-center w-full'>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className='w-full justify-center'>
            <img src={aghaboon} className="w-[100px] rounded-full aspect-square object-cover" />
            <p className="font-bold text-inherit">
              <h1>Abdulrahman Ghubun</h1>
              <h2>Senior Software Engineering Student</h2>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 justify-between" justify="between" >
          <NavbarItem>
            <Link color="foreground" href="/home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/education" aria-current="page">
              Education
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/workExperinces">
              Work Experinces
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/skills">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contectMe">
              Contect Me
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>


    // <div className='NavBar'>
    //     <div className='name-major'>
    //         <div className='image-container'>
    //           <img src={aghaboon} alt='aghaboon' className='inline align-middle mr-2.5 pr-1.5 py-0.5' style={{ width: '140px', height: '180px', borderRadius: '50%' }} />
    //         </div>
    //         <div className='text-container'>
    //             <h1 className='myname'>Abdulrahman Ghubun</h1>
    //             <h2 className='mymajor'>Senior Software Engineering Student</h2>
    //         </div>
    //     </div>
    //     <div className='navbar-menu'>
    //       <ul className='nav-list'>
    //           <li className='nav-item'>
    //             <Link to='/home'>Home</Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link to='/education'>Education</Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link to='/workExperinces'>Work Experinces</Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link to='/projects'>Projects</Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link to='/skills'>Skills</Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link to='/contectMe'>Contect Me</Link>
    //           </li>
    //       </ul>
    //     </div>
    // </div>
  );
};

export default NavBar;
