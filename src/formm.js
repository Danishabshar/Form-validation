import { useState, useEffect } from "react";
import "./form.css";

function FORM() {
  const initialValues = { username: "", email: "", password: "" ,Gender:"", PhoneNumber:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    alert ( `${formValues.username}    "added succesfully"` )
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if(values.PhoneNumber.length<10 && values.PhoneNumber.length>10){
        errors.PhoneNumber="enter password correctly"
    }

    // if(!values.Gender){
    //     errors.Gender="please select the gender"
    // }
    return errors;


  };

  return (
    <div className="container">
     {/* if( Object.keys(formErrors).length === 0 && (isSubmit == true )
        <div className="ui message success">Signed in successfully</div>
     ) */}
       
      

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div  className="field">
          <label>Gender</label>
              <select  className="field"  value={formErrors.Gender} onChange={handleChange} ><option>select Gender</option>
                      <option value="Male" >Male</option>
                      <option value="FeMale"   >FeMale</option>
                      <option value="others"    >others</option>
              
              
              </select>
          <p>{formErrors.Gender}</p>
              <p>{}</p>
              <br></br>
          </div>
          <div  className="field">
              <label>Phoneno</label>
              <input type="text" name="PhoneNumber" placeholder="phonenumber" value={formValues.PhoneNumber} onChange={handleChange}  ></input>
          </div>
          <p>{formErrors.PhoneNumber}</p>
          <br></br>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FORM;