import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Loader from './Components/Loader';
import Counter from './Components/Counter';
import Lowertext from './Components/Lowertext';

const MAXX = process.env.REACT_APP_MAX_VALUE || 1000;
export class App extends Component {

    constructor(props) {
      super(props)

      this.state = {
          value : 1,
          isLoading:false
      }
      this.increment = this.increment.bind(this)
      this.decrement=this.decrement.bind(this)
      this.changeValue=this.changeValue.bind(this)
      this.updateValue=this.updateValue.bind(this)

    }

    componentDidMount(){
      axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json")
      .then(response => {
          if(response.data !== null) this.setState({value:response.data})
          else this.setState({value:1})
      })
      .catch(error => {
          console.log(error)
      })
    }

    updateValue = async ()=>{
        this.setState({isLoading:true})
        try {
          let body = {
            "meghna__testing":this.state.value
          }
          let res = await axios.put("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",body)
          console.log(res)
        } catch (error) {
          console.log(error)
        }

        this.setState({isLoading:false})
    }

    increment(){
      this.setState((prevSate)=>{
        return {value: Math.min(prevSate.value+1, MAXX)}
      })
      this.updateValue()
    }

    decrement(){
      this.setState((prevSate)=>{
        return {value:prevSate.value-1}
      })
      this.updateValue()
    }

    changeValue(event){
      let  num = parseInt(event.target.value)
      this.setState({value:Math.min(num, MAXX)})
      this.updateValue()
    }

    render() {
      return (
        <div>
            <div className="main">

              <div style={{minHeight:'50px'}} >
                {this.state.isLoading && <Loader />}
              </div>

              <div>
                <Counter name={this.state.value} increment={this.increment} decrement={this.decrement} changeValue={this.changeValue} />
              </div>

              <div>
                <Lowertext name={this.state.value}/>
              </div>
            </div>
          
      </div>
      )
    }
}

export default App