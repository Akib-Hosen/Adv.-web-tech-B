import { useState, useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import avatarOne from '../assets/student.jpg'; 

const AddStudentForm = () => {
    const { addStudent, students } = useContext(StudentContext);
    
    const [formData, setFormData] = useState({ name: '', id: '', major: '', gpa: '', credits: '', courses: '' });
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        if (successMsg) {
        const timer = setTimeout(() => setSuccessMsg(''), 3000);
        return () => clearTimeout(timer);
        }
    }, [successMsg]);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        
        if (!formData.id) {
        tempErrors.id = "ID is required";
        } else if (students.some(s => s.id === formData.id)) {
        tempErrors.id = "This ID already exists";
        }

        if (!formData.major.trim()) tempErrors.major = "Major is required";
        if (formData.gpa < 0 || formData.gpa > 4.0 || formData.gpa === '') tempErrors.gpa = "GPA must be between 0 and 4.0";
        if (!formData.credits || formData.credits < 0) tempErrors.credits = "Valid credits required";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        
        const processedCourses = formData.courses
            ? formData.courses.split(',').map(courseName => ({
                name: courseName.trim(),
                color: '#61dafb' 
            })).filter(c => c.name !== '') 
            : [];

        addStudent({
            ...formData,
            gpa: parseFloat(formData.gpa),
            credits: parseInt(formData.credits),
            avatar: avatarOne,
            courses: processedCourses 
        });
        
        setFormData({ name: '', id: '', major: '', gpa: '', credits: '', courses: '' }); 
        setSuccessMsg("Student successfully added!");
        }
    };

    return (
        <div style={{ background: 'var(--color-surface, white)', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ marginTop: 0 }}>Add New Student</h3>
        
        {successMsg && <div style={{ color: 'green', marginBottom: '10px', fontWeight: 'bold' }}>{successMsg}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', maxWidth: '400px' }}>
            <input placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}

            <input placeholder="Student ID (Numbers)" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            {errors.id && <span style={{ color: 'red', fontSize: '12px' }}>{errors.id}</span>}

            <input placeholder="Major" value={formData.major} onChange={e => setFormData({...formData, major: e.target.value})} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            {errors.major && <span style={{ color: 'red', fontSize: '12px' }}>{errors.major}</span>}

            <input type="number" step="0.1" placeholder="GPA (0.0 - 4.0)" value={formData.gpa} onChange={e => setFormData({...formData, gpa: e.target.value})} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            {errors.gpa && <span style={{ color: 'red', fontSize: '12px' }}>{errors.gpa}</span>}
            
            <input type="number" placeholder="Total Credits" value={formData.credits} onChange={e => setFormData({...formData, credits: e.target.value})} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            {errors.credits && <span style={{ color: 'red', fontSize: '12px' }}>{errors.credits}</span>}

        
            <input 
            placeholder="Courses (e.g. React, Math, Physics)" 
            value={formData.courses} 
            onChange={e => setFormData({...formData, courses: e.target.value})} 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
            />
            <span style={{ fontSize: '12px', color: 'gray' }}>Separate multiple courses with a comma.</span>

            <button type="submit" style={{ padding: '10px', marginTop: '10px', cursor: 'pointer', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Add Student
            </button>
        </form>
        </div>
    );
};

export default AddStudentForm;