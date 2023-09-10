import NavBar from './NavBar';
import ListItem from './ListItem';

const WorkExperinces = () => {
    const bineyes = ['Bineyes', 'June 2023 – August 2023', 'Academic Achievements:']
    const Achievements = [
        'Contributed to creating a prototype design for a web application.', 
        'Developed the front-end of the web application and documented the software.',
        'Followed Agile-Scrum software development methodology.', 
        'Utilized: Figma, HTML, CSS, JavaScript, Django, Jira.'
    ]
    return ( 
        <div className='conText para'>
            <article className='text-3xl'>
                <b className='text-3xl'>Front-end Development Intern</b>
                <ListItem items={bineyes} subitems={Achievements}/>
            </article>
        </div>
    );
}
 
export default WorkExperinces;