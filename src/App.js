import './App.scss';
import Nav from './nav'

function App() {

	// Nav Links
	let links = [
		{
			title: 'Home',
			url: '#'
		},
		{
			title: 'Sample 2',
			url: '#'
		},
		{
			title: 'Sample 3',
			url: '#'
		},
		{
			title: 'Sample 4',
			url: '#'
		},
		{
			title: 'Sample 5',
			url: '#'
		},
		{
			title: 'Sample 6',
			url: '#'
		},
	]


	return (
		<div id="app-container">

			{/* Header */}
			<header className="header">
				<Nav links={links}/>
			</header>

			{/* Main */}
			<main>
				{/* Hero */}
				<section className="hero">
					<div className="container">
						<h2>CX CHALLENGE</h2>
						<p>Lorem ipsum dolor sit amet,
						<br /> consectetur adipiscing elit,
						</p>
						<div role="button" tabIndex="8">Watch Demo</div>
					</div>
				</section>

			</main>


		</div>
	);
}


export default App;