import { useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
	const [players, setPlayers] = useState([]);
	const title = 'Good Morning';

	function listUsers() {
		setPlayers(['Prince', 'Kimathi', 'Bob']);
	}

	return (
		<div className="App">
			<Home title={title} products={players} handleClick={listUsers} />
		</div>
	);
}

export default App;
