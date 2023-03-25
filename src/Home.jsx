import React from 'react'

const Home = ({ title, products }) => {
	
	return (
		<div>
			<h1>{title}</h1>
			{products.map((product, index) => (
				<li key={index}>{product}</li>
			))}
		</div>
	)
}

export default Home