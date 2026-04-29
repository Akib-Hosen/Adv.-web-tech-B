import PropTypes from 'prop-types';
import './CourseTag.css';

const CourseTag = ({ courseName, color }) => {
    const tagStyle = {
        backgroundColor: color || 'var(--color-primary)',
        color: '#FFFFFF'
    };

    return (
        <span className="course-tag" style={tagStyle}>
        {courseName}
        </span>
    );
};

CourseTag.propTypes = {
    courseName: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default CourseTag;