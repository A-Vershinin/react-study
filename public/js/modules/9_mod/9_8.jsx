/*
Модифицируйте предыдущую задачу. Сделайте внутри каждого компонента кнопку, по нажатию на которую имя юзера
поменяется следующим образом: ему в конец запишется '!'.
*/
class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li key={this.props.index}>
				<span style={{marginRight: "20px"}}>Имя юзера: {this.props.name}</span>
				<button onClick={this.props.addText.bind(null, this.props.index)}>Кнопка</button>
			</li>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: ['Коля', 'Вася', 'Петя']
		};
	}
	handleAddText(index) {
		const user = this.state.users;
		user[index] = user[index] +'!';
		this.setState({users: user});
	}

	render() {
		const item = this.state.users.map((elem, index) => {
			return (
				<User index={index} key={index} name={elem} addText={this.handleAddText.bind(this)}/>
			);
		});


		return (
			<div className="container">
				<ul>{item}</ul>
			</div>
		);
	}
}
export default App;