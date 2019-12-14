let timer: any;

export const delay = (interval: number) => {
	clearTimeout(timer);
	return new Promise((resolve) => {
		timer = setTimeout(resolve, interval);
	});
};
