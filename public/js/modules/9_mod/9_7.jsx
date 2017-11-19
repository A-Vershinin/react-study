/*
В родительском компоненте дан стейт с именами юзеров. Выведите в цикле всех этих юзеров на экран с помощью
отдельного компонента User.
*/
class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li key={this.props.index}>
				Имя юзера: {this.props.name}
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

	render() {
		const item = this.state.users.map((elem, index) => {
			return (
				<User index={index} key={index} name={elem}/>
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