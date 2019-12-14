import React from 'react';
import { Img, Container, UserName } from './styles';
import { Iitems } from '../../utils/types';

export const UserCard = ({
	login = 'username',
	avatar_url = 'https://avatars3.githubusercontent.com/u/424443?s=88&v=4',
	score = 2.5,
	id = 20
}: Iitems) => {
	return (
		<Container>
			<Img src={avatar_url} alt='user image' />
			<UserName>{login}</UserName>
			<span>score: {score}</span>
			<span>{id}</span>
		</Container>
	);
};
