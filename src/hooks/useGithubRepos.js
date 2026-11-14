import { useState, useEffect } from "react";
import { PROFILE } from "../constants/profile";
import { fetchGithubPortfolioData } from "../services/githubService";

export const useGithubRepos = (username = PROFILE.githubUsername) => {
  const [repos, setRepos] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadGithubData = async () => {
      try {
        setLoading(true);
        const data = await fetchGithubPortfolioData(username, {
          signal: controller.signal,
        });
        setUserProfile(data.userProfile);
        setRepos(data.repos);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.warn("Could not load GitHub repos live, using fallback data", err);
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadGithubData();

    return () => {
      controller.abort();
    };
  }, [username]);

  return { repos, userProfile, loading, error };
};
