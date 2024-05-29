import { useEffect, useRef, useContext } from "react";
import validator from "validator";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import withModal from "../common/Modal";
import SignUp from "../register/SignUp";
import Context from "../../context";

const Login = (props) => {
  const { toggleModal } = props;
  const { setUser, setIsLoading, cometChat } = useContext(Context);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const authenticatedUser = JSON.parse(localStorage.getItem('auth'));
    if (authenticatedUser) {
      history.push('/');
    }
  }, [history]);

  const getInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return { email, password };
  };

  const isUserCredentialsValid = (email, password) => {
    return validator.isEmail(email) && password;
  };

  const loginCometChat = async (user) => {
    const authKey = `${process.env.REACT_APP_COMETCHAT_AUTH_KEY}`;
    return await cometChat.login(user.id, authKey);
  };

  const signin = async (email, hashedPassword) => {
    const url = 'http://localhost:8080/login';
    return await axios.post(url, { email, password: hashedPassword });
  }

  const login = async () => {
    const { email, password } = getInputs();
    if (isUserCredentialsValid(email, password)) {
      try {
        setIsLoading(true);
        // Hash the password using SHA-256 before sending it to the server
        const hashedPassword = CryptoJS.SHA256(password).toString();
        const authenticatedUser = await signin(email, hashedPassword);
        const cometChatAccount = await loginCometChat({ id: authenticatedUser.data.id });
        if (cometChatAccount) {
          localStorage.setItem('auth', JSON.stringify(authenticatedUser.data));
          setUser(authenticatedUser.data);
          setIsLoading(false);
          history.push('/');
        } else {
          alert('Failed to log in, please try again');
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        alert('Failed to log in, please try again');
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="login__container">
      <div className="login__welcome">
        <div className="login__logo">
          <p>SamBerry Meeting App</p>
        </div>
        <p>Built with React & Node</p>
      </div>
      <div className="login__form-container">
        <div className="login__form">
          <input type="text" placeholder="Email Address" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button className="login__submit-btn" onClick={login}>Login</button>
          <span className="login__forgot-password">Forgot password?</span>
          <span className="login__signup" onClick={() => toggleModal(true)}>Create New Account</span>
        </div>
      </div>
    </div>
  );
}

export default withModal(SignUp)(Login);
