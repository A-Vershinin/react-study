// import App from "./modules/2_mod/2_1";
/*
 Модифицируйте предыдущую задачу так, чтобы текстом кнопки всегда был следующий цвет, в который покрасится абзац.

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

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);


