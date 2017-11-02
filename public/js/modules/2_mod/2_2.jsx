class App extends React.Component {
	constructor() {
		super();
	}

	showMessage() {
		alert("hello");
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">Знакомство с React</h1>

				<div className="body">
					<button onClick={this.showMessage}>Show</button>
				</div>
			</div>

		)
	}
}

export default App;