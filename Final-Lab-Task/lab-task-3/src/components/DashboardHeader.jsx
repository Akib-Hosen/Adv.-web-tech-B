import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import PropTypes from 'prop-types';

const DashboardHeader = ({ title }) => {
    const { theme, toggleTheme } = useContext(ThemeContext); 

    return (
        <header style={{ 
        padding: '15px 30px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid #e5e7eb'
        }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{title}</h1>
        
        <button 
            onClick={toggleTheme} 
            style={{ 
            padding: '8px 16px', 
            cursor: 'pointer',
            backgroundColor: theme === 'light' ? '#f3f4f6' : '#374151',
            color: theme === 'light' ? '#1f2937' : '#f9fafb',
            border: 'none', 
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
            }}
        >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        </header>
    );
};

DashboardHeader.propTypes = { title: PropTypes.string.isRequired };
export default DashboardHeader;