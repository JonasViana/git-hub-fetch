import "./style.css";

export default function UserCard(props) {
  return (
    <div className="card">
      <div className="card_header">
        <img src={props.data.avatar_url} alt="" />
        <div className="card_info">
            <a className="userName" href={props.data.html_url} target="blank"><p className="card_name">{props.data.name}</p></a>
          <span className="card_username">@{props.data.login}</span>
          <p className="card_username">{props.data.location}</p>
        </div>
      </div>
      <div className="card_body">
        <div className="github_followers">
          <span className="count">{props.data.followers}</span>
          <span className="text">Followers</span>
        </div>
        <div className="github_followers">
          <span className="count">{props.data.following}</span>
          <span className="text">Following</span>
        </div>
        <div className="github_followers">
          <span className="count">{props.data.public_repos}</span>
          <span className="text">Repositories</span>
        </div>
      </div>
    </div>
  )
}