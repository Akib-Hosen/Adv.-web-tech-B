import { useState, useEffect } from 'react';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import './App.css';
import avatarOne from '../src/assets/student.jpg';

const mockStudents = [
  { id: "22-49985-3", name: "Akib Hosen", avatar: avatarOne, gpa: 3.8, credits: 90, major: "Software Engineering", courses: [{ name: "MATH 01", color: "#61dafb" }, { name: "IP", color: "#ff6b6b" }] },
  { id: "22-49087-3", name: "Rakib Hossain", avatar: avatarOne, gpa: 3.2, credits: 75, major: "Information Systems", courses: [{ name: "ADMS", color: "#4caf50" }, { name: "MIS", color: "#ff9800" }] },
  { id: "22-49086-3", name: "Rafi Ahmed", avatar: avatarOne, gpa: 2.9, credits: 110, major: "Computer Engineering", courses: [{ name: "OOP1", color: "#e91e63" }, { name: "SE", color: "#9c27b0" }] },
  { id: "22-49085-3", name: "Rifat Molla", avatar: avatarOne, gpa: 4.0, credits: 45, major: "Data Science", courses: [{ name: "Machine Learning", color: "#3f51b5" }, { name: "OOP2", color: "#00bcd4" }] }
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMethod, setSortMethod] = useState('default');

  useEffect(() => {
    const fetchStudents = () => {
      setTimeout(() => {
        setStudents(mockStudents);
        setLoading(false);
      }, 1500);
    };
    fetchStudents();
  }, []);


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
      <DashboardHeader 
        title="University Portal"
      />
      
      <main className="dashboard-main" style={{ padding: '20px' }}>
        
        <div className="controls-section">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <SortControls currentSort={sortMethod} onSortChange={setSortMethod} />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.2rem' }}>
            ⏳ Loading student data...
          </div>
        ) : (
          <div className="student-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {displayedStudents.map(student => (
              <StudentCard 
                key={student.id}
                id={student.id}
                name={student.name}
                avatar={student.avatar}
                gpa={student.gpa}
                credits={student.credits} 
                major={student.major}
                courses={student.courses}
              />
            ))}
            
            {displayedStudents.length === 0 && (
              <p>No students found matching "{searchQuery}".</p>
            )}
          </div>
        )}

      </main>
    </div>
  );
}

export default App;