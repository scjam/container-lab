export const getArticles = (searchText) => {
  // eslint-disable-next-line max-len
  return fetch(`http://newsapi.org/v2/everything?q=${searchText}&sortBy=popularity&apiKey=e2f8aa523e6a4e53b22fb4c53e2fb56e`)
    .then(res => res.json())
    .then(json => json.articles);
};
