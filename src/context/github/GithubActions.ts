import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL as string;
const GITHUB_TOKEN = import.meta.env.VITE_API_TOKEN as string;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { "Authorization": `token ${GITHUB_TOKEN}` },
});

export async function searchUsers(text: string) {
	const params = new URLSearchParams({
		q: text,
	});

	const response = await github.get(`/search/users?${params}`);
	return response.data.items;
}

// Get user and repos
export async function getUserAndRepos(login: string) {
	const [user, repos] = await Promise.all([
		github.get(`/users/${login}`),
		github.get(`/users/${login}/repos`),
	]);

	return { user: user.data, repos: repos.data };
}
