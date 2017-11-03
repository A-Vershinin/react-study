// Пусть в методе render дан массив с числами. Выведите каждый элемент этого массива в
// отдельном абзаце. Сделайте так, чтобы, если число четное - абзац был красного цвета,
// а если нечетного - то зеленого.
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const arr = [1, 2, 3, -4, 5, 6, -7, 10, -3];

		const list = arr.map(function (elem, index) {
			let color = null;
			if (elem % 2 === 0) {
				color = "red";
			} else {
				color = "green";
			}
			return <p key={index} style={{"backgroundColor": color}}>{elem}</p>
		});

		return (
			<div className="container">
				{list}
			</div>
		);
	}
}

export default App;
