import { ChangeEvent, useState } from "react";


const useForm = <T>( initialValue: T ):[ values: T, handleInputChange:(  e: ChangeEvent<HTMLInputElement> ) => void, reset: () => void  ] => {

    const [ values, setValues ] = useState( initialValue );

    const reset = () => {
        setValues( initialValue );
    }

    const handleInputChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        setValues({
            ...values,
            [target.name]: [ target.value ]
        });
    }   

    return [ values, handleInputChange, reset ];
}

export default useForm;