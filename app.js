const URL = 'https://randomuser.me/api';

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
fetchData();
