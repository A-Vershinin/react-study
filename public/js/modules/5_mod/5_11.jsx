/*
Модифицируйте предыдущую задачу так, чтобы в конце каждой li появилась кнопка для удаления этого пункта списка.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {arr: ["Вася", "Коля", "Петя"], value: ""};
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	removeItem(index) {
		this.state.arr.splice(index, 1);
		this.setState({arr: this.state.arr});
	}

	addItem(event) {
		event.preventDefault();
		this.state.arr.push(this.state.value);
		this.setState({arr: this.state.arr});
		this.setState({value: ""});
	}

	render() {
		const list = this.state.arr.map((elem, index) => {
			return <li key={index}>
				<span style={{"marginRight": "20px"}}>{elem}</span>
				<button onClick={this.removeItem.bind(this, index)}>Удалить</button>
			</li>
		});
		return (
			<div className="container">
				<form action="#" onSubmit={this.addItem}>
					<input type="text"
					       value={this.state.value}
					       onChange={this.handleChange}
					/>
					<button type="submit">Отправить</button>
				</form>
				<ul>{list}</ul>
			</div>
		);
	}
}
export default App;