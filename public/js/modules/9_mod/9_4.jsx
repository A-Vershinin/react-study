/*
Модифицируйте предыдущую задачу. Пусть теперь окончанием редактирования считается потеря фокуса инпутом.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Коля', valueInput: " ", valueChecked: false}
	}

	handleInputCheckedChange() {
		this.setState({valueChecked: !this.state.valueChecked});
	}
	handleInputBlur(event) {
		this.state.valueInput = event.target.value;
		this.state.valueChecked = !this.state.valueChecked;
		this.setState({name: event.target.value});
		this.setState({valueChecked: this.state.valueChecked});
	}
	handleInputChange(event) {
		this.setState({valueInput: event.target.value});
		this.setState({name: event.target.value});
	}

	render() {
		if (this.state.valueChecked) {
			var input = <input value={this.state.valueInput} onChange={this.handleInputChange.bind(this)}
			                   onBlur={this.handleInputBlur.bind(this)}/>;
		}
		if (!this.state.valueChecked) {
			var string = <p>Имя юзера: {this.state.name}</p>;
		}
		return (
			<div className="container">
				<div>
					{string}
					<input type="checkbox" checked={this.state.valueChecked} onChange={this.handleInputCheckedChange.bind(this)} />
				</div>
				{input}
			</div>
		);
	}
}
export default App;