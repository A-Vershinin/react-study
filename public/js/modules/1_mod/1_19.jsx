// Сделайте метод, который параметром принимает 2 целых числа, а возвращает массив, заполненный
// числами из этого промежутка. Например, если передать ему 1 и 5, то получим массив [1, 2, 3, 4, 5].
// Сделайте также метод, который параметром будет получать массив и возвращать его сумму.
// С помощью этих методов в первом абзаце выведите сумму чисел от 1 до 10, во втором
// от 1 до 20, в третьем от 1 до 30.

class App extends React.Component {
	constructor() {
		super();
	}
	createArr(min, max) {
		if (max > min) {
			let arr = [];
			for (let i = min; i <= max; i++) {
				arr.push(i);
			}
			return arr;
		} else {
			console.log("Введены неверные значения");
		}
	}

	getSumaArr(arr) {
		return arr.reduce((temp, elem) => temp + elem);
	}


	render() {

		return (
			<div className="container">
				<p>{this.getSumaArr(this.createArr(1, 10))}</p>
				<p>{this.getSumaArr(this.createArr(1, 20))}</p>
				<p>{this.getSumaArr(this.createArr(1, 30))}</p>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.querySelector("#app")
);
export default App;

