import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRepos } from "../api/github";
import RepoList from "../components/RepoList";
import Loading from "../components/Loading";
import GitHubNavbar from "../components/GitHubNavbar";

interface RepoType {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

const Repos = () => {
  const { username } = useParams<{ username?: string }>();
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (username) {
      fetchRepos(username).then((data: RepoType[]) => {
        setRepos(data);
        setLoading(false);
      });
    }
  }, [username]);

  return (
    <div className="h-[100vh] overflow-y-auto bg-gray-800">
      <GitHubNavbar username={username ?? ''} />
      <div className="w-10/12 m-auto">
        {/* <h2 className="text-2xl text-white text-center mt-10">Repositories of {username}</h2> */}
        {loading ? <Loading /> : <RepoList repos={repos} username={username ?? ''} />}
      </div>
    </div>
  );
};

export default Repos;
