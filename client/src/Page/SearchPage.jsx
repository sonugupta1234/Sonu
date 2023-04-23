import React, { useEffect, useState } from 'react'
import axios from "axios"
import { CompanyCards } from '../Component/CompanyCards'


// let initstate={
//     companyname: "",
//     primaryText: "",
//     headline: "",
//     description: ""
// }
export const SearchPage = () => {

    const [value,setValue]=useState("")
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    
    // function for updating the state of value
     const handleInput=(e)=>{
        // setFormState({...formstate,[e.target.name]: e.target.value})
        setValue(e.target.value)
        
    }

  


   
  //function to get the single company data
  const getData=async()=>{
        // console.log(1)
        // console.log(value)
        setLoading(true)
        try {
            const res=await fetch('https://puzzled-glasses-crab.cyclic.app/posts/postdata',{
                method: 'POST',
                body: JSON.stringify({value}),
                headers:{
                    'Content-Type': 'application/json'
                }
                
            })
            const mydata=await res.json()
            // console.log(mydata)
            setData(mydata)
            setLoading(false)
            // console.log(mydata)
        } catch (error) {
            console.log(error)
        }
    }

    
    
   

    

    useEffect(()=>{
       
        getData()
    },[value])


    useEffect(()=>{
        setLoading(true)
        axios.get("https://puzzled-glasses-crab.cyclic.app/posts/getdata")
        .then((res)=>{setData(res.data)
        setLoading(false)})
        .catch((err)=>console.log(err))
    },[])

    // console.log(data)

  return (
    <div>
      <label>Search Company by Name,Description,headline,primaryText</label><br/>
      <input type="text"  placeholder="Enter text" value={value}  onInput={handleInput} /><br/>

    
   
      {/* <label>Company Description</label><br/>
      <input type="text" name="description" placeholder="Enter description" value={formstate.description}  onInput={handleInput} /><br/> */}
       
      <div style={{width: "90%",margin: "auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px"}}>
      {loading ? <img src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif" alt=""  />:
       data.length>0 && data.map((el,i)=>{
        return <CompanyCards key={el.id} {...el} />
      })}
      </div>
      
    </div>
  )
}
