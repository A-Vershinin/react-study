/*
 Дан следующий стейт:
this.state = {
	hrefs: [
		{href: '1.html', text: 'ссылка 1'},
		{href: '2.html', text: 'ссылка 2'},
		{href: '3.html', text: 'ссылка 3'},
	]
};
С помощью this.state.hrefs выведите на экран следующее:
<ul>
	<li><a href="1.html">ссылка 1</a></li>
	<li><a href="2.html">ссылка 2</a></li>
	<li><a href="3.html">ссылка 3</a></li>
</ul>
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			hrefs: [
				{href: '1.html', text: 'ссылка 1'},
				{href: '2.html', text: 'ссылка 2'},
				{href: '3.html', text: 'ссылка 3'},
			]
		};
	}


	render() {
		const list = this.state.hrefs.map((elem, index) => {
			return <li key={index}>
				<a href={elem.href}>{elem.text}</a>
			</li>
		});

		return (
			<div className="container">
				<ul>{list}</ul>
			</div>
		);
	}
}


export default App;