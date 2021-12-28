export const getToken = (key: string) => {
	const token = localStorage.getItem(key);
	if (token) {
		return JSON.parse(token);
	}
	return null;
};
export const setToken = (key: string, value: any) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {}
};
