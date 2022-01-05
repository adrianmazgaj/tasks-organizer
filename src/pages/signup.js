import React from 'react';
  
const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Sign Up page</h1>
      <div className="container">
        <label className="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label className="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/> 

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" name="remember"/> Remember me
        </label>
      </div>

      <div className="container">
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </div>
  );
};
  
export default SignUp;