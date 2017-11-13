/*
Дан текстареа и абзац. Сделайте так, чтобы при наборе текста в текстареа он автоматически появлялся в этом абзаце.
*/
class App extends React.Component {
	constructor() {
		super();
		this.state = {valueTextarea: ""};
	}
	handleTextareaChange = (event) => {
		this.setState({valueTextarea: event.target.value});
	};


	render() {

		return (
			<div className="container">
				<form action="#" onSubmit={this.formHandleSubmit}>
					<p>Текст area: {this.state.valueTextarea}</p>
					<textarea value={this.state.valueTextarea} onChange={this.handleTextareaChange} />
				</form>
			</div>
		);
	}
}
export default App;p;