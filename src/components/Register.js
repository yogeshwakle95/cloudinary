import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {

    const [name,setName] = useState("");
    const [file,setFile] = useState("");

    const navigate = useNavigate();

    const submitData = async(e)=>{
        e.preventDefault();

    // const userData = {
    //   profile_pic: file,
    //   name: name,
    // };

    const formData = new FormData();
    formData.append("photo",file);
    formData.append("name",name);

    const config = {
      headers: {
        'Content-Type':  'multipart/form-data',
      },
    };

    try {
      const res = await axios.post('https://fileupload-3h0b.onrender.com/api/register', formData, config);
      console.log(res);

      if(res.status == 201){
        navigate("/")
    }else{
        alert("error")
    }
    } catch (error) {
      console.error('Error:', error);
      // alert('Error');
    }
    }
    

  return (
                  <div className='container mt-3'>
                <h1>Upload your Img Here</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={submitData} >
                        Submit
                    </Button>
                </Form>
            </div>

    
  )
}

export default Register
