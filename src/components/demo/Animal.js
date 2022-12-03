import "./Aninal.css"
const Animal = (props)=>{
    return(
        <div className="container">
            <div className="animals">{props.name}</div>
            <div className="animals">{props.age}Month</div>
        </div>
    )
}
export default Animal