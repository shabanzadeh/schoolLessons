import { useState } from 'react';
import './App.css';

function App() {
  const[courseList, setCourseList] = useState([])
  const [cours, setCourse] = useState("")

  const addCourse=()=>{
    const newCourseList = [...courseList, cours]
    setCourseList(newCourseList)
    console.log(courseList)
  }

  const handelChange=(event)=>{
    return setCourse(event.target.value)

  }
  return (
    <div className="App">
      <div className='add-course'>
        <input type='text'onChange={handelChange}></input>
        <button onClick={addCourse}>Add course</button>
      </div>
      <div className='list'></div>
      {courseList.map((course)=>{
        return (<div>
          <h1>{cours}</h1> 
          <button>X</button>

      </div>)
    })}
      
    </div>
  );
}

export default App;
