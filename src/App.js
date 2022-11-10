import { useState, useEffect } from "react";
import './App.css';

const App = () => {
	const [advice, setAdvice] = useState('');

	const fetchAdvice = async () => {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();

		setAdvice(data.slip.advice);
	}

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className="app">
			<div className="card">
				<h1 className="heading">{advice}</h1>
				<button
					onClick={() => fetchAdvice()}
					className="button"
				>
					<span>Give me advice!</span>
				</button>
			</div>
		</div>
	);
}

export default App;