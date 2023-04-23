import React from 'react'
import { Link } from 'react-router-dom'

export const CompanyCards = ({companyname,primaryText,headline,description,CTA,imageUrl,url}) => {
  return (
    <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;", position: "relative"}}>
       <h2>{companyname}</h2> 
       <Link to={`/${url}`}><p>{url}</p></Link>
       <img width="100%" height="400px" src={imageUrl} alt=""/>
       <p>Text: {primaryText}</p>
       <p>Headline: {headline}</p>
       <p>Description: {description}</p>
       <button>{CTA}</button>
       
    </div>
  )
}
