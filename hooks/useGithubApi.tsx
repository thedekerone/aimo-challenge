import { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import { Idata } from '../utils/types';

export const fetcher = async (uri: string) => {
	try {
		const response = await fetch(uri);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
};
export const useGithubApi = (uri?: string) => {
	const [
		data,
		setData
	] = useState<Idata>({ loading: false });

	const fetchData = async (uri: string) => {
		const json = await fetcher(uri);
		setData({ ...json, loading: false });
	};

	const setLoading = (bool: boolean) => {
		if (data.loading !== bool) {
			setData({ loading: bool });
		}
	};
	if (uri !== undefined) {
		useEffect(() => {
			fetchData(uri);
		}, []);
	}

	return {
		data,
		fetchData,
		setLoading
	};
};

export const getSingleUser = async (username: string) => {
	const uri = `https://api.github.com/users/${username}`;
	const json = await fetcher(uri);
	return json;
};
