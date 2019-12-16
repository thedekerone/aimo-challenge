import styled from 'styled-components';
import { Inavbar } from '../../utils/types';

export const Title = styled.a`
	font-size: 1.5rem;
	color: #fbfbfb;
	font-weight: bold;
`;
export const Container = styled.div`
	width: 100%;
	position: absolute;
	padding: 1.2rem 2rem;
	background: ${(props: Inavbar) => (props.dark ? '#2e2e2e' : 'transparent')};
`;
