class App extends React.Component {

	getText() {
		return <p>Текс с абзаца</p>
	}

	render() {

		const newText = this.getText();
		return (
			<div>
				{newText}
			</div>
		)
	}
}
export default App;