import React, { Component } from "react";
import CourseForm from "./components/courseForm";
import CourseList from "./components/courseList";
import Nav from "./components/courseNav";


class App extends Component {
  state={
    courses:[],
    current:''
  }



// update input
updateInput=(e)=>{
this.setState({
  current : e.target.value 
})
}
// add course
addCourse=(e)=>{
  e.preventDefault();
 let current=this.state.current;
let courses=this.state.courses;
courses.push({name:current})
this.setState({
  courses,
  current:''
})
}
// deleteItem
deleteItem = (index)=>{
  let courses=this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses
  })
  // if no item
 
  let coursesLength= courses.length;
  const courseList=coursesLength ?('') :(
    <p>there is no item</p>
  )
}
// editCourse
editCourse=(index,value)=>{
  let courses=this.state.courses;
  let course=courses[index];
  course['name']=value;
  this.setState({
    courses
  })
}
  render(){
  const {courses}=this.state;
  let coursesLength= courses.length;
  const courseList=coursesLength ?(
    courses.map((course,index)=>{
      return <CourseList  details={course} key={index} index={index} deleteItem={this.deleteItem}   editCourse={this.editCourse}/> 
      }  ) 
  ) :(
    <p className="noitem" >there is no item</p>
  )
    return (
      <section className="App">
       <Nav/>
       <CourseForm current={this.state.current} updateInput={this.updateInput} addCourse={this.addCourse}/>
        <ul>{courseList}</ul>
      </section>
    )
  }
}

export default App;
