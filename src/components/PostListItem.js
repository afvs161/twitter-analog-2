export default function PostListItem({
	tweet,
	bookmark,
	like,
	onBookmark,
	onDelete,
	onLike,
}) {
	return (
		<div>
			<li className='list-group-item d-flex justify-content-between'>
				<span className='h5'>{tweet}</span>
				<div className='btn-group'>
					<button
						type='button'
						className='btn btn-primary'
						onClick={onBookmark}
					>
						<i className={`fa fa-star${bookmark ? ' yellow' : ''}`}></i>
					</button>
					<button type='button' className='btn btn-danger' onClick={onDelete}>
						<i className='fa fa-trash'></i>
					</button>
					<button type='button' className='btn btn-light' onClick={onLike}>
						<i className={`fa fa-heart${like ? ' red' : ''}`}></i>
					</button>
				</div>
			</li>
		</div>
	)
}
