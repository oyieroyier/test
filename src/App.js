import { useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
	const [players, setPlayers] = useState([]);
	const title = 'Good Morning';

	function handleClick() {
		setPlayers(['Prince', 'Kimathi', 'Bob']);
	}

	return (
		<div className="App">
			<Home title={title} products={players} />
			<button onClick={handleClick}>Button</button>
		</div>
	);
}

export default App;
