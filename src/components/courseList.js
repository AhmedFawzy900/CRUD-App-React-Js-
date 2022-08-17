import React, { Component, Fragment } from "react";


class courseList extends Component {
  
 state ={
  isEdit:false,
 

 }
// render course

  renderCourse=()=>{
   return(
    <li className="item" data-aos="fade-up">
          <span>{this.props.details.name}</span>
          <div className="btns">

          <button className="edit" onClick={()=>this.toggleState()}>Edit</button>
          <button className="delete" onClick={()=>{this.props.deleteItem(this.props.index)}}>Delete</button>
   
          </div>
     </li>
   )
  }
   
  // space
  space=()=>{
     let val =this.props.details.name !=='' ? (this.renderCourse()) : '';
     return val
     
  }
  
  // toggleState
  toggleState=()=>{
   let {isEdit}=this.state;
   this.setState({
    isEdit:!isEdit
   })
  }
  // updateCourseItem
  updateCourseItem=(e)=>{
  e.preventDefault();
  this.props.editCourse(this.props.index,this.input.value);
  this.toggleState(); 
  }
  // render edit form
  updateForm=()=>{
  return(
    <form onSubmit={this.updateCourseItem}  className='item'  data-aos="flip-down">
      <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name} className="updateInput" />

      <button className="updateBtn">update</button>
    </form>
  )
  
  }
  
  render(){ 
    let {isEdit}=this.state;
    return (
    <Fragment>
       {isEdit ? (this.updateForm()) : ( this.space())}
    </Fragment>
    )
  }
}

export default courseList;
