import './App.css';
import ListItem from './ListItem';

const Education = () => {
    const Educationlist = ['Prince Mugrin University', 'Expected Graduation: June 2024', 'Academic Achievements:']
    const Achievements = ['Awarded the Prince Faisal bin Abdulaziz Award for Academic Excellence in the preparatory year (2020/2021).']
    return (
        <div className="conText flex flex-col justify-center items-center">
            <div className='bgCont py-2 px-4'>
                <article>
                    <b className='mainText text-3xl'>Bachelor’s Degree in Software Engineering</b>
                    <ListItem items={Educationlist} subitems={Achievements} />
                </article>
            </div>
        </div>
    );
}

export default Education;