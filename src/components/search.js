import React, { useContext, useState } from 'react';

import SearchContext from '../contexts/search/index';

import '../styles/search.scss';

function Search() {
	const searchContext = useContext(SearchContext);
	const [value, setValue] = useState(searchContext.searchValue);

	const onPress = (e) => {
		if (e.keyCode === 13 && e.target.value.length) {
			searchContext.sendSearch(e.target.value); 
			setValue('');
		}
	}

	return (
		<div className="search">
			<input type="text" placeholder="Search anything" onKeyDown={onPress} value={value} onChange={ (e) => { setValue(e.target.value) } } />
			<button onClick={ () => { searchContext.sendSearch(value); setValue(''); } }>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
			</button>			
		</div>
	);
}

export default Search;