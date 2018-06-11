import React, { Component } from 'react';

function handleClick() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = handleClick.bind(this);
  }

  render() {
    const comments = this.state.isOpen && (
      <div className='comments__content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequatur
          cupiditate delectus dicta dolore eius eos, esse illo incidunt inventore itaque maxime
          molestiae molestias mollitia nemo nisi nostrum numquam perferendis placeat praesentium
          quis quod ratione reprehenderit tempora, tempore voluptatem!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi cupiditate,
          dolorum ducimus enim incidunt ipsam iusto libero maiores minus modi nam nisi nulla
          omnis praesentium quas repudiandae sed tenetur?
        </p>
      </div>
    );
    return (
      <div className='comments'>
        <div className='comments__title'>
          <h2>Comments <span>({this.props.count})</span></h2>
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'hide comments' : 'open comments'}
          </button>
        </div>
        {comments}
      </div>
    );
  }
}

export default Comments;