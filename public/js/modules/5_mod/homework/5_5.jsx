/*
Дан массив с числами. Выведите этот массив в виде списка ul. Также даны инпут и кнопка. Сделайте так, чтобы в инпут
можно было ввести еще одно число, нажать на кнопку - и это число добавилось в конец списка ul.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {arr: [1, 2, 3, 4, 5, 6], value: ""};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		let numbers = [...this.state.arr];
		numbers.push(this.state.value);
		this.setState({arr: numbers});
	};

	handleChange = (event) => {
		this.setState({value: event.target.value});
	};

	render() {
		const list = this.state.arr.map((elem, index) => {
			return <li key={index}>{elem}</li>
		});

		return (
			<div className="container">
				<form action="#" onSubmit={this.handleSubmit}>
					<input type={"text"}
					       value={this.state.value}
					       onChange={this.handleChange}
					/>
					<button type="submit">Кнопка</button>
				</form>
				{list}
			</div>

		);
	}
}
export default App;