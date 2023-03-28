import React,{useState} from 'react'
import "./style/PostForm.css"

const PostForm = () => {

  const [user,setUser] = useState();
  const [description,setDescription] = useState();
  const [day,setDay] = useState();
  const [year,setYear] = useState();
  const [events,setEvents] = useState();
  const [month,setMonth] = useState();


function handleChangeId(event){
  setUser(event.target.value);
}

function handleChangeDescription(event){
  setDescription(event.target.value);
}
function handleChangeDay(event){
  setDay(event.target.value);
}
function handleChangeMonth(event){
  setMonth(event.target.value);
}
function handleChangeYear(event){
  setYear(event.target.value);
}
function handleChangeEvent(event){
  setEvents(event.target.value);
}

const formpost =()=>{
  setDescription("привет как дела?");
  setDay("13");
  setYear("2014");
  setMonth("4");
  setEvents("5");
  if(user !== undefined && user !== null){
   fetch('/postevent/?id=' + user+"&day="+day+"&description="+description+"&events="+events+"&month="+month+"&year="+year)
   alert("я отправил")
   console.log(day)
 }
}




  return (
    <div className='PostForm'>
     <input alt='Id' className="PostFormInput"onChange={handleChangeId} placeholder="ID"></input>
    <input alt='Day' className="PostFormInput" onChange={handleChangeDay} placeholder="DAY"></input>
    <input alt='Month' className="PostFormInput" onChange={handleChangeMonth} placeholder="MONTH"></input>
    <input alt='Year' className="PostFormInput" onChange={handleChangeYear} placeholder="YEAR"></input>
    <input alt='Event' className="PostFormInput" onChange={handleChangeEvent} placeholder="EVENT"></input>
    <input alt='Description' className="PostFormInput" onChange={handleChangeDescription} placeholder="DESCRIPTION"></input> 
    <button onClick={formpost} className="PostFormButton">Нажми на меня</button>
    </div>
  )
}

export default PostForm