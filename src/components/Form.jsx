import "./FormStyle.css"
const Form =()=>{
  return(
    <div className="form" style={{backgroundColor:"black"}}>
     <form action="https://formspree.io/f/xrbkbelg" method="POST"
onSubmit={()=> alert("Successfully Submited Response")}
>
  <label>Your Name</label>
  <input type="text" name="name" required />
  
  <label>Email</label>
  <input type="email" name="email" required />
  
  <label>Subject</label>
  <input type="text" name="subject" required />
  
  <label>Message</label>
  <textarea rows="6" name="message" placeholder="Type your message here" required></textarea>
  
  <button className="btn" type="submit">Submit</button>
</form>
    </div>
  )
}
export default Form;