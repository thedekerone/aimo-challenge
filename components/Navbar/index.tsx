import React from 'react';
import { Title, Container } from './styles';
import { Inavbar } from '../../utils/types';
import Link from 'next/link';

export const Navbar = ({ dark }: Inavbar) => {
	return (
		<Container dark={dark}>
			<Link href='/'>
				<Title>Aimo</Title>
			</Link>
		</Container>
	);
};
