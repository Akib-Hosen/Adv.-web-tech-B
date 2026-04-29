import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const SortControls = () => {
    const { sortMethod, setSortMethod } = useContext(StudentContext);
    return (
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>Sort by: </span>
        {['default', 'nameAsc', 'gpaDesc'].map(method => (
            <button key={method} onClick={() => setSortMethod(method)}
            style={{ padding: '6px 12px', backgroundColor: sortMethod === method ? '#cbd5e1' : 'white', cursor: 'pointer' }}>
            {method === 'nameAsc' ? 'Name (A-Z)' : method === 'gpaDesc' ? 'GPA (High to Low)' : 'Default'}
            </button>
        ))}
        </div>
    );
};
export default SortControls;