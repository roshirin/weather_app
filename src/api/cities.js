const BASE_URL = 'http://api.geonames.org/searchJSON';
const populationOptions = [
  'cities=cities1000',
  'cities=cities5000',
  'cities=cities10000',
  'cities=cities15000',
];
const responseRows = 'maxRows=5';
const userName = 'username=geocityfinder';

export const getAutocompleteCities = async (searchQuery) => {
  const cityName = `name_startsWith=${searchQuery}`;
  
  const data = await fetch(
    `${BASE_URL}?${cityName}&${populationOptions[1]}&${responseRows}&${userName}`
  )
  .then(response => response.json())
  .catch(error => {
      console.error(error);
  });

  return data;
}
