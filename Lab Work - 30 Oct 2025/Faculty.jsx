function Faculty(props) {
  return (
    <div>
      <h2>Faculty name : {props.facultyName}</h2>
      <h2>Subject :{props.subject} </h2>
      <h2>Experience : {props.experience}</h2>
    </div>
  );
}
export default Faculty;
