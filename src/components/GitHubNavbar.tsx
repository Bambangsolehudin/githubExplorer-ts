import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

interface GitHubNavbarProps {
  username: string;
  repo?: string;
}

const GitHubNavbar = ({ username, repo }: GitHubNavbarProps) => {
  const [search, setSearch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/repos/${search.trim()}`);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiSearch size={24} />}
        </button>

        {/* Logo and Username */}
        <div className="flex gap-2 items-center">
          <a href="/" className="text-xl font-bold">
            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.165c-3.338.725-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.758-1.334-1.758-1.09-.744.083-.729.083-.729 1.205.086 1.84 1.24 1.84 1.24 1.07 1.834 2.809 1.305 3.49.997.108-.775.42-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.527.116-3.18 0 0 1.008-.323 3.3 1.23a11.484 11.484 0 013.006-.404c1.02.005 2.047.138 3.007.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.24 2.877.117 3.18.77.84 1.234 1.91 1.234 3.22 0 4.607-2.805 5.622-5.475 5.92.432.374.814 1.103.814 2.222v3.293c0 .32.192.692.8.577C20.565 21.796 24 17.303 24 12c0-6.627-5.372-12-12-12z"
              />
            </svg>
          </a>
          <span>
            <Link to={`/repos/${username}`} className={`${repo ? "underline underline-offset-4" : ""} font-semibold`}>
              {username}
            </Link>
            {repo ? ` /${repo}` : ""}
          </span>
        </div>
      </div>

      {/* Desktop Search Bar */}
      <form onSubmit={handleSearch} className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="bg-gray-800 w-xl text-white text-sm px-3 py-1.5 pl-8 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch className="absolute left-2 top-2.5 text-gray-400 cursor-pointer" onClick={handleSearch} />
      </form>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 md:hidden">
          <form onSubmit={handleSearch} className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search GitHub username..."
              className="bg-gray-700 w-full text-white text-sm px-3 py-1.5 pl-8 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="absolute left-2 top-2.5 text-gray-400 cursor-pointer" onClick={handleSearch} />
          </form>

          {/* <Link to={`/repos/${username}`} className="text-white font-semibold">
            {username}
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default GitHubNavbar;
