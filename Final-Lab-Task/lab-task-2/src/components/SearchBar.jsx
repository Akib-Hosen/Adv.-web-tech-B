import PropTypes from 'prop-types';
import './SearchBar.css'; 

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="search-bar" style={{ marginBottom: '1rem' }}>
        <input 
            type="text" 
            placeholder="Search by name or major..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ padding: '8px', width: '100%', maxWidth: '400px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        </div>
    );
};

SearchBar.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;