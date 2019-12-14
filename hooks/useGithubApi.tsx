import { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import { Idata } from '../utils/types';

export const useGithubApi = (uri: string) => {
	const [
		data,
		setData
	] = useState<Idata>({ loading: true });

	const fetchData = async (uri: string) => {
		try {
			const response = await fetch(uri);
			const json = await response.json();
			setData({ ...json, loading: false });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(uri);
	}, []);

	return {
		data,
		fetchData
	};
};
