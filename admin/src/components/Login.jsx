import { useState } from "react"


const Login = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/admin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData), 
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };
  
  return (
    <section className='max-padd-container flexCenter flex-col pt-32 bg-primary'>
      <div className='w-full max-w-[660px] h-[500px] bg-primary m-auto px-14 py-10 rounded-md'>
        <h3 className='h3'>Login</h3>
        <div className='flex flex-col gap-4 mt-7'>
          <input type="email" 
            value={formData.email}
            name="email"
            placeholder="your registered email address"
            className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm'
            onChange={changeHandler}
          />
          <input type="password" 
            value={formData.password}
            name="password"
            placeholder="your password"
            className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm'
            onChange={changeHandler}
          />
          <button 
            onClick = {() => handleLogin()}
            className='btn-dark rounded-xl my-5 !py-1'
          >
            Login
          </button>
        </div>
      </div>
 
    </section>
  )
}

export default Login
