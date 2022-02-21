import { FormEvent, useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import { IMovie } from '../interfaces';
import './form.scss';
import { generateId } from '../helpers/index';
import Messague from './Messague';

interface IFormProps{
    movies: IMovie[];
    setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>
}


export const initialData: IMovie = {
    title: '',
    year: 0,
    genre: '',
}

const Form: React.FunctionComponent<IFormProps> = ( { movies, setMovies } ) => {

    const [ values, handleInputChange, reset ] = useForm<IMovie>( initialData );
    const [ error, setError ] = useState<string>('');
    const { title, year, genre } = values;

    useEffect(() => {
        setTimeout(() => setError(''), 3000);
    }, [ error ]);

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();
        if( Object.values( values ).includes('') ){
            setError('Todos los campos son obligatorios');
            return;
        }
        
        values.id = generateId();
        setMovies([ ...movies, values ]);
        reset();
    };


    return(
        <>
            { error && <Messague  className='error' >  { error } </Messague> }
            <form 
                className="form"
                onSubmit={ handleSubmit }
            >

                <h2 className='form__title'> Add New </h2>
                
                <div className='fild'>
                    <label className='fild__label' htmlFor="title">Titulo</label>
                    <input 
                        type="text" 
                        name="title"
                        id='title' 
                        placeholder="Titulo"
                        className='form__input'
                        value={ title }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className='fild'>
                    <label className='fild__label' htmlFor="title">Año</label>
                    <input 
                        type="number" 
                        name="year" 
                        placeholder="Año de estreno"
                        className='form__input'
                        value={ year }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className='fild'>
                    <label className='fild__label' htmlFor="title">Genero</label>
                    <input 
                        type="text" 
                        name="genre" 
                        placeholder="Genero"
                        className='form__input'
                        onChange={ handleInputChange }
                        value={ genre }
                    />
                </div>

                <input 
                    type="submit" 
                    value="Añadir" 
                    className='input__submit'
                />

            </form>
        </>
    );

}

export default Form;