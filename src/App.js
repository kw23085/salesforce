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
		<header className="header">
			<Nav links={links}/>
		</header>

		</div>
	);
}


export default App;