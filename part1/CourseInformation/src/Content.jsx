import Part from "./Part"

const Content = (props)=>{
    return (
        <div>
            <Part part={props.part[0].name} exercise={props.part[0].number}></Part>
            <Part part={props.part[1].name} exercise={props.part[1].number}></Part>
            <Part part={props.part[2].name} exercise={props.part[2].number}></Part>
        </div>
    )
}

export default Content