class App extends React.Component {
	render() {

		const show = false;
		let newStr;
		if (show) {
			newStr = <p>Текст если true</p>
		} else {
			newStr = <p>Текст если false</p>
		}

		return (
			<div>
				{newStr}
			</div>
		)
	}
}
export default App;