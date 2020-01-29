import React, { useContext } from 'react';

import SearchContext from '../contexts/search/index';
import logo from '../logo.png';

const Logo = () => {
	const searchContext = useContext(SearchContext);

	return (
    <img onClick={() => searchContext.resetPage()} src={logo} />
	);
}

export default Logo;