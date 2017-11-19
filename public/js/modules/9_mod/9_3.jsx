/*
Модифицируйте предыдущую задачу. Пусть теперь когда на экране есть инпут для редактирования, абзац с
именем должен исчезать.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Коля', valueInput: " ", valueChecked: false}
	}

	handleInputCheckedChange() {
		this.setState({valueChecked: !this.state.valueChecked});
	}

	handleInputChange(event) {
		this.setState({valueInput: event.target.value});
		this.setState({name: event.target.value});
	}

	render() {
		if (this.state.valueChecked) {
			var input = <input value={this.state.valueInput} onChange={this.handleInputChange.bind(this)} />;
		}
		if (!this.state.valueChecked) {
			var string = <p>Имя юзера: {this.state.name}</p>;
		}
		return (
			<div className="container">
				<div>
					{string}
					<input type="checkbox" value={this.state.valueChecked} onChange={this.handleInputCheckedChange.bind(this)} />
				</div>
				{input}
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);
export default App;