import NavBar from './NavBar';
import { FaPhoneSquareAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import {AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineMail} from 'react-icons/ai'
const ContactMe = () => {
  return (
    <div className='contactCont flex justify-center items-center h-[60vh]'>
      <div className='bgCont Contactme flex  justify-between justify-self-center w-[70vw] py-3 px-4'>

        <div className='icon flex flex-col justify-center items-center'>
          <a href="tel:+966546979644" className=''>
            <FaPhoneSquareAlt className='w-[40px] h-[40px] hover:text-blue-700'/>
          </a>
        </div>

        <div className='icon flex flex-col justify-center items-center '>
          <a href="https://wa.me/966546979644" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='w-[40px] h-[40px] hover:text-blue-700' />
          </a>
        </div>

        <div className='icon flex flex-col justify-center items-center '>
          <a href='mailto:aghaboon@gmail.com'>
            <AiFillMail className='w-[40px] h-[40px] hover:text-blue-700' />
          </a>
        </div>

        <div className='icon flex flex-col justify-center items-center'>
          <a href='https://github.com/aghaboon' target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='w-[40px] h-[40px] hover:text-blue-700' />
          </a>
        </div>

        <div className='icon flex flex-col justify-center items-center'>
          <a href='https://www.linkedin.com/in/aghaboon' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='w-[40px] h-[40px] hover:text-blue-700' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;