import React, {useState, useEffect}from 'react';
import listContact from './../util/contact.json'
import { Card } from 'react-bootstrap'; 
 import { HiDotsHorizontal } from "react-icons/hi";

export function Contact() {
  const [listContacts, setlistContacts] = useState ([]);
  useEffect(() => {
    loadlistContacts();
    console.log(listContacts)
  })
  async function loadlistContacts() {
    await setlistContacts(listContact.contact)
  }
  return (
    <>
      <div className='mb-3 opacity-05'><b className='font-14'>Contacts</b></div>
          <Card className='mb-3 pt-2 pb-2'>
          {
        listContacts?.map(contact => (
          <Card.Body className='pb-2 pt-2 d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <div className="avatar">
              <img src={contact.avatar} alt="" />
            </div>
            <div className="nameUser ms-2">
                <div className='nameText'><b>{contact.nomeUser}</b></div>
            </div>
            </div>
            <div>
              <HiDotsHorizontal/>
            </div>
          </Card.Body>
            ))
          }
          </Card>
    </>
  );
}