
export const customData = async ( url = '',valueSearch = '' ) => {
    try{
        const data = await fetch( url );
        const users = await data.json();
        const userFilter = users.find( user => user.name.toLowerCase().includes( valueSearch.toLowerCase() ) );
        return userFilter;
        
    }catch( error ){
        return error;
    }

} 