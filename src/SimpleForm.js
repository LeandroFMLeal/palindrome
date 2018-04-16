import React, { Component }  from 'react'
import axios from  'axios'
import './SimpleForm.css'


export default class SimpleForm extends Component {
    state = {
        phrase: "",
    }
    
    handleSubmit(e){
        e.preventDefault()
        let phrase = this.state.phrase
        if(!phrase){
            alert ( 'TYPE SOMETHING' )
        }
        this.getResponse(phrase)
    }

    async getResponse(phrase){
        try {
            const result = await axios.post('http://localhost:8000/palindrome', {phrase: phrase})
            console.log(result)
            this.handleResponse(result)
        }catch(error){
            console.log(error)
        }
        
    }

    handleResponse(result){
        if ( result.data.result === 200 ){
            alert ( 'IS A PALINDROME' )
        }
        if ( result.data.result === 400 ){
            alert ( 'IS NOT A PALINDROME')
        }
    }

    render( ){
        return(
            <form id="simple-form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                    value={this.state.phrase}
                    onChange={e => this.setState({phrase: e.target.value})} />
                <button type="submit">Submit</button>
            </form>
        )
    }
    
}