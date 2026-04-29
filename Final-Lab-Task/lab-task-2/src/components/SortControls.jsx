import PropTypes from 'prop-types';

const SortControls = ({ currentSort, onSortChange }) => {
    return (
        <div className="sort-controls" style={{ marginBottom: '1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold' }}>Sort by: </span>
        <button 
            style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: currentSort === 'default' ? '#e2e8f0' : 'white' }}
            onClick={() => onSortChange('default')}
        >
            Default
        </button>
        <button 
            style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: currentSort === 'nameAsc' ? '#e2e8f0' : 'white' }}
            onClick={() => onSortChange('nameAsc')}
        >
            Name (A-Z)
        </button>
        <button 
            style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: currentSort === 'gpaDesc' ? '#e2e8f0' : 'white' }}
            onClick={() => onSortChange('gpaDesc')}
        >
            GPA (High to Low)
        </button>
        </div>
    );
};

SortControls.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onSortChange: PropTypes.func.isRequired,
};

export default SortControls;