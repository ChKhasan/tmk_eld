import React from 'react'

const ContactTitle = ({title,text}) => {
  return (
    <div className='contact_title'>
       <h3>{title}</h3>
            <p>{text}</p>
    </div>
  )
}

export default ContactTitle
