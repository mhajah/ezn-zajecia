import './skills.css';

export default function Skills({skillsList}) {
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skillsList.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    )
}