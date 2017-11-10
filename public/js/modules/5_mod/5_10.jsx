/*
Дан массив с именами пользователей. Выведите этот массив в виде списка ul. Также даны инпут и кнопка. Сделайте так,
чтобы в инпут можно было ввести еще одно имя, нажать на кнопку - и это имя добавилось в конец списка ul.
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

	addItem(event) {
		event.preventDefault();
		this.state.arr.push(this.state.value);
		this.setState({arr: this.state.arr});
		this.setState({value: ""});
	}

	render() {
		const list = this.state.arr.map((elem, index) => {
			return <li key={index}>{elem}</li>
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