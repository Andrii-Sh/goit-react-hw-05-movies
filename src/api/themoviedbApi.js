import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/'
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzAyZDhkMzRkYzcyMjdiZTNjNzA5MzM2N2M4OGViZiIsInN1YiI6IjY0NzA5N2YwNzcwNzAwMDBhOTQ3ZGQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3KkCJqrVoPiUwfFpJk-pqYlEvN4ebC6X_KzPPDzK-s'

export async function getTrandingMovies() {

    const response = await axios.get(`${BASE_URL}3/trending/all/day?language=en-US`, {
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        },
    });
    return response.data.results;
    // console.log(response.data.results);
}

export async function getMovieDetails(id) {
    const response = await axios.get(`${BASE_URL}3/movie/${id}?language=en-US`, {
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        },
    });
    return response.data;

}

export async function getMovieCredits(id) {
    const response = await axios.get(`${BASE_URL}3/movie/${id}/credits?language=en-US`, {
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        },
    });
    return response.data;

}


// /movies/get-movie-details

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/603692/credits?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzAyZDhkMzRkYzcyMjdiZTNjNzA5MzM2N2M4OGViZiIsInN1YiI6IjY0NzA5N2YwNzcwNzAwMDBhOTQ3ZGQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3KkCJqrVoPiUwfFpJk-pqYlEvN4ebC6X_KzPPDzK-s' \
//      --header 'accept: application/json'
