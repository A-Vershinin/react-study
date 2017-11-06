/*
В стейте дан массив с юзерами ['Коля', 'Вася', 'Петя']. Сделайте кнопку, по нажатию на которую этот массив
выведется на экран в виде списка ul.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			params: ['Коля', 'Вася', 'Петя'],
			list: ""
		};
		this.getList = this.getList.bind(this);
	}

	getList() {
		const list = this.state.params.map((elem, index) => {
			return <li key={index}>
				<a href="#">{elem}</a></li>
		});
		this.setState({list: list});
	}

	render() {
		return (
			<div className="container">
				{this.state.list}
				<button onClick={this.getList}>Click</button>
			</div>
		);
	}
}
export default App;