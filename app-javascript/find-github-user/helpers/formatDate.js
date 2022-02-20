

export const formatdate = ( date ) => {
    const newDate = new Date(date);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    return newDate.toLocaleDateString( 'en-US', options );
}