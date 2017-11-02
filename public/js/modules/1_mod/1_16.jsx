// Дан массив цветов, например ['red', 'blue', 'green']. Выведите эти цвета в виде
// списка ul так, чтобы каждая li покрасилась в тот цвет, который в ней написан.
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const arr = ['red', 'blue', 'green'];
		const list = arr.map(function (elem, index) {
			return <li style={{color: elem}} key={index}>{elem}</li>
		});

		return (
			<div className="container">
				<ul>{list}</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);
export default App;