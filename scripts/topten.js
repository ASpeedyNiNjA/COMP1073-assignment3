// Section One ~ 1 day old

// The URL for the top ten API at nytimes.com
const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?';
// My API key for the NYTimes
const key = 'Yi0wumY4zhrJQs4DwyjU55l28GxfW6l4';
// The full URL for generating JSON using variables
let url = `${baseUrl}api-key=${key}`;

// Fetch top articles from the previous seven days {Note #1}
fetch(url).then(result => {
	return result.json();
}).then(json => {
	displayResults(json);
});

// Need a variable that targets something in the DOM
const list = document.querySelector('ol');

function displayResults(json) {
	articles = json.results;
	articles.forEach((article) => {

		const header = document.createElement('h3');
		const listItem = document.createElement('li');
		const anchor = document.createElement('a');
		const para = document.createElement('p');

		header.textContent = article.title;
		para.textContent = article.abstract;
		anchor.href = article.url;
		anchor.textContent = article.url;
		list.appendChild(listItem);
		listItem.appendChild(header);
		listItem.appendChild(anchor);
		listItem.appendChild(para);
	});
}


// Section Two ~ 7 days old 

// The URL for the top ten API at nytimes.com
const baseUrl2 = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?';
// The full URL for generating JSON using variables
let url2 = `${baseUrl2}api-key=${key}`;

// Fetch top articles from the previous seven days {Note #1}
fetch(url2).then(result2 => {
	return result2.json();
}).then(json2 => {
	displayResults2(json2);
});

// Need a variable that targets something in the DOM
const list2 = document.querySelector('#seven');

function displayResults2(json2) {
	articles2 = json2.results;
	articles2.forEach((article) => {

		const header2 = document.createElement('h3');
		const listItem2 = document.createElement('li');
		const anchor2 = document.createElement('a');
		const para2 = document.createElement('p');

		header2.textContent = article.title;
		para2.textContent = article.abstract;
		anchor2.href = article.url;
		anchor2.textContent = article.url;
		list2.appendChild(listItem2);
		listItem2.appendChild(header2);
		listItem2.appendChild(anchor2);
		listItem2.appendChild(para2);
	});
}

// Section Three ~ 30 days old 

// The URL for the top ten API at nytimes.com
const baseUrl3 = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?';
// The full URL for generating JSON using variables
let url3 = `${baseUrl3}api-key=${key}`;

// Fetch top articles from the previous seven days {Note #1}
fetch(url3).then(result3 => {
	return result3.json();
}).then(json3 => {
	displayResults3(json3);
});

// Need a variable that targets something in the DOM
const list3 = document.querySelector('#thirty');

function displayResults3(json3) {
	articles3 = json3.results;
	articles3.forEach((article) => {

		const header3 = document.createElement('h3');
		const listItem3 = document.createElement('li');
		const anchor3 = document.createElement('a');
		const para3 = document.createElement('p');

		header3.textContent = article.title;
		para3.textContent = article.abstract;
		anchor3.href = article.url;
		anchor3.textContent = article.url;
		list3.appendChild(listItem3);
		listItem3.appendChild(header3);
		listItem3.appendChild(anchor3);
		listItem3.appendChild(para3);
	});
}

// Additional Notes
/*
#1: The 7.json? at the end of the baseUrl variable equates to seven days. From the documentation 1 & 30 are also options for one and ten days. What are the top articles from the last x days?

#2: The array retrieved from the NYTimes json files returns 20 array objects by default.
*/

// References
/*
New York Times : https://developer.nytimes.com/docs/most-popular-product/1/types/ViewedArticle
New York Times : https://developer.nytimes.com/docs/most-popular-product/1/overview
Georgian College : COMP 1073 Week 11 
*/