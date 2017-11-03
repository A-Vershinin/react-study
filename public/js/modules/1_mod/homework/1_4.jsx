// Пусть в методе render дан массив. Выведите каждый элемент этого массива в
// отдельной li в теге ul. Сделайте так, чтобы в атрибуты class тегов li записались
// порядковые номера элементов массива, вот так: 'elem0', 'elem1' и так далее.
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const arr = [1, 2, 3, -4, 5, -7, 10, -3];
		const list = arr.map(function (elem, index) {
			return <li className={index} key={index}>{elem}</li>
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