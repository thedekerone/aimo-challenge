import { useState, useEffect } from 'react';
import 'isomorphic-fetch';

export const useGithubApi = (uri: string) => {
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

	const [
		data,
		setData
	] = useState<Idata>({ loading: true });

	const fetchData = async () => {
		try {
			const response = await fetch(uri);
			const json = await response.json();
			setData({ ...json, loading: false });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return [
		data
	];
};
