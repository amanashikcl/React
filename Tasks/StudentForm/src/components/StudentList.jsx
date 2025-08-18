import React from "react";
import StudentCard from "./StudentCard";


const StudentList = ({ students, onRemove, onToggleStatus }) => {
  if (students.length === 0) return <div className="alert alert-info">No students registered.</div>;
  return (
    <div className="row g-3">
      {students.map(student => (
        <div className="col-12 col-md-6 col-lg-4" key={student.id}>
          <StudentCard
            student={student}
            onRemove={onRemove}
            onToggleStatus={onToggleStatus}
          />
        </div>
      ))}
    </div>
  );
};

export default StudentList;
