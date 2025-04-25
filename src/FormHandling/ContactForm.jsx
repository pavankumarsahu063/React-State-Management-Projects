import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error,setError]=useState("")



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const habdelSubmit=(e)=>{
e.preventDefault();
console.log(formData)
  }

//   console.log(formData);

  return (
    <>
      <div className="form">
        <form onSubmit={habdelSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
