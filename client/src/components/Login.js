import React from "react";
import {Form, Field, withFormik } from 'formik';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <div className="login-form">

      <h1>Welcome to the Bubble App!</h1>

          <Form>

            <h2>Login</h2>

            <Field  type="text"
                    name="username"
                    placeholder="UserName" />


            <Field  type="password"
                    name="password"
                    placeholder="Password" />  


            <button type="submit">Enter</button>        
          


          </Form>     

    </div>
  );
};


const FormikLogin = withFormik({
  mapPropsToValues({username, password}){
    return{
      username: username || '',
      password: password || ''
    }
  }
})(Login)



export default FormikLogin;
