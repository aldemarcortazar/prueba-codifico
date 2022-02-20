import './ListMovies.scss';
import { IMovie } from '../interfaces';
import Movie from './Movie';

interface IListMoviesProps {
    movies: IMovie[];
    handleDelete: ( id: string ) => void;
    orderMovies: () => void;
}

const ListMovies: React.FunctionComponent<IListMoviesProps> = ({ movies, handleDelete, orderMovies }) => {
    
    return(
        <>
            <section className="list-movies">
                <article className="list-movies__header">
                    <p className="header__item">Titulo</p>
                    <p className="header__item">Año</p>
                    <p className="header__item">Genero</p>
                    <p className="header__item">Eliminar</p>
                </article>

                <article className="card-movies__body">
                    {
                        movies.length > 0  
                            ? movies.map( movie => <Movie 
                                                    key={ movie.id } 
                                                    movie={movie} 
                                                    handleDelete={ handleDelete }
                                                /> )
                            : <h2 className='center'>No hay Registros</h2>
                    }
                </article>
                {
                    movies.length > 0
                        && <button
                                role='button'
                                className='order-button'
                                onClick={ orderMovies }
                            >
                                Ordenar
                            </button>
                }
            </section>

            
        </>
    );

}

export default ListMovies;