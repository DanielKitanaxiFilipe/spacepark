import { 
  HiOutlineHome,
  HiOutlineUser,
  HiOutlinePhotograph,
  HiOutlineNewspaper,
  HiOutlineCog,
  HiOutlineUserGroup
} from "react-icons/hi";
import { 
  Card,
  Button,
 } from 'react-bootstrap'; 
import user from './../assets/post/dw.jpg'
export function Menu() {
  return (
    <>
    <Card className='mb-3'>
      <Card.Body className='d-flex'>
         <div className="avatar">
           <img src={user} alt="" />
         </div>
         <div className="nameUser ms-2">
            <div className='nameText'><b>Belle Delphine</b></div>
           <div className='timeData'><b>@belledelphine</b></div>
         </div>
      </Card.Body>
    </Card>
          <Card className='mb-3 cardButtonsMenu'>
            <Card.Body className='d-grid'>
              <Button variant="light"><HiOutlineHome className='icon-btn'/> Home</Button>
              <Button variant="light"><HiOutlineUserGroup className='icon-btn'/> People</Button>
              <Button variant="light"><HiOutlinePhotograph className='icon-btn'/> Photos</Button>
              <Button variant="light" className='active'><HiOutlineNewspaper className='icon-btn'/> News Feed</Button>
              <Button variant="light"><HiOutlineUser className='icon-btn'/> Profile</Button>
              <Button variant="light"><HiOutlineCog className='icon-btn'/> Settings</Button>
            </Card.Body>
          </Card>
    </>
  );
}