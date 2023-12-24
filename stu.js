import React from "react";
class Stu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            skincolor:"yellow",
            login:false
        }
    }
    cha=()=>{
        this.setState({skincolor:"Blue",login:!this.state.login})
    }

    toview (){
        if(this.state.login){
            return(<div><h2>hello</h2></div>)
        }else{
            return(<div><h2>Bay</h2></div>)
        }

    }


render()
{
    return(
        <div>
    <button onClick={this.cha}>ok</button>
    {this.toview()}

    <p style={{backgroundColor:this.state.skincolor}}>color</p>
    </div>
    )
    /*
    return(
        <div>
            <h1>{this.props.name}</h1>
            <h2>{this.props.age}</h2>
            <p>{this.props.gpa}</p>
            <span>{this.props.skincolor}</span>
        </div>
    )*/
}




}

export default Stu;