import React from 'react';
interface Iitems {
	login?: string;
	avatar_url?: string;
	score?: number;
	// map(item: any): JSX.Element;
}
interface Idata {
	loading?: boolean;
	items?: Iitems[];
}

export const DataContext = React.createContext<Idata>({});
