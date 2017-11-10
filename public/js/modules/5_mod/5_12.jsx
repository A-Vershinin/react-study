/*
Дан следующий стейт:
this.state = {
	hrefs: [
		{href: '1.html', text: 'ссылка 1'},
		{href: '2.html', text: 'ссылка 2'},
		{href: '3.html', text: 'ссылка 3'},
	]
};
Выведите на экран следующее:
<ul>
	<li><a href="1.html">ссылка 1</a></li>
	<li><a href="2.html">ссылка 2</a></li>
	<li><a href="3.html">ссылка 3</a></li>
</ul>
Сделайте 2 инпута и кнопку, по нажатию на которую в список добавится новый li, причем href возьмется из
первого инпута, а текст ссылки - из второго.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {hrefs: [
			{href: '1.html', text: 'ссылка 1'},
			{href: '2.html', text: 'ссылка 2'},
			{href: '3.html', text: 'ссылка 3'},
		], value1: "", value2: ""};
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.addLink = this.addLink.bind(this);
	}

	handleChange1(event) {
		this.setState({value1: event.target.value});
	}
	handleChange2(event) {
		this.setState({value2: event.target.value});
	}


	addLink(event) {
		event.preventDefault();
		const val1 = this.state.value1;
		const val2 = this.state.value2;
		this.state.hrefs.push({href:val1, text:val2});
		this.setState({href: this.state.href});
	}

	render() {
		const list = this.state.hrefs.map((elem, index) => {
			return <li key={index}>
				<a href={elem.href}>{elem.text}</a>
			</li>
		});
		return (
			<div className="container">
				<form action="#" onSubmit={this.addLink}>
					<input type="text"
					       value={this.state.value1}
					       onChange={this.handleChange1}
					/>
					<input type="text"
					       value={this.state.value2}
					       onChange={this.handleChange2}
					/>
					<button type="submit">Отправить</button>
				</form>
				<ul>{list}</ul>
			</div>
		);
	}
}
export default App;