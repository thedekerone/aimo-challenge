import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	width: 100%;
	grid-template-rows: auto;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	gap: 2rem;
`;
export const Title = styled.h3`
	font-size: 2rem;
	margin-bottom: 1.2rem;
`;
export const Container = styled.div`
	max-width: 90rem;
	margin: 0 auto;
	margin-top: 4rem;
	padding: 0 2rem;
`;
