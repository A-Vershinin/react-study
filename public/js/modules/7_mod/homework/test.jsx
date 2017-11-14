class App extends React.Component {
	constructor() {
		super();
		this.state = {value: "", text: []};
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	addItem(event) {
		let date = new Date();
		let newDate = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() );
		let text = this.state.value;
		this.state.text.push({
			time: newDate,
			text: text,
			edit: false
		});
		this.setState({text: this.state.text});
		event.preventDefault();
	}

	deleteItem(index, event) {
		this.state.text.splice(index, 1);
		this.setState({text: this.state.text});
		event.preventDefault();
	}

	editPost(index) {
		this.state.text[index].edit = !this.state.text[index].edit;
		this.setState({
			text: this.state.text
		});
	}

	handleItem(index, event) {
		this.state.text[index]["text"] = event.target.value;
		this.setState({text: this.state.text});
	}

	handleHideInput(index, e) {
		this.state.text[index].text = e.target.value;
		this.state.text[index].edit = !this.state.text[index].edit;
		this.setState({
			text: this.state.text
		});
	}

	editText(index) {
		this.state.text[index].edit = !this.state.text[index].edit;
		this.setState({
			text: this.state.text
		});
	}

	render() {
		const list = this.state.text.map((item, index) => {
			if (!item.edit) {
				var txt = <div className='active'>
					<p key={index}><h1> Заметка {index + 1}</h1>
						<p> {item.time}</p> {item.text} </p>
					<button onClick={this.deleteItem.bind(this, index)}>удалить</button>
					<button onClick={this.editPost.bind(this, index)}>редактировать</button>
				</div>;
			}
			else {
				var input = <input type="text" value={item.text} onChange={this.handleItem.bind(this, index)}
					onBlur={this.handleHideInput.bind(this, index)}
				/>;
			}
			return <div>
				{txt}
				{input}
			</div>;
		});
		return <div>
			{list}
			<form onSubmit={this.addItem.bind(this)}>
				<textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
				<input type="submit"/>
			</form>
		</div>;
	}
}