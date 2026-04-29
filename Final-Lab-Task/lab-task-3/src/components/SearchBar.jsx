import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(StudentContext);
    return (
        <div style={{ marginBottom: '1rem' }}>
        <input type="text" placeholder="Search by name or major..." value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '8px', width: '100%', maxWidth: '400px', borderRadius: '4px' }} />
        </div>
    );
};
export default SearchBar;