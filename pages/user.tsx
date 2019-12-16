import React, { useEffect, useState } from 'react';
import { IuserProps, Iquery } from '../utils/types';
import { GlobalStyles } from '../utils/GlobalStyles';
import { dataFetcher, getRepos } from '../hooks/useGithubApi';
import { UserPage } from '../components/UserPage';
import { Navbar } from '../components/Navbar';

const User = ({ data }: IuserProps) => {
	const [
		reposData,
		setReposData
	] = useState([]);

	useEffect(() => {
		getRepos(data.repos_url, setReposData);
	}, []);
	console.log(data);

	const { login, score, avatar_url, name, html_url } = data;
	return (
		<div>
			<GlobalStyles />
			<Navbar dark />
			<UserPage
				login={login}
				score={score}
				avatar_url={avatar_url}
				name={name}
				html_url={html_url}
				repositories={reposData}
			/>
		</div>
	);
};

User.getInitialProps = async ({ query }: Iquery) => {
	const userData = await dataFetcher(query.username);
	return { data: userData };
};
export default User;
