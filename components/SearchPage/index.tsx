import React, { useContext } from 'react';
import { Background, Search, Title, Container } from './styles';
import { DataContext } from '../DataContext';
import { delay } from '../../utils/throttle';

export const SearchPage = () => {
	const { update } = useContext(DataContext);

	const handleSearch = async (value: string) => {
		let uri: string = '';
		uri = `https://api.github.com/search/users?q=${value}`;

		await delay(1000);

		if (value.length > 3) {
			await update(uri);
			console.log(uri);
		}
	};
	return (
		<Background>
			<Container>
				<Title>Github Profile</Title>
				<Search
					onChange={(e) => {
						handleSearch(e.target.value);
					}}
				/>
			</Container>
		</Background>
	);
};
