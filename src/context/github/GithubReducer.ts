import { Repo, User } from "./GithubContext";

type GithubReducerState = {
	users: User[];
	user: User;
	repos: Repo[];
	loading: boolean;
};

type GithubReducerActionReset = {
	type: "CLEAR_USERS";
};

type GithubReducerActionRepos = {
	type: "GET_REPOS";
	payload: Repo[];
};

type GithubReducerActionGetUsers = {
	type: "GET_USERS" | "SET_LOADING";
	payload: User[];
};

type GithubReducerActionGetUserData = {
	type: "GET_USER_AND_REPOS";
	payload: {
		user: User;
		repos: Repo[];
	};
};

type GithubReducerActionLoading = {
	type: "SET_LOADING";
};

type GithubReducerAction =
	| GithubReducerActionGetUsers
	| GithubReducerActionReset
	| GithubReducerActionLoading
	| GithubReducerActionGetUserData;

const githubReducer = (
	state: GithubReducerState,
	action: GithubReducerAction
) => {
	switch (action.type) {
		case "GET_USERS":
			return { ...state, users: action.payload, loading: false };
		case "GET_USER_AND_REPOS":
			return {
				...state,
				user: action.payload.user,
				repos: action.payload.repos,
				loading: false,
			};
		case "CLEAR_USERS":
			return { ...state, users: [] };
		case "SET_LOADING":
			return { ...state, loading: true };
		default:
			return state;
	}
};

export default githubReducer;
