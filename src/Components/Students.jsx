import Student from './Student'
const Students = (props) => {
  return (
    <div className='container' style={{width:"100vw"}}>
      <div className='row'>
        {props.allStudents?.map((std => <Student std={std} /> ))}
        </div>
    </div>
  )
}

export default Students