import './App.css';

function App() {
  return (
    <main>
      <header className="App-header">
        <h1>
          Temporizador
        </h1>
      </header>
      <div className="display">
        <div class="tempo-hora, tempo">00</div>
        <div class="dois-ponto">:</div>
        <div class="tempo-min, tempo">00</div>
        <div class="dois-ponto">:</div>
        <div class="tempo-sec, tempo">00</div>
      </div>
      <div className="Button-Number">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div className="iniciar">Iniciar</div>
        <div className="reset">reset</div>
        <div>0</div>
        <div className="apagar">apagar</div>
        <div className="mais">+1:00</div>
        <div className="mais">5:00</div>
        <div className="mais">10:00</div>
      </div>
    </main>
  );
}

export default App;
