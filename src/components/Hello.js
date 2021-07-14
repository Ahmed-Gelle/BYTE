import React from 'react'

export default function Hello({handleLogout}) {
    return (
       <section className="hero">
           <nav>
               <h2>Welcome to BYTE platform.</h2>
               <button className="buttonA" onClick={handleLogout} style={{borderRadius:'10px'}}><b>Sign out</b></button>
           </nav>
       </section>
    )
}
