import { useRef } from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const{signup, isLoading, error} = useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signup(username, email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <div className="form-group">
        <label>Username: </label>
        <input type="text" ref={usernameRef} />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input type="text" ref={emailRef} />
      </div>
      <div className="form-group">
        <label>Password: </label>
        <input type="text" ref={passwordRef} />
      </div>
      <button disabled={isLoading} >Sign up</button>
      {error && <div className="error">{error}</div> }
    </form>
  );
}

export default Signup;
