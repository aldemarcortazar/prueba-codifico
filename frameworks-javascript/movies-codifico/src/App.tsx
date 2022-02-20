import { useEffect, useState } from "react"
import Form, { initialData } from "./components/Form"
import ListMovies from "./components/ListMovies"
import { IMovie } from "./interfaces";
import { helpHttp } from './helpers/helpHttp';

function App() {
  
  const [ movies, setMovies ] = useState<IMovie[]>( JSON.parse( localStorage.getItem('movies') ?? '[]' ) );

  useEffect( () => {
    localStorage.setItem('movies', JSON.stringify( movies ));
  }, [ movies ] );

  const handleDelete = ( id: string ) => {
    const confirmDelete: boolean = confirm('¿Quieres eliminar este registro?');
    if( !confirmDelete  ) return;

    const newState = movies.filter( movie => movie.id !== id );
    setMovies( newState );
  }

  const orderMovies = () => {
    const copyArrayState: IMovie[] = [ ...movies ];
    copyArrayState.sort( ( a, b ) => {
      return a.year === b.year
                ? 0
                : a.year < b.year
                  ? -1
                  : 1 
    } );
    setMovies( copyArrayState );
  }

  return (
    <div className="App">
        <Form 
          movies={movies}
          setMovies={ setMovies }
        />
        <ListMovies 
          movies={ movies }
          handleDelete={ handleDelete }
          orderMovies={ orderMovies }
        />
    </div>
  )
}

export default App
