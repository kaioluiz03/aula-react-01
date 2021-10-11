
import coruja from './Coruja-buraqueira7-2.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Aprendendo React</h1>
      <img alt='Imagem da coruja buraqueira' src={coruja}/>
      <pre>
      Por influência da mitologia grega, tanto que Atena, 
      deusa da guerra e da sabedoria, tinha uma coruja 
      como mascote. 
      </pre>
    </div>
  );
}

export default App;
