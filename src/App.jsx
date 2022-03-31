import React from "react"
import data from "./component/data"
import Images from "./assets/logo.jpg"
import "./style.css"
export default class App extends React.Component {
    state = {
        data: data,
        cart:[],
    }

    handleCart=(e,i)=>{
        var parent=e.target.parentElement
        var inp=parent.querySelector('#quantity').value
        console.log(inp);

        var filterdata=this.state.cart.filter((ele)=>{
            return ele.pname==inp
            
        })

        if(filterdata.length==0){

        this.state.data.map((element,index)=>{

            if(index==i){

                this.setState({

                    cart:[...this.state.cart,{...element,count:inp}]

                })                      
            }
            console.log(this.state.cart);

        })
    }
    else{

        var newCart=this.state.cart.map((ele)=>{
            if(ele.pname==inp){
                return({
                    ...ele,count:ele.count+1
                })
            }
            else{
                return ele
            }
        })
        this.setState({
            cart:newCart
        })
    }
    }
    
    Del=(i)=>{
        var Cart=this.state.cart
        Cart.splice(i,1)
        this.setState({
            cart:Cart
        })
    }

    Add=()=>{
        
    }

    
    // printCart=(e)=>{
        
    // }
    render() {
        return (
            
<div>
            <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  <img src={Images} className="logo"/>
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

        {this.state.cart.map((obj)=>{
            return(

            <div className="mains" >
            <img src={obj.src} alt="" className="imgs" />
            <h5 className="head">{obj.pname}</h5>
            <p className="price">{obj.price}</p>
            <p>{obj.count}</p>

        <button type="button" class="btn btn-danger" style={{width:"15%",height:"40px",margin:"20px 10px"}}  onClick={this.Del} >Delete</button>


            </div>



            )
        })}

        
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        {/* <button onClick={this.Add}>Sum</button> */}


      </div>
    </div>
  </div>
</div>
      
                </nav>



            <div className="main">
                

                
                



            

                {this.state.data.map((obj, i) => {
                    return (
                        <div key={i}>
                            {/* <img src={obj.src}/> */}
                           
                        <div className="">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={obj.src} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{obj.pname}</h5>
                                    <p className="card-text">{obj.para}</p>
                                    <img src={obj.star} alt="" />
                                    <p className="card-text">{obj.price}</p>

                                    <a href="#" class="btn btn-primary" onClick={(e)=>{this.handleCart(e,i)}}>Add Cart</a>
                                    {/* <button onClick={()=>{this.Add(i)}}>Add</button> */}
                                    {/* <h1>{this.state.Count}</h1> */}

                                    <input type="number" id="quantity" name="quantity" min="-100" max="100" className="input"/>
                                    
                                </div>
                            </div>

                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}