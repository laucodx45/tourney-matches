import Player from "./Player"

function PlayerList(props) {
  
  const playerData = props.parsedPlayerData;
  const players = playerData.map((player) => {
    return (
      <Player key={player.gamerTag} firstName={player.firstName} gamerTag={player.gamerTag} lastName={player.lastName} win={player.win}/>
    );
  })

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}


export default PlayerList;