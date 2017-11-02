class App extends React.Component {
	render() {
		const newStr = <div>
			<p>А этот текст в теге p</p>
		</div>;

		return (
			<div>{newStr}</div>
		)
	}
}

export default App;