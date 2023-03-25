import React from 'react'

const Home = ({ title, products, handleClick }) => {
	
	return (
		<div>
			<h1>{title}</h1>
			{products.map((product, index) => (
				<li key={index}>{product}</li>
			))}
			<button onClick={handleClick}>Click Me</button>
		</div>
	)
}

export default Home