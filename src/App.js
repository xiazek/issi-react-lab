import './App.css';
import {useState} from "react";
import 'milligram'
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);
    const [showForm, setFormShow] = useState(false);

    function toggleMovieForm() {
        setFormShow(!showForm);
    }

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }


    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>

            <MoviesList movies={movies}/>
            <button onClick={toggleMovieForm}>Add movie</button>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} showForm={showForm}/>
        </div>
    );
}

export default App;
