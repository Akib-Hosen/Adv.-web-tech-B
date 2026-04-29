import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';
import './StudentCard.css';

const StudentCard = ({ name, id, avatar, gpa, credits, major, courses }) => {
    const { removeStudent } = useContext(StudentContext);

    return (
        <div className="student-card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
            <img src={avatar} alt="avatar" className="avatar" />
            <div>
                <h2 style={{margin: 0}}>{name}</h2>
                <p style={{margin: 0, color: 'gray'}}>ID: {id}</p>
            </div>
            </div>
            <button onClick={() => removeStudent(id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>X</button>
        </div>
        
        <div className="card-body">
            <p><strong>Major:</strong> {major}</p>
            <div style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
            <StatBadge label="GPA" value={gpa} />
            <StatBadge label="Credits" value={credits} />
            </div>
            <div>
            <h4 style={{ margin: '0 0 5px 0' }}>Courses:</h4>
            {courses.map((c, i) => <CourseTag key={i} courseName={c.name} color={c.color} />)}
            </div>
        </div>
        </div>
    );
};

StudentCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    credits: PropTypes.number.isRequired, 
    major: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string
        })
    ).isRequired
};

export default StudentCard;