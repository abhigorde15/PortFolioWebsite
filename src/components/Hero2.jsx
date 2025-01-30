import "./Hero2Style.css"
const Hero2 =({heading,text})=>{
  return (
    <div className="hero2-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>

    </div>
  )
}
export default Hero2;