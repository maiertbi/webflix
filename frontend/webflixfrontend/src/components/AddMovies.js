import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMovies = () =>{
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return(<>
        <div className="container">        
            <h1>Add your Movie</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <input {...register("title")} placeholder="Title of the movie" />
                    <select {...register("genre", { required: true })}>
                    <option value="">Select Genre...</option>
                    <option value="A">Drama</option>
                    <option value="B">Thriller</option>
                    <option value="C">Horror</option>
                    <option value="D">Science Fiction</option>
                    <option value="E">Crime</option>
                    </select>
                    <p>{data}</p>
                    <input type="submit" />
                </form>
        </div>
      </>
    )};

export default AddMovies;