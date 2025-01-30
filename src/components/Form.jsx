import "./FormStyle.css"
const Form =()=>{
  return(
    <div className="form" style={{backgroundColor:"black"}}>
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows="6" placeholder="type your message here" />
        <button className="btn" >Submit</button>
      </form>
    </div>
  )
}
export default Form;