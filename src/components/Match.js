function Match(props) {
  return (
    <article className="Match">
      <h1>
        {props.players[0]} <span>vs</span> {props.players[1]}
      </h1>
      {props.winner ? <h2>{props.winner} is the winner by {props.scoreDifference}!</h2> : <h2>No winners yet!</h2>}
      {/* To be shown when there is no winner */}
    </article>
  );
}

export default Match;