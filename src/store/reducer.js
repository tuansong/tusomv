const initialState = {
    movies: [],
    cloneMovies: [],
    modalMovie: null,
}

const getDate = (date) => {
    let dateArr = date.split('');
    dateArr.splice(4, 1);
    dateArr.splice(6, 1);
    let result = dateArr.join('');
    return parseInt(result);
}

const reducer = (state = initialState, action) => {
    let movies = state.movies;
    let sortedMovies;
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.data,
                cloneMovies: action.data
            }
        case 'LOAD_MORE':
            return {
                ...state,
                movies: action.data
            }
        case 'LOAD_MODAL':
            let selectedMovie = state.movies[action.data];
            return {
                ...state,
                modalMovie: selectedMovie
            }
        case 'SEARCH_MOVIE':
            let input = action.data;
            let newMovies = [...state.cloneMovies];
            let searchedMovies = newMovies.filter(
                movie => movie.title.includes(input.charAt(0).toUpperCase() + input.slice(1))
            );
            return {
                ...state,
                movies: searchedMovies
            }
        case 'SORT_RATING':
            sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
            return {
                ...state,
                movies: sortedMovies
            }
        case 'SORT_VIEW':
            sortedMovies = [...movies].sort((a, b) => a.vote_count - b.vote_count);
            return {
                movies: sortedMovies
            }
        case 'SORT_DATE':
            sortedMovies = [...movies].sort((a, b) => getDate(b.release_date) - getDate(a.release_date));
            console.log(sortedMovies);
            return {
                movies: sortedMovies
            }
    }
    return state
}

export default reducer;