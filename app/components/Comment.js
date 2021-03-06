import React from 'react';
import unixTimeToString from './util.js';

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <a href="#">{this.props.author.fullName}</a>{this.props.children}
          <br /><a href="#">Like</a> · <a href="#">Reply</a> · {this.props.postDate.toLocaleString()}
        </div>
      </div>
    )
  }

  <Comment author="Someone Else" postDate="20 hrs"> hope everything is ok!</Comment>


}
