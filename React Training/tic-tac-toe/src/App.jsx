import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intailName="Player 1" symbol="X" />
          <Player intailName="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
