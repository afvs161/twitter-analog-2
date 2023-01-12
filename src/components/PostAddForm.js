import React from 'react';

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
			<form className='form-inline d-flex'>
				<input type='text' className='form-control mx-1' placeholder="what's in your mind" />
				<button type='button' className='btn btn-primary mx-1'>
					tweet
				</button>
			</form>
		)
  }
}