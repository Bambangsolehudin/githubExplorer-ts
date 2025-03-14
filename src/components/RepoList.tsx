import { Link } from "react-router-dom";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

interface RepoListProps {
  repos: Repo[];
  username: string;
}

const RepoList: React.FC<RepoListProps> = ({ repos, username }) => {
  return (
    <ul className="mt-4">
      {repos.length === 0 ? (
        <p className="text-md text-gray-50">0 results (-)</p>
      ) : (
        repos.map((repo) => (
          <li
            key={repo.id}
            className="p-3 border border-gray-600 py-6 rounded-xl mb-2 flex justify-between"
          >
            <div className="w-[90%]">
              <Link
                to={`/repos/${username}/${repo.name}`}
                className="text-blue-500 text-md font-semibold hover:underline"
              >
                {repo.name}
              </Link>
              <p className="text-sm text-gray-100">{repo.description}</p>
            </div>
            {repo.stargazers_count > 0 && (
              <span className="text-gray-100 my-2">
                ⭐ {repo.stargazers_count}
              </span>
            )}
          </li>
        ))
      )}
    </ul>
  );
};

export default RepoList;
