import React, { useState } from "react";
import { Imagebox, SignupForm } from "./components";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App">
      <section className="login-section">
        <div>
          <Imagebox submit={submit} name={name}></Imagebox>
        </div>
        <SignupForm
          submit={submit}
          setSubmit={setSubmit}
          name={name}
          setName={setName}
        ></SignupForm>
      </section>
    </div>
  );
}

export default App;
