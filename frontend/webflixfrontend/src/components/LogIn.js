import { useRef, useState, useEffect, useContext } from "react";
import axios from "../api/axios.js";
import AuthContext from "../context/AuthProvider";
import { useNavigation } from "react-router-dom";
import { Link } from "react-router-dom";


const LogIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const login = async function () {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/", {
        email: user,
        password: pwd,
      });

      const accessToken = response?.data;
      localStorage.setItem("userData", accessToken);

      setAuth({ pwd, user, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);

      //   setTimeout(() => {
      //     navigate("/home", { replace: true });
      //   }, 800);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <Link to={"/home"}>
              <button>Go to Home</button>
            </Link>
          </section>
        ) : (
          <section>
            <div className="row ">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p> 
              <div className="row">
                <h1>Sign In</h1>
                <form onSubmit={login}>
                  <div >
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                    />
                  </div>
                  <div >
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                    />
                  </div>
                  <div >
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={login}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
export default LogIn;
