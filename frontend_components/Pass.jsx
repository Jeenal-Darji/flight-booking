import React from 'react';
import './Pass.css';
import CurvedArrow from './CurvedArrow';

const Pass = () => {
  const lineStyle = {
    borderTop: '3px dashed grey',
    width: '100%',
    borderWidth: '3px 10px',
  };

  return (
    <>
      <center>
        <div>
          <h1 style={{ fontFamily: 'Verdana', fontSize: '24px' }}>E-TICKET</h1>
        </div>
      </center>
      <div
        className="container text-center"
        style={{
          backgroundColor: 'lightblue',
          width: '700px',
          display: 'flex',
          flexDirection: 'column',
          height: '1000px',
          padding: '10px',
          borderRadius: '70px',
          justifyContent: 'flex-start',
        }}
      >
        <div className="col">
          <br />
          <br />
          <div className="row">
            <br />
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <h4 className="col-md-4">SOURCE</h4>
            <div className="col-md-4">
              <CurvedArrow />
            </div>
            <h4 className="col-md-4">DESTINATION</h4>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style={lineStyle}></div>
          <br />
          <br />
          <br />
          <div className="row">
            <p className="col-md-6">PASSENGER </p> <p className="col-md-6">DATE</p>
       </div>
       <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <div class="row">
    <p className='col-md-3'>FLIGHT-NO </p> <p className='col-md-3'>GATE</p> <p className='col-md-3'>SEAT</p> <p className='col-md-3'>CLASS</p> 
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
      <br/>
     
    <div class="row">
    <p className='col-md-4'>  BOARDING TIME </p> <p className='col-md-4'>TRAVELLING TIME </p> <p className='col-md-4'> ARRIVAL TIME</p> 
     
    </div>
  </div>
</div></>
  )
}

export default Pass;




