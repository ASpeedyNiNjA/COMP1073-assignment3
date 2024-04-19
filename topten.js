// The URL for the top ten API at nytimes.com
const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?';
// My API key for the NYTimes
const key = 'Yi0wumY4zhrJQs4DwyjU55l28GxfW6l4';
// The full URL for generating JSON using variables
let url = `${baseUrl}api-key=${key}`;
// Console logging the URL to verify it's ok
console.log(url);

// Fetch top articles from the previous seven days {Note #1}
fetch(url).then(result => {
	return result.json();
}).then(json => {
	displayResults(json);
});

// Need a variable that targets something in the DOM
const section = document.querySelector('section');

function displayResults(json) {
	console.log(json);
	articles = json.results;
	console.log(articles); // {Note #2}
	articles.forEach((article) => {
		console.log(article);

		const heading = document.createElement('h3');
		heading.textContent = article.abstract;
		section.appendChild(heading);
	});
}








// Additional Notes
/*
#1: The 7.json? at the end of the baseUrl variable equates to seven days. From the documentation 1 & 10 are also options for one and ten days. What are the top articles from the last x days?

#2: The array retrieved from the NYTimes json files returns 20 array objects by default.
*/