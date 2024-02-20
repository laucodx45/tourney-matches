import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import playerData from "./data/playerData";
import matchData from "./data/matchData";
import {preparePlayerData, addWinsToPlayers} from "./helpers/playerHelpers";

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
      Tourney Matches {" "}
      <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      < PlayerList parsedPlayerData={parsedPlayerData} />
      < MatchList playerData={playerData} matchData={matchData} />
    </div>
  );
}

export default App;
