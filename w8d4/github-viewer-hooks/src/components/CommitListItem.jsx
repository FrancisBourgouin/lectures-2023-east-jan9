// const url = commitList[0].html_url
// const message = commitList[0].commit.message
// const date = commitList[0].commit.author.date
// const name = commitList[0].commit.author.name

export default function CommitListItem(props) {
  const { commit } = props;
  return (
    <li>
      <a href={commit.html_url} target="_blank">
        {commit.commit.message}
      </a>
      <p>By: {commit.commit.author.name}</p>
    </li>
  );
}
