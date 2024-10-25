import {useState} from 'react'
import { TiTick } from "react-icons/ti";
import './App.css';

function App() {
  const[name,ChangeName]=useState('')
  const[email,ChangeEmail]=useState('')
  const[message,ChangeMessage]=useState('')
  const[isComplete,ChangeValue]=useState(true)
  const[success,ChangeView]=useState(false)
  const[nameEmpty,nameEmpytyFunction]=useState(true)
  const[emailEmpty,emailEmpytyFunction]=useState(true)
  const[messageEmpty,messageEmpytyFunction]=useState(true)
  const NameFunction=(event)=>ChangeName(event.target.value)
  const EmailFunction=(event)=>ChangeEmail(event.target.value)
  const MessageFunction=(event)=>ChangeMessage(event.target.value)
  const submitButton=(event)=>{
    event.preventDefault()
    if (name==='' || email==='' || message===''){
      ChangeValue(false)
    }
    else{
      ChangeValue(true)
      ChangeView(true)
    }
    if (name===''){
      nameEmpytyFunction(false)
    }
    else{
      nameEmpytyFunction(true)
    }
    if (email===''){
      emailEmpytyFunction(false)
    }
    else{
      emailEmpytyFunction(true)
    }
    if (message===''){
      messageEmpytyFunction(false)
    }
    else{
      messageEmpytyFunction(true)
    }
  }
  const form=
  <div className='MainContainer'>
    <form className='Userform' onSubmit={submitButton}>
      <h1 className='Heading'>User Form</h1>
      <label className={nameEmpty?'labelElement':'labelElement redColor'} htmlFor='Name'>Name<span className='spanElement'>*</span></label>
      <input type='text' id='Name' className={nameEmpty?'inputElement':'inputElement redInput'} onChange={NameFunction}/>
      <label className={emailEmpty?'labelElement':'labelElement redColor'} htmlFor='Email'>Email<span className='spanElement'>*</span></label>
      <input type='text' id='Email' className={emailEmpty?'inputElement':'inputElement redInput'} onChange={EmailFunction}/>
      <label className={messageEmpty?'labelElement':'labelElement redColor'} htmlFor='message'>Message<span className='spanElement'>*</span></label>
      <textarea cols='24' rows='8' id='message' className={messageEmpty?'inputElement':'inputElement redInput'} onChange={MessageFunction}/>
      {isComplete?'':<p className='warning'>*Please fill all the details</p>}
      <button className='button' type='submit'>Submit</button>
    </form>
  </div>
const SuccessView=
  <div className='MainContainer'>
    <div className='Success'>
      <TiTick className='icons'/>
      <h1 className='SuccessMessage'>Successfully Submitted </h1>
    </div>
  </div>
  return (
    success?SuccessView:form
  )

}
export default App
