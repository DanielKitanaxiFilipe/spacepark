import React, {useState, useEffect}from 'react';
import liststory from './../util/story.json'

export function Story() {
  const [liststorys, setliststorys] = useState ([]);
  useEffect(() => {
    loadliststorys();
    console.log(liststorys)
  })
  async function loadliststorys() {
    await setliststorys(liststory.story)
  }
  return (
    <div className="story d-flex mb-3">
      {
      liststorys?.map(story => (
        <div className="card bg-dark me-3 text-white">
        <img src={story.avatar} className="card-img" />
        <div className="card-img-overlay d-flex align-items-start flex-column">          
        <div className="avatar">
           <img src={story.img} alt="" />
         </div>
        </div>
      </div>
      ))
     }
    </div>
  );
}