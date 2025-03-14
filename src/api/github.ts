import axios from "axios";

export const fetchRepos = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    console.log(response?.data);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories", error);
    return [];
  }
};

export const fetchReadme = async (username : string, repo: string) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/readme`, {
      headers: { Accept: "application/vnd.github.v3.raw" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching README", error);
    return "README not available.";
  }
};
