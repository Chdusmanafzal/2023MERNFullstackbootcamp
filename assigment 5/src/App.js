import './App.css';
import React, { useState, useEffect } from 'react';


function FormData() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [address, setAddress] = useState('');
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      const newFormData = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        occupation: occupation,
        address: address
      };


      setFormData([...formData, newFormData]);
    } else {

      const updatedFormData = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        occupation: occupation,
        address: address
      };


      const newFormData = [...formData];
      newFormData[editIndex] = updatedFormData;
      setFormData(newFormData);
      setEditIndex(null);
    }

    
    setId('');
    setName('');
    setAge('');
    setGender('');
    setOccupation('');
    setAddress('');
  };

  
  const handleDelete = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };


 const handleEdit = (index) => {
   const selectedFormData = formData[index];
   setId(selectedFormData.Id);
  setName(selectedFormData.name);
  setAge(selectedFormData.age);
    setGender(selectedFormData.gender);
    setOccupation(selectedFormData.occupation);
      setEditIndex(index);
   };

    return (
    <div>
      <form className='Form-data' onSubmit={handleSubmit}>
      <div className= "input-data" >
        <div>
          <label htmlFor="id" ></label>
          <input placeholder='Enter ID:' type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="name"></label>
          <input placeholder='Enter your Name:' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="age"></label>
          <input placeholder='Enter your Age:'type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label htmlFor="gender"></label>
          <select placeholder='Select Gender:' id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="occupation"></label>
          <input placeholder='Occupation:' type="text" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </div>
        <button className='button' type="submit">Add Record</button>
        </div>
          </form>
    
          {formData.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Occupation</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.occupation}</td>
                  <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                  <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>
      )}
    </div>
  );
}

    export default FormData;
   
