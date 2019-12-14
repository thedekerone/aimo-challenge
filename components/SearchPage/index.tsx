import React from 'react';
import { Background, Search, Title, Container } from './styles';

export const SearchPage = () => {
	return (
		<Background>
			<Container>
				<Title>Github Profile</Title>
				<Search />
			</Container>
		</Background>
	);
};
