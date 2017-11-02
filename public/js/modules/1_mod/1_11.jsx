class App extends React.Component {

	getNum1() {
		return 1;
	}
	getNum2() {
		return 2;
	}

	render() {

		const result = this.getNum1() + this.getNum2();
		return (
			<div>
				Результат вычисления {result}
			</div>
		)
	}
}
export default App;