import React from 'react'
import { useGlobalContext } from '../contextapi/context';

const Home = () => {
  const name = useGlobalContext();
  return (
    <>
      <h2>This is Home Page</h2>
      <p>Hello {name}</p>
    </>
  )
}

export default Home