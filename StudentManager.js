import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentManager = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', email: '' });
  const [editingId, setEditingId] = useState(null); // To track the student being edited

  // Fetch all students on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingId) {
      // Update student
      axios.put(`http://localhost:5000/api/students/${editingId}`, form)
        .then(res => {
          setStudents(students.map(s => s._id == editingId ? res.data : s));
          setForm({ name: '', age: '', email: '' });
          setEditingId(null);
        });
    } else {
      // Add student
      axios.post('http://localhost:5000/api/students', form)
        .then(res => {
          setStudents([...students, res.data]);
          setForm({ name: '', age: '', email: '' });
        });
    }
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:5000/api/students/${id}`)
      .then(() => setStudents(students.filter(s => s._id !== id)));
  };

  const handleEdit = student => {
    setForm({ name: student.name, age: student.age, email: student.email });
    setEditingId(student._id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Manager</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add'}</button>

      <ul>
        {students.map(s => (
          <li key={s._id}>
            {s.name} - {s.age} - {s.email}
            <button onClick={() => handleEdit(s)}>Edit</button>
            <button onClick={() => handleDelete(s._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentManager;
