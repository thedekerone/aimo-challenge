import React from 'react';
import { IsingleUser } from '../../utils/types';
import {
	Img,
	ProfileInfo,
	Container,
	Username,
	Name,
	Profile,
	RepositoryList,
	Repository,
	RepositoryName,
	RepositoryDescription,
	RepositoryLang,
	Button
} from './styles';

export const UserPage = ({ login, avatar_url, name, repositories, html_url }: IsingleUser) => {
	return (
		<Container>
			<Profile>
				<Img src={avatar_url} alt='User image' />
				<ProfileInfo>
					<Name>{name}</Name>
					<Username>{login}</Username>
					<Button href={html_url}>Watch on Github</Button>
				</ProfileInfo>
			</Profile>
			<RepositoryList>
				<h1>Repositories</h1>
				{repositories.length > 0 ? (
					repositories.map((repos) => {
						return (
							<Repository key={repos.id}>
								<RepositoryName href={repos.svn_url}>
									<img width='20px' src={require('../../static/repos.png?webp')} alt='' />
									{repos.name}
								</RepositoryName>

								<RepositoryDescription>{repos.description}</RepositoryDescription>
								<RepositoryLang>{repos.language}</RepositoryLang>
							</Repository>
						);
					})
				) : (
					<h5>There isn't any repository</h5>
				)}
			</RepositoryList>
		</Container>
	);
};
