import { useState } from "react";
import "../styles/LoginForm.css";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { data, isPending, error } = useFetch(
    "https://64ea744cbf99bdcc8e679258.mockapi.io/sda/login"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Conditional render the ErrorMessage
  const [loginError, setLoginError] = useState("");
  const [congrats, setCongrats] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    console.log("data is ", data);
    console.log("isPending is ", isPending);
    console.log("error is ", error);
  });

  useEffect(() => {
    console.log("Komponenti login form .jsx u fut ne dom");
  }, [email, password]);

  // const [formerror, setFormData] = useState({
  //     email: 'email23',
  //     password: 'passwdef',
  // })

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kontrollojme nese user egziston ne databaze
    const user = data.find((user) => email === user.email);
    if (user && user.password === password) {
      // Logjika e LOGIN
      setLoginError(null);
      setCongrats("Urime ju u loguat");
      navigate("/dashboard");
    } else {
      setLoginError("Incorrect Credentials");
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let inputName = event.target.name;

    if (inputName === "email") setEmail(value);
    else if (inputName === "password") setPassword(value);
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h3>Login to HR Platform</h3>
        Email: {email} <br />
        Password: {password}
        <fieldset className="form-control">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Email..."
          />
        </fieldset>
        <fieldset className="form-control">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="password..."
          />
        </fieldset>
        {loginError ? (
          <div className="error">{loginError} </div>
        ) : (
          <div className="error">{congrats} </div>
        )}
        <input type="submit" value="Login to Platform" />
      </form>
    </div>
  );
}

export default LoginForm;
