import { createContext, useContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// TYPESCRIPT
type GithubProviderProps = {
	children:
		| JSX.Element
		| JSX.Element[]
		| React.ReactChild
		| React.ReactChild[];
};

type GithubContextProps = {
	loading: boolean;
	users: User[];
	user: User;
	repos: Repo[];
	dispatch: React.Dispatch<any>;
};

export type User = {
	login: string;
	id: string;
	avatar_url: string;
	name: string;
	bio: string | null;
	blog: string | null;
	type: string;
	location: string | null;
	twitter_username: string | null;
	html_url: string;
	followers: number;
	following: number;
	public_repos: number;
	public_gists: number;
	hireable: boolean;
};

export type Repo = {
	name: string;
	id: string;
	description: string;
	html_url: string;
	forks: number;
	open_issues: number;
	watchers_count: number;
	stargazers_count: number;
};

// CONTEXT
const GithubContext = createContext<GithubContextProps | undefined>(undefined);

export function useGithubContext() {
	const context = useContext(GithubContext);
	if (context === undefined) throw Error("Invalid Context");
	else return context;
}

// PROVIDER COMPONENT
export const GithubProvider = ({ children }: GithubProviderProps) => {
	const initialState = {
		users: [] as User[],
		user: {} as User,
		repos: [] as Repo[],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
