import React, { useContext } from 'react';
import { DataContext } from '../DataContext';
import { UserCard } from '../UserCard';
import { Grid, Container, Title } from './styles';

export const UsersInSearch = () => {
	const data = useContext(DataContext);
	console.log(data);

	if (data.loading === true) {
		return <h1>Loading</h1>;
	}
	return (
		<Container>
			<Title>Users...</Title>
			<Grid>
				{data.items !== undefined &&
					data.items.map(({ login, avatar_url, score }) => {
						return <UserCard login={login} avatar_url={avatar_url} score={score} />;
					})}
			</Grid>
		</Container>
	);
};
