const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'bc1a38dbf70e6a30c3ffc04bb2eb445c';

export const getTrending = async () => {
  try {
    const data = await fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = async search => {
  try {
    const data = await fetch(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${search}&page=1`
    );
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async movieId => {
  try {
    const data = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};
