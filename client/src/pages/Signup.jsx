import { Alert, Button, Label, TextInput, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function signup() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = new useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      setErrorMessage(null);
      if( !formData.username || !formData.email || !formData.password ){
        setLoading(false);
        return setErrorMessage('Please fill out all fields');
      }
      const res = await fetch('/api/auth/signup',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    }catch (error){
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          {/* left side div */}
          <Link to="/" className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Its me</span>
              Wesley~
          </Link>
          <p className='text-sm mt-5'>
            This is a practice project. Signup using email and password or Google Account.
          </p>
        </div> 

        <div className="flex-1">
            {/* right side div */} 
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label value = "Your Username" />
                  <TextInput type="text" 
                  placeholder="Username" 
                  id="username" onChange={handleChange}
                  />
                </div>
                <div>
                  <Label value = "Your Email" />
                  <TextInput type="email" 
                  placeholder="name@company.com" 
                  id="email" onChange={handleChange}
                  />
                </div>
                <div>
                  <Label value = "Your Password" />
                  <TextInput type="password" 
                  placeholder="Password" 
                  id="password" onChange={handleChange}
                  />
                </div>
                <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                  {
                    loading ? (
                    <>
                      <Spinner size='sm' />
                      <span className='pl-3'> Loading... </span>
                    </>
                    ) : 'Sign Up'
                  } 
                </Button>
              </form>
              <div className='flex gap-2 mt-5'>
                <span>Have an account?</span>
                <Link to="/sign-in" className="text-blue-500">Sign in</Link>
              </div>
              {
                errorMessage && (
                  <Alert className='mt-5' color='failure'>
                    {errorMessage}
                  </Alert>
                )
              }     
        </div>
      </div>
    </div>
  )
}
