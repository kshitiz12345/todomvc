import React, { StrictMode } from 'react';
import './App.css';
import DataList from './components/DataList/DataList';
import InputBox from './components/InputBox/InputBox';
import Data from './Data';
import FormButton from './components/FormButton/FormButton';

class App extends React.Component {
  static MAX_COUNT = 100;

  constructor() {
    super()
    const data = new Data()
    this.state = {
      title: data.title,
      count: data.count,
      tag : "",
      dataList: []
    }
    this.numberTextBoxEvent = this.numberTextBoxEvent.bind(this)
    this.titleTextBoxEvent = this.titleTextBoxEvent.bind(this)
    this.addButtonClicked = this.addButtonClicked.bind(this)
    this.containerClicked = this.containerClicked.bind(this);
    this.populateList = this.populateList.bind(this)
    this.tagEvent = this.tagEvent.bind(this);
  }

  populateList(count, currentDataList=[]) {
    const dataList = []
    for(let i=0; i<count;i++) {
      const tag = Math.randomString()
      dataList.push(<DataList title={this.state.title} index={i+1} key={tag} tag={tag}
                   date={this.state.date} 
                  ></DataList>)
    }
    
    performance.trigger();
    this.setState({
      dataList: [...currentDataList, ...dataList]
    });
  
  }
  numberTextBoxEvent(event) {
    let count = parseInt(event.target.value);
    count = (count <= App.MAX_COUNT) ? count : App.MAX_COUNT;
    this.populateList(count);
    this.setState({
      count: count
    });
  }

  titleTextBoxEvent(event) {
    const title = event.target.value;
    this.setState({
      title: title
    });
    this.populateList(this.state.count);
  }


  addButtonClicked(event) {
    this.populateList(this.state.count, this.state.dataList);
  }

  containerClicked(event) {
    if(event.target.type === "button") {
      const elem = event.target.parentElement.parentElement;
      const tag = (elem.getAttribute("tag"));
      const dataList = this.state.dataList.filter(data => (data.props.tag) !== tag);
      performance.trigger();
      this.setState({
        dataList : dataList
      })
    }
  }

  tagEvent(event) {
    if(event.target.value.length) {
      const dataList = this.state.dataList.filter(data => {
        return (data.props.tag.includes(event.target.value))
      });
      performance.trigger();
      this.setState({
        dataList : dataList
      })
    }  else{
      this.populateList(this.state.count);
    }   
      
  }

  

  render() {
   
   return (
    <StrictMode>
      <div className="container">
        
     <form ID="react-form">
       <InputBox onKeyUp={this.titleTextBoxEvent} type="text"  label="Title" ></InputBox>
       <br/>
       <div className="tag_count">
        <InputBox onKeyUp={this.numberTextBoxEvent} type="number" label="Enter Count" max="100"></InputBox>
        <InputBox onKeyUp={this.tagEvent} type="text" label="Search by Tag" max="100"></InputBox>
       </div>
       </form>
       <br/>
       <div onClick={this.containerClicked} id="react-data-list">
        {this.state.dataList}
       </div>
       <FormButton label="Add" onClick={this.addButtonClicked} type="button" variant="primary" id="react-add-button"></FormButton>
     
     
     </div>
     </StrictMode>
     
   ) 
  }
}
export default App;
