/*
Переделайте предыдущую задачу так, чтобы под списком появилась кнопочка, по нажатию на которую
в конец списка будет добавляться элемент с текстом 'пункт'.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
		this.addItem = this.addItem.bind(this);
	}

	addItem() {
		this.state.items.push("Пункт");
		this.setState({items: this.state.items});
	}

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});

		return (
			<div className="container">
				<ul>{list}</ul>
				<button onClick={this.addItem}>добавить</button>
			</div>
		);
	}
}
export default App;