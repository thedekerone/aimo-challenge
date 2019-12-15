import React from 'react';
import { IuserProps, query } from '../utils/types';
import { GlobalStyles } from '../utils/GlobalStyles';
import { getSingleUser } from '../hooks/useGithubApi';

const User = ({ data }: IuserProps) => {
	console.log(data);
	return (
		<div>
			<GlobalStyles />
			<h1>{data.login}</h1>
		</div>
	);
};
//@ts-ignore
User.getInitialProps = async ({ query }: query) => {
	const data = await getSingleUser(query.username);
	return { data: data };
};
export default User;
