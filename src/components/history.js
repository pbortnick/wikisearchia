import React, { useContext } from 'react';

import SearchContext from '../contexts/search/index';

import '../styles/history.scss';

const History = () => {
	const searchContext = useContext(SearchContext);

	return (
		<div className="history">
			<ul>
				{searchContext.history.length ? searchContext.history.map((target, i) =>  
					<li><a href="#" onClick={(e) => { e.preventDefault(); searchContext.sendSearch(e.target.text); }}>{target}</a></li>
				) : <span>There isn't any history to show right now.</span>}
			</ul>
		</div>
	);
}

export default History;