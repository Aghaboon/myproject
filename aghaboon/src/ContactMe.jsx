import NavBar from './NavBar';
import { FaPhoneSquareAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineMail } from 'react-icons/ai'
import { motion } from "framer-motion";
import { container, item } from "./animated";

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className='contactCont flex justify-center items-center h-[60vh]'>
        <motion.div variants={container} initial="hidden" animate="show" className='bgCont Contactme flex  justify-between justify-self-center w-[70vw] py-3 px-4'>

          <motion.div variants={item} className='icon flex flex-col justify-center items-center'>
            <a href="tel:+966546979644" className=''>
              <FaPhoneSquareAlt className='w-[40px] h-[40px] hover:text-blue-700' />
            </a>
          </motion.div>

          <motion.div variants={item} className='icon flex flex-col justify-center items-center '>
            <a href="https://wa.me/966546979644" target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare className='w-[40px] h-[40px] hover:text-blue-700' />
            </a>
          </motion.div>

          <motion.div variants={item} className='icon flex flex-col justify-center items-center '>
            <a href='mailto:aghaboon@gmail.com'>
              <AiFillMail className='w-[40px] h-[40px] hover:text-blue-700' />
            </a>
          </motion.div>

          <motion.div variants={item} className='icon flex flex-col justify-center items-center'>
            <a href='https://github.com/aghaboon' target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='w-[40px] h-[40px] hover:text-blue-700' />
            </a>
          </motion.div>

          <motion.div variants={item} className='icon flex flex-col justify-center items-center'>
            <a href='https://www.linkedin.com/in/aghaboon' target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className='w-[40px] h-[40px] hover:text-blue-700' />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactMe;