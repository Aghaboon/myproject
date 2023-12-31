import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import aghaboon from './assets/Aghaboon.png'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItes = [
    "Home",
    "Education",
    "Work Experinces",
    "Projects",
    "Skills",
    "Contact Me",
  ];

  const menuItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Education",
      to: "/education",
    },
    {
      label: "Work Experiences",
      to: "/workExperinces", // Adjust this to match your actual route
    },
    {
      label: "Projects",
      to: "/projects", // Adjust this to match your actual route
    },
    {
      label: "Skills",
      to: "/skills", // Adjust this to match your actual route
    },
    {
      label: "Contact Me",
      to: "/contactMe", // Adjust this to match your actual route
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} height={"fit-content"} className='nav  pb-3'>
      <div className='flex flex-col justify-center w-full'>
        <div className='flex flex-col justify-center w-full items-center pt-2'>
          <NavbarContent className='navmobile bg-gray-100 w-[80vw] shadow-inner rounded-lg'>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="navmenumobile md:hidden h-[20px] w-[30px] absolute top-[90px] left-[45px]"
            />
            <NavbarBrand className='flex-reverse w-full justify-center px-1.5 py-1.5  '>
              <img src={aghaboon} className="imagGH w-[130px] rounded-full aspect-square object-cover mr-6" />
              <article className="font-bold text-inherit text-center " >
                <h1 className='myname text-4xl '>Abdulrahman Ghubun</h1>
                <h2 className='mymajor text-2xl'>Senior Software Engineering Student</h2>
              </article>
            </NavbarBrand>
          </NavbarContent>
        </div>

        <div className='flex flex-col justify-center w-full items-center pt-5'>
          <NavbarContent className="hidden md:flex gap-4 justify-between py-2 px-4 bg-gray-100 w-[80vw] shadow-inner rounded-lg" justify="between" >
            <NavbarItem >
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "rgb(30 64 175)" : "",
                  };
                }}
                className='contTextNav text-2xl font-medium text-black hover:text-blue-500'
              >
                Home
              </NavLink>
            </NavbarItem>
            <NavbarItem isActive>
              <NavLink
                to="/education"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "rgb(30 64 175)" : "",
                  };
                }}
                className='contTextNav text-2xl font-medium text-black hover:text-blue-500'
              >
                Education
              </NavLink>
            </NavbarItem >
            <NavbarItem>
              <NavLink
                to="/workExperinces"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "rgb(30 64 175)" : "",
                  };
                }}
                className='contTextNav text-2xl font-medium text-black hover:text-blue-500'
              >
                Work Experinces
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                to="/projects"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "rgb(30 64 175)" : "",
                  };
                }}
                className='contTextNav text-2xl font-medium text-black hover:text-blue-500'
              >
                Projects
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                to="/skills"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "rgb(30 64 175)" : "",
                  };
                }}
                className='contTextNav text-2xl font-medium text-black hover:text-blue-500'
              >
                Skills
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink
                to="/contactMe"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "rgb(30 64 175)" : "",
                  };
                }}
                className='contTextNav text-2xl font-medium text-black hover:text-blue-500'
              >
                Contact Me
              </NavLink>
            </NavbarItem>
          </NavbarContent>
        </div>
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
        <NavbarMenu >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`} className='!text-2xl pb-2'>
              <Link
                color="foreground"
                className="w-full"
                href={item.to} // Use the 'to' attribute from the menu items
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {/* {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className='!text-2xl pb-2'>
              <Link
                color={
                  "foreground"
                }
                className="w-full"
                href={`/${item.toLowerCase().replace(" ", "")}`} // Assuming your routes follow this pattern
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))} */}
        </NavbarMenu>
      </div>
    </Navbar>
  );
};

export default NavBar;
