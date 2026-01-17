import './App.css';
import {useState} from "react";
import 'milligram'

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    function handleAddMovie() {
      const movie = {
        title: title,
        year: year,
      }
      setMovies([...movies, movie]);
      console.log(movies);
      setTitle('');
      setYear('');
    }


    // function handleChange(event) {
    //     setTitle(event.target.value);
    //     // setYear(event.target.value);
    // }

    // const movies = [
    //     {title: "Wall-E"},
    //     {title: "Pulp Fiction"},
    //     {title: "Matrix"},
    //     {title: "1670"},
    // ];

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
            {/*<h2>My favourite movie for today is {title}</h2>*/}
            {/*{title.length > 0 && <div>{message}</div>}*/}
            {/*<input type="text" value={title} onChange={handleChange}/>*/}

            <h2>Add movie</h2>

            <label>Tytuł </label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>

            <label>Rok wydania</label>
            <input type="text" value={year} onChange={ (event) => setYear(event.target.value)}/>
            <button onClick={handleAddMovie}>dodaj film</button>
        </div>
    );
}

export default App;
