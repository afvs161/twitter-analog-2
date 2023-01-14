import React from 'react'

export default class AppHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.buttons = [
			{ key: 'all', name: 'All' },
			{ key: 'liked', name: 'Liked' },
		]
	}

	render() {
		const { postsLength, likes, onFilter, currentFilter } = this.props
		const createButtons = this.buttons.map(({ key, name }) => {
			return (
				<button
					type='button'
					key={key}
					className={`btn btn-${
						currentFilter === key ? '' : 'outline-'
					}primary`}
					onClick={() => onFilter(key)}
				>
					{name}
				</button>
			)
		})
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
						onChange={e => {
							this.props.onType(e.target.value)
						}}
					/>
					<div className='btn-group mx-1'>{createButtons}</div>
				</div>
			</div>
		)
	}
}
