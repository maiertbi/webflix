import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";


const MovieComponent = () => {
  const [oldMovie, setOldMovie] = useState([]);
  
  // new movie changes
  const [titl, setTitle] = useState("");
  const [direct, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [genr, setGenre] = useState("");

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const options = {
    params: {"id": localStorage.getItem("curr-id") },
    headers: { "x-auth-token": localStorage.getItem("userData") },
  };

  useEffect(() => {
    currMovie();
  }, []);

  useEffect(() => {
    setTitle(oldMovie.title);
    setDirector(oldMovie.director);
    setYear(oldMovie.published);
    setGenre(oldMovie.genre);
  }, [oldMovie]);

  const currMovie = async function () { 
    try {
      const response = await axios.get("http://localhost:3000/api/movies/", {
        params: {id: localStorage.getItem("curr-id")}
      });
      setOldMovie(response?.data);
    } catch (err) {
      console.error(err?.response);
    }
  };

  const changeMovie = async function () {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/movies/",
        {
          picture: "Sorry, pictures are still not implemented",
          title: titl,
          director: direct,
          genre: genr,
          published: year,
        },
        options
      );

      setSuccess(true);
    } catch (err) {
      console.error(err?.response);

      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg(
          "Missing userToken or wrong input. Please check that it is a valid year."
        );
      } else if (err.response?.status === 403) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Failed");
      }
    }
  };

  const deleteMovie = async function () {
    try {
      const response = await axios.delete("http://localhost:3000/api/movies/", options);
    } catch (err) {
      console.error(err?.response);
    }
  };

  return (
    <>
    <div className="container">
        <h1>Change your Movie</h1>
           <form >
                <div className="row">
                    <div className="col-*-4">
                        <input id="title" value={titl} onChange={(e) => setTitle(e.target.value)} />
                        <input id="director" value={direct} onChange={(e) => setDirector(e.target.value)}  />
                    </div>

                    <div className="col-*-4">
                        <input value={year} id="published" onChange={(e) => setYear(e.target.value)} />

                        <select className="selectGenre" value={genr} id="genre" onChange={(e) => setGenre(e.target.value)}>
                            <option value="drama">Drama</option>
                            <option value="thriller">Thriller</option>
                            <option value="horror">Horror</option>
                            <option value="science fiction">Science Fiction</option>
                            <option value="crime">Crime</option>
                            <option value="action">Action</option>
                        </select>
                     </div>
                            <div className="col-*-4 sendmovieBtn">
                                <button type="button" className="btn btn-light" onClick={changeMovie}>
                                    Update
                                </button>
                            </div>

                            <div className="col-*-4 sendmovieBtn">
                                <button type="button" className="btn btn-light" onClick={deleteMovie}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </form>

    </div>
    </>
  );
};

export default MovieComponent;