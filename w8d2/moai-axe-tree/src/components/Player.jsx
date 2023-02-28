export default function Player(props) {
  return (
    <section className="player" data-testid="player">
      <span role="img" aria-label="player">
        👩‍💻
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button
            type="button"
            value="Moai"
            data-testid="moai"
            onClick={() => props.chooseOption("🗿")}
          >
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>
          <button
            type="button"
            value="Axe"
            data-testid="axe"
            onClick={() => props.chooseOption("🪓")}
          >
            <span role="img" aria-label="axe">
              🪓
            </span>
          </button>
          <button
            type="button"
            value="Tree"
            data-testid="tree"
            onClick={() => props.chooseOption("🌳")}
          >
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
