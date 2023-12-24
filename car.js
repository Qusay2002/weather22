import React from "react";

class car extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"bmw",
            color:"blue",
            year:"2002"
    }
    }
    chan=()=>{
        this.setstate({brand:"ford",year:"1990",color:"black"})
    }

    render(){
        return(
            
        )
    }
}