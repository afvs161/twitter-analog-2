import React from 'react'
import AppHeader from './AppHeader'
import PostAddForm from './PostAddForm'
import PostList from './PostList'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ tweet: 'tweet tweet tweet', bookmark: true, like: false, id: 3 },
				{ tweet: 'tweet tweet tweet', bookmark: false, like: true, id: 2 },
				{ tweet: 'tweet tweet tweet', bookmark: true, like: true, id: 1 },
			],
		}
		this.lastTweetId = 3
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
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id)

			const before = data.slice(0, index)
			const after = data.slice(index + 1)

			const newArr = [...before, ...after]

			return {
				data: newArr,
			}
		})
	}

	render() {
		const { data } = this.state
		const postsLength = this.state.data.length
		const likes = data.filter(tweet => tweet.like).length

		return (
			<div className='div-holder'>
				<AppHeader postsLength={postsLength} likes={likes} />
				<PostList
					tweets={data}
					onBookmark={this.onBookmark}
					onDelete={this.onDelete}
					onLike={this.onLike}
				/>
				<PostAddForm />
			</div>
		)
	}
}
