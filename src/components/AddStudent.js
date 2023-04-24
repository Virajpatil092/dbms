import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStudent = (props) => {

    const Navigate = useNavigate();

    const [id, setid] = useState();
    const [name, setName] = useState();
    const [department, setDepartment] = useState();
    const [DOB, setDOB] = useState();
    const [age, setage] = useState()
    const [gender, setgender] = useState()

    const handleSubmit = async (event) => {
      event.preventDefault();
      let formData = {
            id, name, gender, department, DOB, age
      };

      console.log(formData);

      const url = 'http://localhost:5000/student/addstudent';
      try {
          const response = await axios(url, {
              method: 'POST',
              data:formData
          });
          const data = await response.data;
          console.log(data);
  
      } catch (error) {
          console.error(error);
      }
  };
  
  
    return (
        <div id="main-container" className="container d-grid h-100 my-5 my-3">
            <Form id='form' className="text p-3 w-100 shadow-lg p-4 mb-4 bg-white my-3">
            <img className='rounded mx-auto d-block' src="https://www.shutterstock.com/image-vector/education-book-logo-sign-symbol-260nw-548082964.jpg" alt=".." />

                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Your ID"
                        // value={id}
                        className='my-3'
                        onChange={(event) => setid(event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        // value={name}
                        className='my-3'
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Your Age"
                        // value={age}
                        className='my-3'
                        onChange={(event) => setage(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" className="my-3"  onChange={(event) => setDOB(event.target.value)} />
              </Form.Group>

                <Form.Group className="mb-4" controlId="sign-in-password">
                    <div className="text-left opacity-75">
                        Gender
                    </div>
                    <select className="form-select" 
                    aria-label="Default select example" 
                    onChange={(event) => setgender(event.target.value)}>
                        <option value='null'>Select a gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="N">Do Not mention</option>
                    </select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="sign-in-password">
                    <div className="text-left opacity-75">
                        Department
                    </div>
                    <select className="form-select" 
                    aria-label="Default select example" 
                    onChange={(event) => setDepartment(event.target.value)}>
                        <option value='null'>Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Mechinical">Mechinical</option>
                        <option value="Civil">Civil</option>
                    </select>
                </Form.Group>
                <div className='d-grid'>
                <Button onClick={handleSubmit} className='my-3' type="submit">Submit</Button>
                </div>
                <div className='d-grid'>
                <button onClick={() =>{Navigate('/viewreport')}} type="button" className="btn btn-secondary">View Responces</button>
                </div>
                
            </Form>
          </div>
  );
};

export default AddStudent;