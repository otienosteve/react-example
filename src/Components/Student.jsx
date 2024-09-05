const Student = (props) => {
  return (
    <div className='col-md-3 pt-5'>
        <div className="card" style={{width: "18rem;"}}>
  <img src={props.std.photo} className="card-img-top" alt="..." style={{height: "15rem"}} />
  <div className="card-body">
    <h5 className="card-title fw-bold"> {props.std.first_name} - {props.std.last_name}</h5>
    <p className="card-text fw-medium">{props.std.email}</p>
    <p className="card-text fw-medium">{props.std.gender}</p>
    <button className='btn btn-primary '> update</button> <button className='btn btn-success'> view</button> <button className='btn btn-danger'> Delete</button>
  </div>
</div>
</div>
  )
}

export default Student