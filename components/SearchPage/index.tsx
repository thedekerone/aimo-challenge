import React, { useContext } from 'react';
import { Background, Search, Title, Container } from './styles';
import { DataContext } from '../DataContext';
import { delay } from '../../utils/throttle';

export const SearchPage = () => {
	const { update, setLoading } = useContext(DataContext);

	const handleSearch = async (value: string) => {
		let uri: string = '';
		uri = `https://api.github.com/search/users?q=${value}`;
		setLoading(true);

		if (value.length > 0) {
			await delay(1000);
			await update(uri);
			console.log(uri);
		}
		if (value.length === 0) {
			setLoading(false);
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
