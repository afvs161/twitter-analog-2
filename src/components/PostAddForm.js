import React from 'react'

export default class PostAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newTweet: '',
		}
  }
  
  changing = (e) => [
    this.setState({newTweet: e.target.value})
  ]

  newTweet = (e) => {
		e.preventDefault()
		if (this.state.newTweet == null || this.state.newTweet.trim() == "") {
			console.log("can't tweet empty string");
			this.setState({ newTweet: '' })
		} else {
			this.props.newTweet(this.state.newTweet)
			this.setState({newTweet: ''})
		}
	}

	render() {
		return (
			<form className='form-inline d-flex' onSubmit={this.newTweet}>
				<input
					type='text'
					className='form-control mx-1'
          placeholder="what's in your mind"
          onChange={this.changing}
          value={this.state.newTweet}
				/>
				<button type='submit' className='btn btn-primary mx-1'>
					tweet
				</button>
			</form>
		)
	}
}
