import React, { StrictMode } from 'react';
import './App.css';
import DataList from './components/DataList/DataList';
import InputBox from './components/InputBox/InputBox';
import TextArea from './components/TextArea/TextArea';
import Data from './Data';
import FormButton from './components/FormButton/FormButton';
import { Container, Jumbotron } from 'react-bootstrap';

class App extends React.Component {
  static MAX_COUNT = 100;
  timeout = null;

  constructor() {
    super()
    const data = new Data();
    this.state = {
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      count: data.count,
      dataList: []
    }
    this.numberTextBoxEvent = this.numberTextBoxEvent.bind(this)
    this.titleTextBoxEvent = this.titleTextBoxEvent.bind(this)
    this.descTextAreaEvent = this.descTextAreaEvent.bind(this)
    this.addButtonClicked = this.addButtonClicked.bind(this)
    this.containerClicked = this.containerClicked.bind(this);
    this.populateList = this.populateList.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
  }

  populateList(count) {
    const dataList = []
    for(let i=0; i<count;i++) {
      dataList.push(<DataList title={this.state.title} index={i+1} key={i+1}
                  description={this.state.description} date={this.state.date} image={this.state.image}
                  ></DataList>)
    }
    
    this.setState({
      dataList: dataList
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

  descTextAreaEvent(event) {
    const description = event.target.value;
    this.setState({
      description: description
    });
    this.populateList(this.state.count);
  }

  addButtonClicked(event) {
    this.populateList(this.state.count + this.state.dataList.length);
  }

  containerClicked(event) {
    if(event.target.type === "button") {
      const elem = event.target.parentElement.parentElement;
      const index = parseInt(elem.getAttribute("index"));
      const dataList = this.state.dataList.filter(data => parseInt(data.key) !== index);
      this.setState({
        dataList : dataList
      })
    }
  }

  onContentChange(event) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      const elem = event.target;
      const index = parseInt(elem.getAttribute("index"));
      const type = (elem.getAttribute("data-type"));
      const text = (event.target.textContent);
      let data = null;
      if(type === "title") {
         data = <DataList title={text} index={index} key={index}
                      description={this.state.description} date={this.state.date} image={this.state.image}
                    ></DataList>;
      } else if(type === "desc") {
        data = <DataList title={this.state.title} index={index} key={index}
                      description={text} date={this.state.date} image={this.state.image}
                    ></DataList>;
      }
      
      if(data) {
        const dataList = [...this.state.dataList];
        dataList[index-1] = data;
        this.setState({
          dataList : dataList
        });
      }
    }, 1000)
    
    
    
  }

  

  render() {
   
   return (
    <StrictMode>
      <div className="container">
        
     <form>
       <InputBox onKeyUp={this.titleTextBoxEvent} type="text"  label="Title"></InputBox>
       <br/>
       <TextArea onKeyUp={this.descTextAreaEvent} type="text" label="Description"></TextArea>
       <br/>
       <InputBox onKeyUp={this.numberTextBoxEvent} type="number" label="Enter Count" max="100"></InputBox>
       <br/>
       <div onClick={this.containerClicked}>
        {this.state.dataList}
       </div>
       <FormButton label="Add" onClick={this.addButtonClicked} type="button" variant="primary"></FormButton>
     </form>
     
     </div>
     </StrictMode>
     
   ) 
  }
}
export default App;
