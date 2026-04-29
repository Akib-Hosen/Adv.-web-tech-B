import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';
import './StudentCard.css';

const StudentCard = ({ name, id, avatar, gpa, credits, major, courses }) => {
    return (
        <div className="student-card">
        <div className="card-header">
            <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
            <div className="student-info">
            <h2>{name}</h2>
            <p className="student-id">ID: {id}</p>
            </div>
        </div>
        
        <div className="card-body">
            <p className="major"><strong>Major:</strong> {major}</p>
            
            <div className="stats-container">
            <StatBadge label="GPA" value={gpa} />
            <StatBadge label="Credits" value={credits} />
            </div>

            <div className="courses-container">
            <h4>Enrolled Courses:</h4>
            <div className="tags">
                {courses.map((course, index) => (
                <CourseTag key={index} courseName={course.name} color={course.color} />
                ))}
            </div>
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