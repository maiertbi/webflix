import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import NavbarComp from './NavbarComp.js';


const AddMovies = () => {
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const options = {
    headers: {'x-auth-token': localStorage.getItem("userData")}
    };

    const [titl, setTitle] = useState("");
    const [direct, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [genr, setGenre] = useState("");

    //fetch api
    const addToDb = async function () {
        try {
            const response = await axios.post("http://localhost:3000/api/movies", {
                picture: "Sorry, pictures are still not implemented",
                title: titl,
                director: direct,
                genre: genr,
                published: year,
            }, options);

            setSuccess(true); 
            // do something here
            console.log(response?.data);
        } catch (err) {
            console.error(err?.response);

            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing userToken or wrong input. Please check that it is a valid year.");
            } else if (err.response?.status === 403) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Failed");
            }
        }
    };


    return (
        <>
        <NavbarComp />
        <div className="container">
        {success ? (
          <section>
            <h1>You have added a new film!</h1>
          </section>
        ) : (
          <section>
            <div className="container">
                <div className="row">
                <div className="col-*-12 " align="center"> 
                        <h1>Add your Movie</h1>
                        <form onSubmit={addToDb}>
                            <div className="row">
                                <div className="col-*-4">
                                        <input id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title of the movie" />
                                        <input id="director" onChange={(e) => setDirector(e.target.value)} placeholder="Director" />
                                </div>
                                <div className="col-*-4">
                                    <input  id="published" onChange={(e) => setYear(e.target.value)} placeholder="Publish year" />
                                    <select className="selectGenre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                                        <option value="">Select Genre...</option>
                                        <option value="drama">Drama</option>
                                        <option value="thriller">Thriller</option>
                                        <option value="horror">Horror</option>
                                        <option value="science fiction">Science Fiction</option>
                                        <option value="crime">Crime</option>
                                        <option value="action">Action</option>
                                    </select>
                                </div>
                                <div className="col-*-4">
                                    <button type="button" className="btn btn-success" onClick={addToDb}>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                     </div>
    
                        <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive">
                            {errMsg}
                        </p>

                    </div>
                </div>
             </section>   
            )}
            </div>
        </>
        
    );
   
};

export default AddMovies;
