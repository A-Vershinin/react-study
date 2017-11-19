/*
Дан стейт с именем юзера. Выведите это имя в абзаце. Под абзацем сделайте инпут, с помощью которого можно будет
поредактировать имя юзера.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {name: 'Коля', value: " "}
	}

	handleInputChange(event) {
		this.setState({value: event.target.value});
		this.setState({name: event.target.value});
	}

	render() {
		return (
			<div className="container">
				<p>Имя юзера: {this.state.name}</p>
				<input value={this.state.value} onChange={this.handleInputChange.bind(this)} />
			</div>
		);
	}
}
export default App;