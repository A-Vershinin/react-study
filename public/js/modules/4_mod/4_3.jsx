/*
Переделайте предыдущую задачу так, чтобы появилась кнопочка, по нажатию на которую каждый раз будет исчезать
последняя li из списка (каждый раз по одной, пока li в списке не закончатся).
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem() {
		const items = this.state.items.slice(0, -1);
		this.setState({items: items});
	}

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});

		return (
			<div className="container">
				<ul>{list}</ul>
				<button onClick={this.removeItem}>Удалить</button>
			</div>
		);
	}
}


export default App;