import React, {Component} from 'react'
import Header from  './Header'
import Footer from './Footer'
import JSON from './db.json'
import NewsList from './NewsDisplay';


class Home extends Component{
    constructor(){
        super();
        this.state={
          news: JSON,
          filteredNews: JSON
        }

 }

 /*
      var b = [0,1,2,3,7,8,9,66,44,55]; 

      b.filter ((data)=>{return data>5});

      //aaplying the same concept in the below filterNews method:::----------
 */

 filterNews(keyword) {

   const output=this.state.news.filter((data) => {

    return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
   })
   this.setState({filteredNews:output})

 }


  render(){

    return(
      <React.Fragment>
 <Header userText={ (userInput) => {this.filterNews(userInput) } }/>
  <h1> React App   </h1>
<NewsList newsdata={this.state.filteredNews}/>

<Footer year="2020" month="September"/>
</React.Fragment>


  )
  }
}





export default Home;