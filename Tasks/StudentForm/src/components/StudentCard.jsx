import React from "react";

const statusColor = status => {
  if (status === 'ACTIVE') return 'success';
  if (status === 'INACTIVE') return 'warning';
  return 'danger';
};

const StudentCard = ({ student, onRemove, onToggleStatus }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-2">{student.name} <span className={`badge bg-${statusColor(student.status)} ms-2`}>{student.status}</span></h5>
        <h6 className="card-subtitle mb-2 text-muted">ID: {student.id}</h6>
        <div className="row">
          <div className="col-12 col-md-6">
            <div><b>Department:</b> {student.department}</div>
            <div><b>Year:</b> {student.year}</div>
            <div><b>Phone:</b> {student.phone}</div>
          </div>
          <div className="col-12 col-md-6">
            <div><b>Email:</b> {student.email}</div>
            <div><b>Address:</b> {student.address}</div>
          </div>
        </div>
        <div className="mt-3 d-flex gap-2">
          <button className="btn btn-danger btn-sm" onClick={() => onRemove(student.id)}>Remove</button>
          <button className="btn btn-secondary btn-sm" onClick={() => onToggleStatus(student.id)}>Toggle Status</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
