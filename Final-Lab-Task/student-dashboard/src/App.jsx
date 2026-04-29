import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import './App.css';
import avatarOne from '../src/assets/student.jpg';

const mockStudents = [
  {
    id: "22-49985-3",
    name: "Akib Hosen",
    avatar: avatarOne,
    gpa: 3.8,
    credits: 90, 
    major: "Software Engineering",
    courses: [
      { name: "MATH 01", color: "#61dafb" },
      { name: "IP", color: "#ff6b6b" }
    ]
  },
  {
    id: "22-49087-3",
    name: "Rakib Hossain",
    avatar: avatarOne,
    gpa: 3.2,
    credits: 75,
    major: "Information Systems",
    courses: [
      { name: "ADMS", color: "#4caf50" },
      { name: "MIS", color: "#ff9800" }
    ]
  },
  {
    id: "22-49086-3",
    name: "Rafi Ahmed",
    avatar: avatarOne,
    gpa: 2.9,
    credits: 110,
    major: "Computer  Engineering",
    courses: [
      { name: "OOP1", color: "#e91e63" },
      { name: "SE", color: "#9c27b0" }
    ]
  },
  {
    id: "22-49085-3",
    name: "Rifat Molla",
    avatar: avatarOne,
    gpa: 4.0,
    credits: 45,
    major: "Data Science",
    courses: [
      { name: "Machine Learning", color: "#3f51b5" },
      { name: "OOP2", color: "#00bcd4" }
    ]
  }
];

function App() {
  return (
    <div className="app-container">
      <DashboardHeader 
        title="University Portal"
      />
      
      <main className="dashboard-main">
        <div className="student-grid">
          {mockStudents.map(student => (
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
        </div>
      </main>
    </div>
  );
}

export default App;