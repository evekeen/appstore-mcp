const store = require('app-store-scraper');

store.search({
    term: 'shot tracer',
    num: 5,
    page: 1,
    country : 'us',
    lang: 'en-US'
  })
  .then(console.log)
  .catch(console.log);