import { formatdate } from "../helpers/formatDate.js";


const card = ( user  ) => {
    const $card = document.getElementById('card');

    console.log({ user });

    if( !user ){
        $card.innerHTML = `<h1> No hay usuarios que cumplan con el criterio de búsqueda. </h1>`;
        return;
    }

    const {
        avatar_url ,
        blog,
        created_at,
        followers,
        following,
        id,
        location,
        login,
        name,
        public_repos,
        twitter_username,
    } = user;


    $card.innerHTML = `
        <div class="additional"> 
                <div class="user-card"> 
                    <h2 class="level"> ${ twitter_username } </h2>
                    <img class="round" src="${avatar_url}" />
                    <p class="points"> ${ formatdate( created_at ) } </p>
                </div>
                <div class="more-info">
                    <h1> ${ name } </h1>

                    <div class="social-media">

                        <a class="social-media__link" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#ffffff">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                                <circle cx="12" cy="9" r="2.5"/>
                            </svg>
                            ${ location ? location : 'No tiene' }
                        </a>

                        <a class="social-media__link" href="">
                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30px" height="30px">
                                <path d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439"/>
                            </svg>
                            @${ twitter_username ? twitter_username : 'No tiene' }
                        </a>

                    </div>

                    <div class="coords center">
                        <a href="${blog}"> 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <circle cx="6.18" cy="17.82" r="2.18"/>
                                <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
                            </svg>
                            ${blog}
                        </a>
                    </div>

                    <div class="stats">

                        <div>
                            <h2 class="title"> REPOS </h2>
                            <svg aria-hidden="true" height="25px" viewBox="0 0 16 16" version="1.1" width="25px" data-view-component="true" class="octicon octicon-git-branch">
                                <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                            </svg>
                            <p class="value">${public_repos}</p>
                        </div>

                        <div>
                            
                            <h2 class="title"> FOLLOWERS </h2>

                            <svg aria-hidden="true" height="25px" viewBox="0 0 16 16" version="1.1" width="25px" data-view-component="true" class="octicon octicon-people">
                                <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                            </svg>

                            <p class="value">${followers}</p>
                        </div>

                        <div>
                            
                            <h2 class="title"> FOLLOWING </h2>

                            <svg aria-hidden="true" height="25px" viewBox="0 0 16 16" version="1.1" width="25px" data-view-component="true" class="octicon octicon-people">
                                <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                            </svg>

                            <p class="value">${following}</p>
                        </div>

                    </div>

                </div>
            </div>
    `;
}

export default card;