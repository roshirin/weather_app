const BASE_URL = 'https://eu1.locationiq.com/v1/autocomplete';
const format = 'format=json';
const limit = 'limit=6';
const tag = 'tag=place:city,place:town';

export const getAutocompleteCities = async (searchQuery, language) => {
  const apiKey = 'pk.18b7672e8deb1aaea5f8d47aecc2f516';
  const cityName = encodeURIComponent(`${searchQuery}`);

  const url = `${BASE_URL}?q=${cityName}&${format}&${limit}&${tag}&accept-language=${language}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};
