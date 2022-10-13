import React from 'react'

const TheApi = () => {
  fetch('https://wizgpcbpmm.us-west-2.awsapprunner.com/api/data')
  .then(res => res.json())
  .then(res => {return(
    <div className='textwhite'>
      {res[1].message}
    </div>
    )})
   //.then(res => console.log(res))
  .catch( err => console.error(err))
}


export default TheApi 