/*
В стейте дан массив. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы
под списком появилась кнопочка, по нажатию на которую в начала списка будет добавляться элемент с текстом '!!!'.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
		this.addItem = this.addItem.bind(this);
	}

	addItem() {
		const elem = "!!!";
		this.state.items.unshift(elem);
		this.setState({items: this.state.items});
	}

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});

		return (
			<div className="container">
				<ul>{list}</ul>
				<button onClick={this.addItem}>Add</button>
			</div>
		);
	}
}

export default App;