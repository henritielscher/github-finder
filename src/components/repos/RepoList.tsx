import { Repo } from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

type RepoListProps = {
	repos: Repo[];
};

function RepoList({ repos }: RepoListProps) {
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="text-3xl my-4 font-bold card-title">
					Latest Repositories
				</h2>
				{repos.map((repo) => (
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
}

export default RepoList;
