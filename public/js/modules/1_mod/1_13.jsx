// Пусть в методе render дан массив с числами. Выведите элементы с положительными
// числами в теге b, а с отрицательными - в теге i.
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const arr = [1, 2, 3, -4, 5, -7, 10, -3];
		const list = arr.map(function (elem, index) {
			let text = null;
			if (elem >= 0) {
				text = <b>{elem}</b>
			} else {
				text = <i>{elem}</i>
			}
			return <div key={index}>{text}</div>
		});

		return (
			<div className="container">
				{list}
			</div>
		);
	}
}
export default App;
