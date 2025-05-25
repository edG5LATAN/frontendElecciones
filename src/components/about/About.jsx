import React from 'react'
import './About.css'


function About() {
  return (
    <div className='about_contenedor d-flex justify-content-center align-items-center'>
      <div className='about_contenedor_caja'>
        <h2 className='text-center text-uppercase'>Proyect School Election</h2>
        <p className='text-light-emphasis fs-5'>This is a full-stack application for managing school elections, designed to digitize and simplify the voting process for students. The frontend is built with React and Bootstrap, providing a clean and responsive interface where students can view candidates, cast votes, and see real-time results.
          <br />
          The backend uses Spring Boot with Spring Security for authentication, generating secure JWT tokens to manage user sessions. Data is stored in a MySQL database, ensuring all election information remains organized and persistent.
          <br />
          The system connects the frontend and backend using Axios for API calls, with CORS configured to allow smooth communication between the two. The goal is to make school elections more efficient, transparent, and accessible while keeping the process secure and easy to manage.
          <br />
          This project was developed to replace traditional paper-based voting, offering a modern alternative that reduces errors and speeds up vote counting.</p>
      </div>
    </div>
  )
}

export default About