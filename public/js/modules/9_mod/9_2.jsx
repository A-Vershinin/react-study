/*
Модифицируйте предыдущую задачу. Пусть теперь есть чекбокс, по нажатию на который появляется инпут для
редактирования. То есть, если чекбокс отмечен - инпут есть, а если не отмечен - его нет.
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
		return (
			<div className="container">
				<div>
					<span>Имя юзера: {this.state.name}</span>
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