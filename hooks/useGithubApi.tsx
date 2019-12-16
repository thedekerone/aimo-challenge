import { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import { Idata } from '../utils/types';

export const fetcher = async (uri: string) => {
	try {
		const response = await fetch(uri);
		console.log(uri);
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

export const dataFetcher = async (username: string) => {
	const uri = `https://api.github.com/users/${username}`;
	const json = await fetcher(uri);
	return json;
};

// Setter represents the set method on a useState hook
export const getRepos = async (uri: string, setter: any) => {
	const json = await fetcher(uri);
	setter(json);
};
