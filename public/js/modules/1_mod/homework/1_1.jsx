// Пусть в методе render дан массив. Выведите каждый элемент этого массива в отдельном абзаце.
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const arr = [1, 2, 3, 4, 5];
		const list = arr.map(function(elem, index) {
			return <p key={index}>{elem}</p>
		});
		return (
			<div className="container">
				{list}
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);


export default App;