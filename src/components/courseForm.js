
import React, { Component } from 'react';

 class courseForm extends Component {

  render() {
    return (
     <form > 
        <input type="text" value={this.props.current} onChange={this.props.updateInput} className="name"></input>
        <button type="" onClick={this.props.addCourse} className="add">add</button>
     </form>

    )
  }
}

export default courseForm;