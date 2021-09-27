import './App.scss';
import astroImg from './img/astro.png';
import img1 from './img/image01.png';
import img2 from './img/image02.png';
import img3 from './img/image03.png';
import img4 from './img/image04.png';
import einsteinImg from './img/einstein.png';
import productImg from './img/product.png';
import logo from './img/logo-salesforce.svg'
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
						<span>CX CHALLENGE</span>
						<h2>Lorem ipsum dolor sit amet,
						<br /> consectetur adipiscing elit,
						</h2>
						<button className="button" type="button" name="watch-demo">Watch Demo</button>
					</div>
				</section>

				{/* Astro */}
				<section className="astro">
					<div className="container">
						<article>
							<h2>Section Title</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lacus id dolor dictum volutpat. Donec id lorem
							nec lorem facilisis tempus. In commodo sapien sed nulla mattis, in auctor dolor varius. Vivamus dignissim ac tortor
							commodo fringilla. In cursus est eget lacus scelerisque congue. Aenean vel finibus nulla. Etiam suscipit metus non
							gravida venenatis. Quisque vitae volutpat lorem. Nullam aliquam ante nisi, vel egestas erat bibendum a. Nam eu
							nulla nisl.</p>
						</article>
						<div className="img-container">
							<img src={astroImg} alt="astro-mascot-image"/>
						</div>
					</div>
				</section>

				{/* Blue Section */}
				<section className="blue-section">
					<h2>Lorem ipsum dolor sit amet, consectetur
					<br/>
					adipiscing elit</h2>
					<article className="article">
						<section>
							<span>EYEBROW</span>
							<h3>Lorem ipsum dolor sit amet,
							consectetur adipiscing</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed doad. dolor sit.</p>
						</section>
						<section>
							<span>EYEBROW</span>
							<h3>Lorem ipsum dolor sit amet,
							consectetur adipiscing</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed doad. dolor sit.</p>
						</section>
						<section>
							<span>EYEBROW</span>
							<h3>Lorem ipsum dolor sit amet,
							consectetur adipiscing</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed doad. dolor sit.</p>
						</section>

					</article>
				</section>

				{/* Learn More Section */}
				<section className="learn-more">
					<div className="container">
						<article className="article-container">
							<section className="left">
								<div className="img-container">
									<img className="img-1" src={img1} alt="two-woman-lookin-at-laptop"/>
								</div>
								<div className="info-container">
								<span>EYEBROW</span>
									<h3>Lorem ipsum dolor sit amet,
									consectetur adipiscing</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
									dolor sit amet, consectetur adipiscing elit, sed doad. dolor sit.</p>
								</div>
							</section>
							<aside className="right">
								<section>
								<div className="img-container">
									<img className="img-2" src={img2} alt="woman-using-cellphone"/>
								</div>
								<div className="info-container">
								<span>EYEBROW</span>
									<h3>Lorem ipsum dolor sit amet,
									consectetur adipiscing</h3>
								</div>
								</section>
								<section>
								<div className="img-container">
									<img className="img-3" src={img3} alt="laptop-on-table"/>
								</div>
								<div className="info-container">
								<span>EYEBROW</span>
									<h3>Lorem ipsum dolor sit amet,
									consectetur adipiscing</h3>
								</div>
								</section>
								<section>
									<div className="img-container">
										<img className="img-4" src={img4} alt="three-people-studying"/>
									</div>
									<div className="info-container">
									<span>EYEBROW</span>
										<h3>Lorem ipsum dolor sit amet,
										consectetur adipiscing</h3>
									</div>
								</section>
							</aside>
						</article>
						<button className="button" type="button" name="learn-more">Learn More</button>
					</div>
				</section>

				{/* Einstein Section */}
				<section className="einstein-section">
					<div className="container">
					<div className="img-container">
							<img src={einsteinImg} />
						</div>
						<article>
							<h2>Section Title</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lacus id dolor dictum volutpat. Donec id lorem
							nec lorem facilisis tempus. In commodo sapien sed nulla mattis, in auctor dolor varius. Vivamus dignissim ac tortor
							commodo fringilla. In cursus est eget lacus scelerisque congue. Aenean vel finibus nulla. Etiam suscipit metus non
							gravida venenatis. Quisque vitae volutpat lorem. Nullam aliquam ante nisi, vel egestas erat bibendum a. Nam eu
							nulla nisl.</p>
						</article>
					</div>
				</section>

				{/* Watch Demo Section */}
				<section className="watch-demo-section">
					<div className="container">
						<div className="top">
							<h2>Lorem Ipsum dolor sit amet</h2>
							<div className="btns">
								<button className="button" type="button" name="watch-demos">Watch demos</button>
								<button className="white-button" type="button" name="learn-more"><span>Learn more</span> <i class="fas fa-chevron-right"></i></button>
							</div>
						</div>
						<div className="img-container">
							<img src={productImg} alt="sales-force-product-img"/>
						</div>
					</div>
				</section>

			</main>

			{/* Footer */}
			<footer>
				<div className="container">
					<div className="top">
							<h3>BUILT ON</h3>
							<div className="img-container">
								<img src={logo} />
							</div>
						</div>
						<p>For futher questions, contact:</p>
						<div className="personal-info">
							<h3>KEVIN WANG</h3>
							<span>Software Engineer</span>
							<a href="mailto: email@salesforce.com">email@salesforce.com</a>
						</div>
						<p>Powered by Q Branch</p>
				</div>
			</footer>


		</div>
	);
}


export default App;