// The URL for the top ten API at nytimes.com
const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?';
// My API key for the NYTimes
const key = 'Yi0wumY4zhrJQs4DwyjU55l28GxfW6l4';
// The full URL for generating JSON using variables
let url = `${baseUrl}api-key=${key}`;
// Console logging the URL to verify it's ok
console.log(url);
