import { useContext, useEffect } from 'react';
import { StudentContext } from './context/StudentContext';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

function App() {
  const { students, searchQuery, sortMethod } = useContext(StudentContext);

  const displayedStudents = students
    .filter(student => 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.major.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === 'nameAsc') return a.name.localeCompare(b.name);
      if (sortMethod === 'gpaDesc') return b.gpa - a.gpa;
      return 0; 
    });

  useEffect(() => {
    document.title = `Dashboard - ${displayedStudents.length} Students`;
  }, [displayedStudents.length]);

  return (
    <div className="app-container">
      <DashboardHeader title="University Portal" />
      
      <main className="dashboard-main" style={{ padding: '20px' }}>
        <AddStudentForm />
        
        <div className="controls-section">
          <SearchBar />
          <SortControls />
        </div>

        <div className="student-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {displayedStudents.map(student => (
            <StudentCard key={student.id} {...student} />
          ))}
          {displayedStudents.length === 0 && <p>No students found.</p>}
        </div>
      </main>
    </div>
  );
}

export default App;