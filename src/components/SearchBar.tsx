import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && username.trim() !== "") {
      navigate(`/repos/${username.trim()}`);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded bg-gray-800 w-[90vw] xl:w-2xl lg:w-xl md:w-xl  text-white text-sm"
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
