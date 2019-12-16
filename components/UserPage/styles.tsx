import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	max-width: 10rem;
	border-radius: 10px;
`;
export const Username = styled.span`
	font-size: 1.6rem;
	margin-top: .2rem;
	color: #3e3e3e;
`;
export const Name = styled.h3`
	font-size: 1.2rem;
	color: #1e1e1e;

	margin-top: .5rem;
`;
export const Container = styled.div`
	max-width: 90rem;
	margin: 0 auto;
	padding: 1.5rem;
	padding-top: 9rem;
	display: flex;
	flex-direction: column;
	@media (min-width: 900px) {
		flex-direction: row;
	}
`;

export const ProfileInfo = styled.div`
	margin-left: 2rem;
	width: 100%;

	@media (min-width: 900px) {
		margin-left: 0;
		margin-top: .6rem;
	}
`;

export const Profile = styled.div`
	width: 100%;
	display: flex;
	@media (min-width: 900px) {
		max-width: 22rem;
		flex-direction: column;
		& img {
			max-width: 100%;
		}
	}
`;

export const RepositoryList = styled.div`
	flex-shrink: 1;
	width: 100%;
	margin-left: 0;
	margin-top: 6rem;
	@media (min-width: 900px) {
		flex-direction: row;
		margin-left: 6rem;
		margin-top: 0;
	}
`;
export const Repository = styled.div`
	border-radius: 7px;
	border: 1px solid #d3d3d3;
	width: 100%;
	margin-top: 1rem;
	padding: 1.3rem .9rem;
	min-height: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const RepositoryName = styled.a`
	color: #00fa;
	display: flex;
	align-items: center;
	font-weight: bold;
`;
export const RepositoryDescription = styled.span`
	margin-top: 1rem;
	display: block;
`;
export const RepositoryLang = styled.div`
	margin-top: 1rem;
	&::before {
		content: '';
		width: 15px;
		height: 15px;
		display: inline-block;
		margin-right: .5rem;
		background: palegreen;
		border-radius: 100%;
	}
`;

export const Button = styled.a`
	padding: .8rem 4rem;
	appearance: button;
	-webkit-appearance: button;
	border-radius: 10px;
	width: 100%;
	text-align: center;
	margin-top: 2rem;
	font-weight: bold;
	border: 1px solid #d0d0d0;
	color: #1e1e1e;
	background-color: #eff3f6;
	background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
	&:hover {
		filter: brightness(.95);
	}
	&:active {
		background: linear-gradient(
			90deg,
			rgba(250, 251, 252, 1) 0%,
			rgba(239, 243, 246, 1) 45%,
			rgba(250, 251, 252, 1) 100%
		);
	}
`;
