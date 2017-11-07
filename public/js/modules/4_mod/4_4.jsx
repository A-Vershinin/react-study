/*
Переделайте предыдущую задачу так, чтобы рядом с каждым именем появилась кнопочка,
по нажатию на которую li с этим именем будет удаляться.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
		// this.removeItem = this.removeItem.bind(this);
	}

	removeItem(index) {
		const items = this.state.items.splice(index, 1);
		this.setState({items: this.state.items});
	}

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>
				{item} <button onClick={this.removeItem.bind(this, index)}>Удалить</button>

			</li>;
		});

		return (
			<div className="container">
				<ul>{list}</ul>
			</div>
		);
	}
}


export default App;