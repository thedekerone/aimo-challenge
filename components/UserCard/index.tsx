import React from 'react';
import { Img, Container, UserName } from './styles';

type CardProps = {
	login?: string;
	avatar_url?: string;
	score?: Number;
};

export const UserCard = ({
	login = 'username',
	avatar_url = 'https://avatars3.githubusercontent.com/u/424443?s=88&v=4',
	score = 2.5
}: CardProps) => {
	return (
		<Container>
			<Img src={avatar_url} alt='user image' />
			<UserName>{login}</UserName>
			<span>score: {score}</span>
		</Container>
	);
};
