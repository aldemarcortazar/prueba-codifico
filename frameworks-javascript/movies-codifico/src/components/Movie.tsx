import { IMovie } from "../interfaces";
import './Movie.scss';

interface IMovieProps{
    movie: IMovie;
    handleDelete: ( id: string ) => void;
}

const Movie: React.FunctionComponent< IMovieProps > = ({ movie, handleDelete }) => {

    const { title, year, genre, id } = movie;

    return(
        <div className="card-movie-row__item">
            <p className="header__item"> { title } </p>
            <p className="header__item"> { year } </p>
            <p className="header__item"> { genre } </p>
            <p 
                onClick={ (  ) => handleDelete( id! ) }
                className="header__item header__item-icon"
            >
                <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                </svg>
            </p>
        </div>
    );
}

export default Movie;