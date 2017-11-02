// Пусть в методе render дано число. Выведите его в абзаце. Сделайте так, чтобы если это число
// положительное, то абзац имел класс 'positive', а если отрицательное - то класс 'negative'.
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const num = -25;
		let name = null;
		num >= 0 ? name = "positive" : name = "negative";

		return (
			<div className="container">
				<p className={name} >{num}</p>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);
export default App;