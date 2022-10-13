import React from 'react'

const LetsConnect = () => {
  return (
    <>
    {
        fetch('https://wizgpcbpmm.us-west-2.awsapprunner.com/api/data')
        .then(res => res.json())
        
        .catch( err => console.error(err))
    }
    </>
  )
}


export default LetsConnect