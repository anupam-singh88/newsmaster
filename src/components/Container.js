import React, { Component } from 'react'
import Card from './Card'
// import Spinner from './Spinner';

export default class Container extends Component {

	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1
		}
	}


	async componentDidMount() {
		let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=33f1b18501d24bd0b10638a3ba52fac7&page=1pageSize=20";
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
	}

	handlePrevClick = async () => {
		console.log("Previous");
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=33f1b18501d24bd0b10638a3ba52fac7&page=${this.state.page - 1}&pageSize=20`;
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles
		})

	}

	handleNextClick = async () => {
		console.log("Next");
		if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

		}
		else {
			let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=33f1b18501d24bd0b10638a3ba52fac7&page=${this.state.page + 1}&pageSize=20`;
			let data = await fetch(url);
			let parsedData = await data.json()
			console.log(parsedData);
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles
			})
		}
	}

	render() {
		return (
			<div className="container">

				<div className="row my-4">
					{this.state.articles.map((element) => {
						return <div className="col-md-6" key={element.url}>
							<Card imgUrl={element.urlToImage ? element.urlToImage : 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'} title={element.title ? element.title.slice(0, 40) : ""} imgDesc={element.description ? element.description.slice(0, 150) : "India News: MUMBAI: In a snub to Trinamool Congress (TMC) chief Mamata Banerjee, whose party is currently engaged in a tussle with the Congress, the S"} source={element.source.name} newsUrl={element.url} />
							{/* <Card imgUrl={element.urlToImage} title={element.title} imgDesc={element.description} source={element.source} /> */}
						</div>
					})}
					<div className="container d-flex justify-content-between">
						<button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
						<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
					</div>


				</div>


			</div>
		)
	}
}
