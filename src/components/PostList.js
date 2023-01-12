import PostListItem from './PostListItem'

export default function PostList({ tweets, onBookmark, onDelete, onLike }) {
	let tweet = tweets.map(tweet => {
		const { id, ...post } = tweet
		return (
			<div key={id}>
				<PostListItem
					{...post}
          onBookmark={() => onBookmark(id)}
          onDelete={() => onDelete(id)}
					onLike={() => onLike(id)}
				/>
			</div>
		)
	})

	return <ul className='post-list list-group'>{tweet}</ul>
}
