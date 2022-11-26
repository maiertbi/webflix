import { useRef, useState, useEffect, useContext } from 'react';
import axios from '../api/axios.js';
import AuthContext from '../context/AuthProvider';
import { createRoot } from 'react-dom/client';
import App from '../App.css';
import { useNavigation  } from 'react-router-dom';

const LOGIN_URL = '/api/auth';

const LogIn = () => {
    let navigate = useNavigation;
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = (e) => {
        const handleSubmit2 = async (e) => {
            //e.preventDefault();
    
            try {
                const response = await axios.post("http://localhost:3000/api/auth/", { 
                    email: "tbimaier2@gmail.com",
                    password: "helloWorld234"
                }
                );
    
                /*{
                    body: JSON.stringify({ email:user, password:pwd}), 
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                }*/
                console.log(response);
                console.log("hi1");
                //const json = await response.json();
                const json = 0;
                console.log("hi2");
                //console.log(await json);
    
                console.log(JSON.stringify(response?.data));
                //console.log(JSON.stringify(response));
    
                const accessToken = response?.data?.accessToken;
                const email = response?.data?.email;
                localStorage.setItem('userData', JSON.stringify(response.data));
            
    
                setAuth({pwd, email, accessToken });
                setUser('');
                setPwd('');
                setSuccess(true);
                setTimeout(() => {
                    navigate('/home', {replace: true})
                }, 800)
            } catch (err) {
                console.log(err);
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
            }
        }
        handleSubmit2();

    }

    return (
        <><div className="container">
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                <div className="row">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                            <div className="col-*-6">
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
                            <div className="col-*-6">
                                <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                            </div>
                            <div className="col-*-12">
                                <button type="button" className="btn btn-light" onClick={handleSubmit}>Sign In</button>
                            </div>
                        </div>
                    </form>
                    </div>
        </section>
            )}</div>
            </>
        )
    };
 export default LogIn;

      