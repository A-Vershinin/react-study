/*
Модифицируйте предыдущую задачу так, чтобы появилась кнопочка, по нажатию на которую каждый раз будет
исчезать первая li из списка (каждый раз по одной, пока li в списке не закончатся).
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem() {
		const elem = "!!!";
		this.state.items.shift(elem);
		this.setState({items: this.state.items});
	}

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});

		return (
			<div className="container">
				<ul>{list}</ul>
				<button onClick={this.removeItem}>Remove</button>
			</div>
		);
	}
}
export default App;