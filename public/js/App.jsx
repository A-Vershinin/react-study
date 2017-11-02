// import App from "./modules/2_mod/2_1";


// Пока вставляю сюда сам класс для отрисовки
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


