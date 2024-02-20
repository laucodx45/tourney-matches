export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerData, matchData) => {
  
  return preparePlayerData(playerData).map((player) => {
    
    const currentWins = matchData.reduce((accum, match) => {
      if (match.winner === player.gamerTag) {
        return accum += 1;
      } else {
        return accum;
      }
    }, 0);

    player.win = currentWins;
    return player;

  });
  
} 


/*
The preparePlayerData function will be converting playerData from an object to an array. 
The addWinsToPlayers function will add a wins key to every player.
*/