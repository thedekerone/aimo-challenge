import styled from 'styled-components';

export const Background = styled.div`
	width: 100%;
	height: 37rem;
	background: url(${require('../../static/background.jpg?webp')});
	padding-top: 13rem;
	background-repeat: no-repeat;
	background-size: cover;
`;
export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 63rem;
	padding: 0 2rem;
`;
export const Title = styled.h1`
	font-size: 4.5rem;
	color: #292a2b;
	color: white;
	margin-bottom: 4rem;
	text-align: center;
`;

export const Search = styled.input.attrs({ type: 'search', placeholder: 'Search user' })`

  border-radius: 200px;
  font-size: 1rem;
  border: 1px solid #909396;
  border: 1px solid #fefeff;

  display:block;
  padding: 1em;
  width: 100%;
  color: #555759;

`;
