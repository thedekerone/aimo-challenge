export type Iitems = {
	login?: string;
	avatar_url?: string;
	score?: number;
	id?: number;
	// map(item: any): JSX.Element;
};
export interface Idata {
	loading?: boolean;
	items?: Iitems[];
}

export interface Icontext {
	data: Idata;
	update?: any;
	setLoading?: any;
}

export type query = {
	username: string;
};
export interface IuserProps {
	data: Iitems;
}
