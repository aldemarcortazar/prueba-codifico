interface ParamsCbSucces {
    promiseRes?: Promise<Response>, 
    err?: unknown
}

export const helpHttp = async ( url: string , cbSuccess:( options: ParamsCbSucces ) => void, options?: RequestInit )  => {
    try {
        const res =  fetch( url , options); 
        cbSuccess({ promiseRes: res });
    } catch (error) {
        cbSuccess({ err: error });
    }

}

// fetch( url, options )
//         .then( res=> res.ok ? res.json() : Promise.reject( res ) )
//         .then( data => cbSuccess( data ) )
