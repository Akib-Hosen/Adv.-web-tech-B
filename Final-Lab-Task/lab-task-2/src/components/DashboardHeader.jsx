import PropTypes from 'prop-types';
import './DashboardHeader.css';

const DashboardHeader = ({ title, tagline }) => {
    return (
        <header className="dashboard-header">
        <div className="header-content">
            <h1>{title}</h1>
            {tagline && <p className="tagline">{tagline}</p>}
        </div>
        <nav className="header-nav">
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', alignItems: 'center' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#students">Students</a></li>
            </ul>
        </nav>
        </header>
    );
};

DashboardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
};

export default DashboardHeader;