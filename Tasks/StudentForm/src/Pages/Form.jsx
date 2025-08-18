import { useState } from "react";

const initialState = {
    id: '',
    name: '',
    department: '',
    year: '',
    phone: '',
    email: '',
    address: '',
    status: 'ACTIVE',
};

const statusOptions = ['ACTIVE', 'INACTIVE', 'SUSPENDED'];

const Form = ({ onAddStudent, existingIds }) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.id) errs.id = 'Student ID is required.';
        else if (existingIds && existingIds.includes(form.id)) errs.id = 'Student ID must be unique.';
        if (!form.name) errs.name = 'Full Name is required.';
        if (!form.department) errs.department = 'Department is required.';
        if (!form.year || isNaN(form.year) || form.year < 1) errs.year = 'Valid Year is required.';
        if (!form.phone || !/^\d{10}$/.test(form.phone)) errs.phone = 'Valid 10-digit phone number required.';
        if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required.';
        if (!form.address) errs.address = 'Address is required.';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            onAddStudent(form);
            setForm(initialState);
        }
    };

        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-12 col-md-6">
                            <label htmlFor="id" className="form-label">Student ID:</label>
                            <input type="text" className="form-control" id="id" name="id" value={form.id} onChange={handleChange} />
                            {errors.id && <div className="text-danger small">{errors.id}</div>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="name" className="form-label">Full Name:</label>
                            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} />
                            {errors.name && <div className="text-danger small">{errors.name}</div>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="department" className="form-label">Department:</label>
                            <input type="text" className="form-control" id="department" name="department" value={form.department} onChange={handleChange} />
                            {errors.department && <div className="text-danger small">{errors.department}</div>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="year" className="form-label">Year of Study:</label>
                            <input type="number" className="form-control" id="year" name="year" value={form.year} onChange={handleChange} />
                            {errors.year && <div className="text-danger small">{errors.year}</div>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="phone" className="form-label">Phone Number:</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                            {errors.phone && <div className="text-danger small">{errors.phone}</div>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="email" className="form-label">Email Address:</label>
                            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} />
                            {errors.email && <div className="text-danger small">{errors.email}</div>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Physical Address:</label>
                            <input type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} />
                            {errors.address && <div className="text-danger small">{errors.address}</div>}
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="status" className="form-label">Status:</label>
                            <select className="form-select" id="status" name="status" value={form.status} onChange={handleChange}>
                                {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Register Student</button>
                        </div>
                    </form>
                </div>
            </div>
        );
};

export default Form;