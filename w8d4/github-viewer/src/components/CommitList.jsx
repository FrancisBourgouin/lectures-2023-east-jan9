import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commitData } = props;

  const parsedCommits = commitData.map((commit) => (
    <CommitListItem key={commit.sha} commit={commit} />
  ));

  return (
    <section>
      <h1>List of commits for GITHUBREPO</h1>
      <ul>{parsedCommits}</ul>
    </section>
  );
}
