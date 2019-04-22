export const getDishes = () => {
  return fetch('https://www.food2fork.com/api/search?key=a9ab558273b8cbfbc08ce07861401406&q=chicken%20breast&page=2', {
    headers: {
      origin: null
    }
  })
    .then(res => {
      console.log(res.json());
      return res.json();
    });
};
  
