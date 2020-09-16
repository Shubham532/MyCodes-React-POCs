import React ,{Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(props){

        super();
        this.state={
              title: 'UI Academy POC-1',
              info: 'Training on React Js Library - Conducted By TCS-Interactive '  ,
              keyword: 'User Text Here' 
           
        }
    }
    handleChange= (event) =>{

      //  console.log(event.target.value);
        this.setState({keyword:event.target.value ? event.target.value: "User Text Here"})
        this.props.userText(event.target.value)
        }
    
    
    render(){
        
        return(
            <React.Fragment>
                <div className="header-part">
               <div className="logo"> {this.state.title}
             
                <center> 
                           <p >{this.state.info}</p>
                </center>
                </div>
                <center>
                <input type="text" placeholder="Enter User Input Text here " onChange={this.handleChange}/></center>
                <center className="user-text">{this.state.keyword}</center>
  
                <hr/>
                </div>
                </React.Fragment>
        )
        }


}


export default Header;