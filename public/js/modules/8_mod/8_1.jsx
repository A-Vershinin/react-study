/*
Пусть в стейте хранится массив с юзерами. У каждого юзера есть имя, фамилия и возраст. Выведите всех юзеров на
экран с помощью цикла. Сделайте так, чтобы отображением юзера на экран занимался отдельный компонент.
*/
class User extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>{this.props.name} {this.props.surname} {this.props.age}</p>
			</div>
		)
	}
}



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [
				{name: 'Коля', surname: 'Иванов', age: 25},
				{name: 'Вася', surname: 'Петров', age: 30},
				{name: 'Петя', surname: 'Сидоров', age: 30},
			]
		}
	}

	render() {

		const users = this.state.users.map((elem, index) => {
			return <User key={index} name={elem.name} surname={elem.surname} age={elem.age}/>
		});

		return (
			<div className="container">
				{users}
			</div>
		);
	}
}
export default App;