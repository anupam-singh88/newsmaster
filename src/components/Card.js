import React, { Component } from 'react'

export default class Card extends Component {
	render() {
		let { imgUrl, title, imgDesc, source, newsUrl } = this.props;
		return (
			<>
				<div className="card mb-3" style={{ maxWidth: "540px", }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={imgUrl} className="img-fluid rounded-start" alt="..." style={{ height: '270px' }} />
						</div>
						<div className="col-md-8">
							<div className="card-body" style={{ height: '270px' }}>
								<h5 className="card-title">{title}</h5>
								<p className="card-text">{imgDesc}</p>

								<a rel="noreferrer" style={{ marginBottom: '16px' }} href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
								<p className="card-text">{source}</p>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
