# Wikisearchia

## Brief overview:

This project is a search engine that uses the Wikipedia API to produce top results from a user's search. It also saves and displays your recent search history.

The code uses React Context.

## Details:

### UI Components:
1. Search Box - uses a local state value and once the search button is clicked, sends that value to the global `SearchContext` to get results and update search history
2. Content Box - uses `SearchContext` to retrieve the value to send to to the Wikipedia API endpoint. Uses local state to update content from different searches and display on the DOM.
3. Search History - uses `SearchContext` to display recent searches and when clicked, send to the rest of the app to conduct the search.
4. Logo - uses `SearchContext` to reset to default settings and display the homepage.

### Event Triggers:
`onKeyDown`
1. When the enter key is pressed - executes search with the search input text and resets the input value to an empty string.

`onClick`
1. When a link is clicked - executes search with the target link's search value.
2. When the search button is clicked - executes search with the search input text and resets the input value to an empty string.
3. When the header logo is clicked - sets search input value to and empty string and returns to the homepage

### Styles
Styles are written in sass.
Main styles and global styles are in `App.scss`
Component-specific styles are in `src/styles`

## Steps to Run:
1. Clone or download this repository and `cd` into this directory on your computer.
2. Run `npm i`
3. Run `npm start` 

