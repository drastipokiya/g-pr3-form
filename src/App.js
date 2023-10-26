import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [value, setvalue] = useState({});

  const handle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="mt-4 text-muted display text-center bg-primary">Stylish Form (Using State and onChange/onClick)</h1>
      <form className="py-5">
        <div className="form-group my-3">
          <input type="text" name="fname" className="form-control" onChange={handle} placeholder="First Name" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="lname" className="form-control" onChange={handle} placeholder="Last Name" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input3" className="form-control" onChange={handle} placeholder="Input 3" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input4" className="form-control" onChange={handle} placeholder="Input 4" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input5" className="form-control" onChange={handle} placeholder="Input 5" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input6" className="form-control" onChange={handle} placeholder="Input 6" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input7" className="form-control" onChange={handle} placeholder="Input 7" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input8" className="form-control" onChange={handle} placeholder="Input 8" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input9" className="form-control" onChange={handle} placeholder="Input 9" />
        </div>
        <div className="form-group my-3">
          <input type="text" name="input10" className="form-control" onChange={handle} placeholder="Input 10" />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => console.log(value)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
