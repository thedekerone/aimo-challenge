import React, { useContext } from 'react';
import { Background, Search, Title, Container } from './styles';
import { DataContext } from '../DataContext';
import { delay } from '../../utils/throttle';

export const SearchPage = () => {
	const { update, setLoading } = useContext(DataContext);

	const handleSearch = async (value: string) => {
		let uri: string = '';
		uri = `https://api.github.com/search/users?q=${value}&client_id=Iv1.fab9fbadcbe99d15&client_secret=4db17e6352ba149aa850f1a28220ae86fa5aeb79`;
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
