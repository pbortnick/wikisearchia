import React, { useContext, useState } from 'react';

import SearchContext from '../contexts/search/index';

import '../styles/content.scss';

const Content = () => {
  const searchContext = useContext(SearchContext);
  const [content, setContent] = useState('');

  if (searchContext.searchValue.length) {
    fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchContext.searchValue.replace(/ /g, '%20')}&format=json&srlimit=10`)
      .then(res => res.json())
      .then((response) => {
        setContent(response.query.search);
        searchContext.stopSearch();
      })
  }

  if (!searchContext.history.length && content.length) {
    setContent('');
  }

  const handleClick = (e) => {
    e.preventDefault();
    searchContext.sendSearch(e.target.text);
  }

	return (
		<div className="content">
			<div>
        {/* <h2>{searchContext.searchValue}</h2> */}
        {content ? <ul>{content.map(target => {
          return <li>
            <a href={`http://en.wikipedia.org/?curid=${target.pageid}`} target="_blank" class="wiki-link">
              <h3>{target.title}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
              {/* <h4>{target.wordcount} words</h4> */}
            <div dangerouslySetInnerHTML={{ __html: target.snippet }} />
          </li>
        })}</ul> : 
        <div className="initial">
          <p>This project allows you to search anything you want via the Wikipedia API. Your search results will include a list of the top Wikipedia pages that include your submission. Feel free to click on any link in the results to open the corresponding Wikipedia page in another tab. Your recent searches will appear in the box below. Feel free to click on any of those to re-search.</p>
          <p>Click on any of the links below to begin searching or type your own in the search box above! (Clicking the title will lead you back to the homepage)</p>
          <div className="initial-options">
            <a href="#" onClick={(e) => handleClick(e)}>CBRE</a>
            <a href="#" onClick={(e) => handleClick(e)}>Williamsburg</a>
            <a href="#" onClick={(e) => handleClick(e)}>Real Estate</a>
            <a href="#" onClick={(e) => handleClick(e)}>Random</a>
          </div>
        </div>}
        {/* <>not content div use cbre as first search</> */}
      </div>
		</div>
	);
}

export default Content;