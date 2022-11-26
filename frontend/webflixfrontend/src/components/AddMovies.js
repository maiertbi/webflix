import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMovies = () =>{
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    //fetch api 
    const responseAdd = fetch("http://localhost:3000/api/movies",
    {
    body:JSON.stringify({}), method: 'POST',

    headers: {
    "Content-Type": "application/json",
    },});

    console.log(responseAdd);
            const jsonAdd = responseAdd.json();
            console.log(jsonAdd);

    return(
        <div className="flex-1 justify-content-center">
            <div className="container">        
                <h1>Add your Movie</h1>
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className="row">
                            <div className="col-*-4">
                                <input {...register("title")} placeholder="Title of the movie" />
                                <input {...register("director")} placeholder="Director" />
                            </div>
                            
                            <div className="col-*-4">
                                <input {...register("published")} placeholder="Publish year" />
                                    <select className="selectGenre" {...register("genre", { required: true })}>
                                        <option value="">Select Genre...</option>
                                        <option value="A">Drama</option>
                                        <option value="B">Thriller</option>
                                        <option value="C">Horror</option>
                                        <option value="D">Science Fiction</option>
                                        <option value="E">Crime</option>
                                    </select>
                                <p>{data}</p>
                            </div>
                            <div className="col-*-4 sendmovieBtn">
                                <input type="submit"/>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )};

export default AddMovies;