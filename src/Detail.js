import { Component } from "react";


class Detail extends Component{
    render(){
    const {userData}=this.props
    const storeData=userData.map((k,i)=>{
        return(
            
            <div className="card-div" key={i}>
                <img src={k.image} alt="shop"/>
                <div className="card-content">
                <p><strong>{k.name}</strong></p>
                <p><b>{k.rating}</b></p>
                <p>{k.des}</p>
                <p>{k.address}</p>
            </div>
            </div>
        )
    })
    return(
        <div className="card">
            <div className="row">
               {storeData}
            </div>   
        </div>
    )
}
}
export default Detail;