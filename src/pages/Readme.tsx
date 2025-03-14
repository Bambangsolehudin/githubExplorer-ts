import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReadme } from "../api/github";
import ReadmeViewer from "../components/ReadmeViewer";
import Loading from "../components/Loading";
import GithubNavbar from "../components/GitHubNavbar";

interface Params {
  username?: string;
  repo?: string;
}

const Readme = () => {
  const { username, repo } = useParams() as Params;
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (username && repo) {
      fetchReadme(username, repo).then((data) => {
        setReadme(data);
        setLoading(false);
      });
    }
  }, [username, repo]);

  return (
    <div className="h-[100vh] overflow-y-auto bg-gray-800">
      <GithubNavbar username={username ?? ''} repo={repo} />
      <div className="w-10/12 mx-auto my-6">
        <span className="text-gray-200 text-lg">README.md </span>
        {loading ? <Loading /> : <ReadmeViewer content={readme} />}
      </div>
    </div>
  );
};

export default Readme;
