import './App.css';
const Home = () => {
  const Space = '\u00A0\u00A0\u00A0\u00A0\u00A0';
    return ( 
       <div className='para conText' >
        <p className='font-bold text-3xl'>About Me</p>
        <article className='text-xl font-medium leading-9'>
          {Space} I'm a Senior Software Engineering student with a strong passion for both front-end and back-end development. 
          My internship at Bineyes involved creating web prototypes and developing user interfaces, where I followed Agile-Scrum methodology. 
          Currently pursuing a Bachelor's Degree in Software Engineering at Prince Mugrin University, I've earned accolades for academic excellence. 
          I'm proficient in HTML, CSS, JavaScript, and Python and have hands-on experience in various projects, from web applications to chat rooms and puzzle-solving apps. 
          I'm dedicated to continuous learning, holding certificates in JavaScript, CSS, HTML, and UI/UX. 
          Beyond my technical skills, I'm an active member of student clubs like the Google Developer Students Club and the Software Engineering Club, 
          reflecting my commitment to growth and impact in the software engineering field.
        </article>
       </div>
     );
}
 
export default Home;