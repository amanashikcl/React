
import { useState } from 'react';
import Form from './pages/form';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents(prev => [...prev, student]);
  };

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const toggleStatus = (id) => {
    setStudents(prev => prev.map(s => {
      if (s.id !== id) return s;
      let nextStatus;
      if (s.status === 'ACTIVE') nextStatus = 'INACTIVE';
      else if (s.status === 'INACTIVE') nextStatus = 'SUSPENDED';
      else nextStatus = 'ACTIVE';
      return { ...s, status: nextStatus };
    }));
  };

  return (
    <div style={{maxWidth:600,margin:'0 auto',padding:24}}>
      <h2>Student Registration System</h2>
      <Form onAddStudent={addStudent} existingIds={students.map(s=>s.id)} />
      <h3>Registered Students</h3>
      <StudentList students={students} onRemove={removeStudent} onToggleStatus={toggleStatus} />
    </div>
  );
}

export default App;
