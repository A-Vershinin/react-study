/*
Переделайте предыдущую задачу так, чтобы под списком появилась кнопочка, по нажатию на которую
в конец списка будет добавляться элемент с текстом 'пункт'.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
	}

	addItem = () => {
		const numbers = [...this.state.items];
		numbers.push('пункт');
		this.setState({items: numbers});
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
