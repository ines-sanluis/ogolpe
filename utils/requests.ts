const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
// TODO const WATCH_REGION = 'ES'
const GENRES = {
    ACTION: 28,
    COMEDY: 35,
    HORROR: 27,
    ROMANCE: 10749,
    DOCUMENTARIES: 99
}

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=gl-ES&with_original_language=gl`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213&with_original_language=gl`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=gl-ES&with_original_language=gl`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gl-ES&with_genres=${GENRES.ACTION}&with_original_language=gl`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gl-ES&with_genres=${GENRES.COMEDY}&with_original_language=gl`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gl-ES&with_genres=${GENRES.HORROR}&with_original_language=gl`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gl-ES&with_genres=${GENRES.ROMANCE}&with_original_language=gl`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gl-ES&with_genres=${GENRES.DOCUMENTARIES}&with_original_language=gl`,
}

export default requests