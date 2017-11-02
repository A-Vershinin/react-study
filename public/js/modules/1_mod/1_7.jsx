class App extends React.Component {
	render() {

		const objStyles = {
			color: "red",
			fontSize: 30
		};

		const newColor = "blue";

		return (
			<div>
				<h1 style={objStyles}>Текст с стилями из объекта </h1>
				<h1 style={{color: newColor, fontSize: 30}}>А этот текст с стилями из объекта и крутым цветом</h1>
			</div>
		)
	}
}
export default App;