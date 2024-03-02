require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
  login: "MD-Sharik",
  id: 135040117,
  node_id: "U_kgDOCAyMdQ",
  avatar_url: "https://avatars.githubusercontent.com/u/135040117?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MD-Sharik",
  html_url: "https://github.com/MD-Sharik",
  followers_url: "https://api.github.com/users/MD-Sharik/followers",
  following_url:
    "https://api.github.com/users/MD-Sharik/following{/other_user}",
  gists_url: "https://api.github.com/users/MD-Sharik/gists{/gist_id}",
  starred_url: "https://api.github.com/users/MD-Sharik/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MD-Sharik/subscriptions",
  organizations_url: "https://api.github.com/users/MD-Sharik/orgs",
  repos_url: "https://api.github.com/users/MD-Sharik/repos",
  events_url: "https://api.github.com/users/MD-Sharik/events{/privacy}",
  received_events_url: "https://api.github.com/users/MD-Sharik/received_events",
  type: "User",
  site_admin: false,
  name: "MD SHARIK",
  company: null,
  blog: "",
  location: "INDIA",
  email: null,
  hireable: null,
  bio: "Frontend Engineer from India",
  twitter_username: null,
  public_repos: 17,
  public_gists: 0,
  followers: 5,
  following: 2,
  created_at: "2023-05-30T14:42:26Z",
  updated_at: "2024-03-01T10:29:18Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("huma1n0_0");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello this is login</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
