import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import axios from 'axios';

const Login = () => {
	const Navigate = useNavigate();

	const [alert, setAlert] = useState(null);
	const [username, setusername] = useState('');
    
	const [pass, setpass] = useState('');

	const handleusername = (event) =>{
		setusername(event.target.value);
	}

	//to keep track of pass
	const handlepass = (event) =>{
		setpass(event.target.value);
	}

	const handleOnClick = async (e) => {
		e.preventDefault();

		const url = 'http://localhost:5000/';

        try {

		const response = await axios.post('http://localhost:5000/', {
			'username' : username,
			'password' : pass
		});

		console.log(response.data);

          const Data = await response.data;

          console.log(Data);
        
		  if (Data) {
			Navigate('/AddStudent');
		  } 
		  else {
			showAlert("Username and Password doesn't match", "danger");
		  }
		} catch (error) {
		  showAlert("An error occurred while logging in", "danger");
		  console.log(error);
		}
	  };

	const showAlert = (message,type)=>{
	  setAlert({
		msg:message,
		type:type
	  });

	  //show for only 1 second

	  setTimeout(() => {
		setAlert(null);
	  }, 1000);
	}

    return (
        <>
	    <div id="main-container" className="container d-grid h-100 my-5">
	      <Form id="sign-in-form" className="text-center p-3 w-100 shadow-lg p-4 mb-4 bg-white">
			<img className='rounded mx-auto d-block' src="https://www.shutterstock.com/image-vector/education-book-logo-sign-symbol-260nw-548082964.jpg" alt="" />

		<h6 className="text-left my-4 opacity-75">User Login</h6>

		<Form.Group className="my-3" controlId="sign-in-email-address">
			<div className="text-left opacity-75">
				Username*
			</div>
		  <Form.Control type="email" onChange={handleusername} size="md" placeholder="Username" autoComplete="username" className="position-relative" />
		</Form.Group>
		<br />

		<Form.Group className="mb-4" controlId="sign-in-password">
		<div className="text-left opacity-75">
				Password*
			</div>
		  <Form.Control type="password" size="md" placeholder="Password"
		  onChange={handlepass}
		  autoComplete="current-password"
		  className="position-relative" />
		</Form.Group>
		<br />

		<Alert alert={alert}/>

		<div className="mb-4 d-grid">
			<button type="button" onClick={handleOnClick} className={`btn btn-primary ${(username === '' || pass === '')?'disabled':''}`} >Sign-in</button>
		</div>
	      </Form>
	    </div>
        </>
    )
}

export default Login;