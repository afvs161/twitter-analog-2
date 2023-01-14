import React from 'react'
import AppHeader from './AppHeader'
import PostAddForm from './PostAddForm'
import PostList from './PostList'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ tweet: 'tweet three', bookmark: true, like: false, id: 3 },
				{ tweet: 'tweet two', bookmark: false, like: true, id: 2 },
				{ tweet: 'tweet one', bookmark: true, like: true, id: 1 },
			],
			search: '',
			filter: 'all',
		}
		this.lastTweetId = 4
	}

	onBookmark = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id)
			const oldItem = data[index]
			const newItem = { ...oldItem, bookmark: !oldItem.bookmark }
			const before = data.slice(0, index)
			const after = data.slice(index + 1)
			const newArr = [...before, newItem, ...after]
			return {
				data: newArr,
			}
		})
	}

	onLike = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id)
			const oldItem = data[index]
			const newItem = { ...oldItem, like: !oldItem.like }

			const before = data.slice(0, index)
			const after = data.slice(index + 1)

			const newArr = [...before, newItem, ...after]

			return {
				data: newArr,
			}
		})
	}

	onDelete = id => {
		// this.setState(({ data }) => {
		// 	const index = data.findIndex(element => element.id === id)

		// 	const before = data.slice(0, index)
		// 	const after = data.slice(index + 1)

		// 	const newArr = [...before, ...after]

		// 	return {
		// 		data: newArr,
		// 	}
		// })
		// let newArr = [...this.state.data]
		// newArr = newArr.
		this.setState({ data: this.state.data.filter(s => s.id !== id) })
	}

	newTweet = gotFromForm => {
		const newTweet = {
			tweet: gotFromForm,
			bookmark: false,
			like: false,
			id: this.lastTweetId++,
		}

		this.setState(({ data }) => {
			const newArr = [newTweet, ...this.state.data]
			return {
				data: newArr,
			}
		})
	}

	onType = value => {
		this.setState({ search: value })
	}

	onSearch = (array, value) => {
		if (value.length === 0) {
			return array
		}

		return array.filter(item => {
			return item.tweet.indexOf(value) > -1
		})
	}

	onFilter = e => {
		this.setState({ filter: e })
	}

	applyFilter = (array, filter) => {
		if (filter === 'all') {
			return array
		} else {
			return array.filter(item => item.like)
		}
	}

	render() {
		const { data, search, filter } = this.state
		const postsLength = this.state.data.length
		const likes = data.filter(tweet => tweet.like).length
		const all = this.applyFilter(this.onSearch(data, search), filter)

		return (
			<div className='div-holder'>
				<AppHeader
					postsLength={postsLength}
					likes={likes}
					onType={this.onType}
					onFilter={this.onFilter}
					currentFilter={filter}
				/>
				<PostList
					tweets={all}
					onBookmark={this.onBookmark}
					onDelete={this.onDelete}
					onLike={this.onLike}
				/>
				<PostAddForm newTweet={this.newTweet} />
			</div>
		)
	}
}
