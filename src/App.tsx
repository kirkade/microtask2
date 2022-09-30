import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {

    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    let [title,setTitle] = useState('')

    const addMessage = (title:string) => {
        let newMessage = {message:title}
        setMessage([newMessage,...message])

    }

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callback={callbackButtonHandler}/>
            </div>
            <div>
                {message.map((el,index)=>{
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

        </div>
    );
}

export default App;
