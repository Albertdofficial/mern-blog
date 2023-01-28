import { useRef } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const{login, isLoading, error} = useLogin()

  const handleSubmit = async(e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="form-group">
        <label>Email: </label>
        <input type="text" ref={emailRef} />
      </div>
      <div className="form-group">
        <label>Password: </label>
        <input type="text" ref={passwordRef} />
      </div>
      <button disabled={isLoading} >Login</button>
      {error && <div className="error">{error}</div> }
    </form>
  );
}

export default Login;
