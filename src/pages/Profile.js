import React, { useState } from "react";
import md5 from "md5";
import axios from "axios";
import GlobalBtn from "../globalcomponent/GlobalBtn";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [gravatarUrl, setGravatarUrl] = useState("");
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const fetchUserDetails = async () => {
    if (!email) {
      setError("Please enter a valid email address.");

      return;
    }

    setError("");
    setLoading(true);

    try {
      // Generate Gravatar URL
      const emailHash = md5(email.trim().toLowerCase());
      const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
      setGravatarUrl(gravatarUrl);

      // Fetch GitHub repos
      const githubApiUrl = `https://api.github.com/search/users?q=${encodeURIComponent(
        email
      )}`;
      const githubResponse = await axios.get(githubApiUrl);
      if (githubResponse.data.items && githubResponse.data.items.length > 0) {
        const githubUsername = githubResponse.data.items[0].login;
        const reposResponse = await axios.get(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        setGithubRepos(reposResponse.data);
      } else {
        setGithubRepos([]);
      }
      setEmail("");
    } catch (err) {
      setError(
        "Failed to fetch data. Please check the email address or try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="auth-screen">
      <h1>Profile</h1>
      <div className="input-container">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <GlobalBtn
        style={{ margin: "auto", marginTop: "1rem" }}
        onClick={fetchUserDetails}
        disabled={!email}
      >
        {loading ? "Loading..." : "Submit"}
      </GlobalBtn>

      {error && <p className="error">{error}</p>}

      {gravatarUrl && (
        <div className="gravatar-container">
          <h2>Gravatar</h2>
          <img src={gravatarUrl} alt="Gravatar" />
        </div>
      )}
      {githubRepos.length > 0 && (
        <div className="github-container">
          <h2>GitHub Repositories</h2>
          <ul>
            {githubRepos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
