import React from 'react';
import Card from './card';
import Landing from './landing';
import Footer from './footer';

export default function showcase() {
  return (
    <div>
      <div className='showcase-image'>
        <h1>MAKE YOUR BODY PROUD</h1>
        <button>Get Started</button>
      </div>

      <Card />
      <Landing />
      <Footer />

    

    </div>
  )
}
