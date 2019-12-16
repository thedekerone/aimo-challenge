// Items interface
export type Iitems = {
	login: string;
	avatar_url: string;
	score: number;
	id?: number;
	name?: string;
};
export interface Iusers extends Iitems {
	repos_url: string;
	html_url: string;
}

export type repositories = {
	name: string;
	description: string;
	svn_url: string;
	language: string;
	id: number;
};

export interface IsingleUser extends Iitems {
	name?: string;
	repositories: repositories[];
	html_url: string;
}
export interface Idata {
	loading?: boolean;
	items?: Iitems[];
}

export interface Icontext {
	data: Idata;
	update?: any;
	setLoading?: any;
}

export interface Iquery {
	query: query;
}

export type query = {
	username: string;
};
export interface IuserProps {
	data: Iusers;
}

// Navbar Interfaces

export interface Inavbar {
	dark?: boolean;
}
