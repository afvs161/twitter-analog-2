import React from 'react'

export default class AppHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			search: ''
		}
	}

	onSearch = (e) => {
		this.setState({ search: e.target.value })
		this.props.onType(this.state.search)
	}

	render() {
		const { postsLength, likes } = this.props
		return (
			<div className='app-header'>
				<div className='app-info d-flex justify-content-between'>
					<h2>Vosid</h2>
					<p className='mt-2'>
						tweets: {postsLength}, likes: {likes}
					</p>
				</div>

				<div className='search-panel d-flex'>
					<input
						type='text'
						className='form-control mx-1'
						placeholder='search tweet'
						onChange={this.onSearch}
					/>
					<div className='btn-group mx-1'>
						<button type='button' className='btn btn-primary'>
							All
						</button>
						<button type='button' className='btn btn-outline-primary'>
							Liked
						</button>
					</div>
				</div>
			</div>
		)
	}
}
