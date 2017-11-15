class App extends React.Component {
	constructor() {
		super();
		this.state = {
			select: ["usd", "ua", "evro"],
			course: [{"usd": 1, "ua": 26, "evro": 0.9}],
			valueSelect1: 0,
			valueSlect2: 0,
			value: "",
			rez: 0
		};
	}

	handleChange(event) {
		this.state.value = event.target.value;
		this.setState({value: this.state.value});
	}

	handleSelectChange1(event) {
		this.setState({valueSelect1: event.target.value});
	}

	handleSelectChange2(event) {
		this.setState({valueSelect2: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const val1 = this.state.select[parseInt(this.state.valueSelect1)];
		const val2 = this.state.select[parseInt(this.state.valueSelect2)];
		this.state.rez = (parseFloat(this.state.value) * parseFloat(this.state.course[0][val2]) / (parseFloat(this.state.course[0][val1]))).toFixed(2);
		this.setState({rez: this.state.rez});
	}

	render() {
		const options = this.state.select.map((item, index) => {
			return <option key={index} value={index}>{item}</option>;
		});
		return <div>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<select value={this.state.valueSelect1} onChange={this.handleSelectChange1.bind(this)}>
					{options}
				</select>
				<select value={this.state.valueSelect2} onChange={this.handleSelectChange2.bind(this)}>
					{options}
				</select>
				<input value={this.state.value} onChange={this.handleChange.bind(this)}/>
				<input type="submit"/>
			</form>
			<p>{this.state.rez}</p>
		</div>;
	}
}