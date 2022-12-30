import React, {useState, useEffect}from 'react';
import listRequest from './../util/request.json'

import { 
  Card,
  Button,
 } from 'react-bootstrap'; 

export function Requests() {
  const [listRequests, setlistRequests] = useState ([]);
  useEffect(() => {
    loadlistRequests();
    console.log(listRequests)
  })
  async function loadlistRequests() {
    await setlistRequests(listRequest.request)
  }
  return (<>
  <div>
   <div className='mb-3 opacity-05'><b className='font-14'>Requests</b></div>
     {
      listRequests?.map(request => (
        <Card className='mb-3'>
      <Card.Body className='pb-3'>
      <div className='d-flex'>
      <div className="avatar">
        <img src={request.avatar} alt="" />
      </div>
        <div className="nameUser ms-2">
          <div className='nameText'><b>{request.nomeUser}</b> wants to add you to friends</div>
        </div>
        </div>
        <div className='mt-2'>
        <Button variant="primary" className='btn-sm btn-meS'>Accept</Button>
        <Button variant="light" className='btn-sm btn-meS ms-2'>Decline</Button>
        </div>
      </Card.Body>
    </Card>
      ))
     }
  </div>
  </>);
}