import React from 'react';

class VideoContentInner extends React.Component{

  renderItem() {
    return (
      this.props.items.map(( item, index )  => {
        console.log(item);
        return (
          <div key={index}>
            <h2>{item.snippet.title}</h2>
            <p>{item.snippet.description}</p>
          </div>
        );
      })
    );
  }

  render() {
    console.log(this.props.items);
      return(
      <article>
        {this.renderItem()}
      </article>
    )
  }
}

export default VideoContentInner;