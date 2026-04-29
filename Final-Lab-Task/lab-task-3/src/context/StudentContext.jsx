/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import avatarOne from '../assets/student.jpg'; 

const initialMockStudents = [
  { id: "22-49985-3", name: "Akib Hosen", avatar: avatarOne, gpa: 3.8, credits: 90, major: "Software Engineering", courses: [{ name: "MATH 01", color: "#61dafb" }] },
  { id: "22-49087-3", name: "Rakib Hossain", avatar: avatarOne, gpa: 3.2, credits: 75, major: "Information Systems", courses: [{ name: "ADMS", color: "#4caf50" }] },
  { id: "22-49086-3", name: "Rafi Ahmed", avatar: avatarOne, gpa: 2.9, credits: 110, major: "Computer Engineering", courses: [{ name: "OOP1", color: "#e91e63" }] },
  { id: "22-49085-3", name: "Rifat Molla", avatar: avatarOne, gpa: 4.0, credits: 45, major: "Data Science", courses: [{ name: "Machine Learning", color: "#3f51b5" }] }
];

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState(() => {
        const saved = localStorage.getItem('dashboard_students');
        return saved ? JSON.parse(saved) : initialMockStudents;
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [sortMethod, setSortMethod] = useState('default');

    useEffect(() => {
        localStorage.setItem('dashboard_students', JSON.stringify(students));
    }, [students]);

    const addStudent = (newStudent) => {
        setStudents(prev => [...prev, newStudent]);
    };

    const removeStudent = (idToRemove) => {
        setStudents(prev => prev.filter(student => student.id !== idToRemove));
    };

    return (
        <StudentContext.Provider value={{
        students, searchQuery, setSearchQuery, sortMethod, setSortMethod, addStudent, removeStudent
        }}>
        {children}
        </StudentContext.Provider>
    );
};