// Пусть в методе render дан массив с числами. Если сумма элементов этого массива меньше 10 -
// выведите эти элементы каждый в своем теге span. Если же сумма больше или равна 10 -
// выведите на экран абзац с текстом 'сумма слишком велика'.

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		const arr = [1, 2, 3, 4, 5];
		let sum = arr.reduce((a, b) => a+b);

		let number = null;
		if (sum >= 10) {
			number =  <p>Сумма слишком велика</p>
		} else {
			number = arr.map(function (elem, index) {
				return <span key={index}>{elem}</span>
			});
		}

		return (
			<div className="container">
				<p>{number}</p>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);
export default App;