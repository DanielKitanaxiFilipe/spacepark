import React, { useState, useEffect } from 'react';
import postFeed from './../util/post.json'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { 
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Button,
  Tooltip 
 } from 'react-bootstrap';
 import { 
  HiEllipsisHorizontal,
  HiHeart,
  HiBookmark,
  HiChatBubbleOvalLeft,
  HiOutlineLink
} from "react-icons/hi2";
import { Menu } from '../components/Menu';
import { Contact } from '../components/Contact';
import { Requests } from '../components/Requests';
import { MenuTop } from '../components/MenuTop';
import { Story } from '../components/Story';
import user from './../assets/post/dw.jpg'
function Home() {
  const [postFeeds, setpostFeeds] = useState ([]);
  useEffect(() => {    
    loadPostFreed();
    console.log(postFeeds)
  })
  async function loadPostFreed(){
    await setpostFeeds(postFeed.post)
  }
  return <main className='feed_new'>
    <MenuTop/>
    <section className='mt-5'>
      <Container className='pt-5 pb-5'>
        <Row className='justify-content-center'>
        <Col lg={2} className='cardsFreed'>
          <div className="position-sticky">
            <Menu/>
          </div>
        </Col>
          <Col lg={5}>
            <Story/>
            <Card className='mb-3 homePost'>
              <Card.Body>
              <div class="input-group">
              <div className="avatar">
                 <img src={user} className='img-fluid'/>
                </div>
                <input type="text" class="form-control" placeholder="Username"/>
                <Button><HiOutlineLink/> Post It!</Button>
              </div>
              </Card.Body>
            </Card>
          {
              postFeeds?.map(post => (
                <Card className='mb-4'>
                  <Card.Body className='d-flex justify-content-between pb-0'>
                    <div className='d-flex'>
                      <div className="avatar">
                        <img src={post.avatar} className='img-fluid'/>
                      </div>
                      <div className="nameUser ms-2">
                        <div className='nameText'><b>{post.nomeUser}</b></div>
                        <div className='timeData'><b>{post.timeDate}</b></div>
                      </div>
                    </div>
                    <div>
                    <Dropdown>
                      <Dropdown.Toggle>
                        <HiEllipsisHorizontal/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='shadow-sm'>
                        <Dropdown.Item href="#/action-1">Denuciar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </div>
                  </Card.Body>
                  <Card.Body className='pb-1'>
                    <font className='text-post'>{post.text}</font>
                    <img src={post.photo} className='img-fluid mt-3'/>
                  </Card.Body>
                  <Card.Body className='pt-0 pb-1 buttons-bottom'>
                    <div className='d-flex justify-content-between'>
                    <div classname="btn-group">
                      <Button className='HiHeart'><HiHeart/></Button>
                      <Button className='ms-2'><HiChatBubbleOvalLeft/></Button>
                    </div>
                    <div>
                    {['top' /*'right', 'bottom', 'left'*/].map((placement) => (
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              <font className='font-13'>Salvar pubica????o</font>
                            </Tooltip>
                          }
                        >
                          <Button><HiBookmark/></Button>
                        </OverlayTrigger>
                      ))}
                    </div>
                    </div>
                    <div className='pt-1 Liked font-14 d-flex justify-content-between'>
                    <div className='pt-2'>Liked by <b>{post.liked} others</b></div>
                    <div className='d-flex pt-1'>                     
                      {
                        postFeeds?.map(post => (
                          <div className="avatar ">
                          <img src={post.avatar} alt="" />
                          </div>     
                        ))
                      }
                    </div>
                  </div>
                    <div className='pb-3 pt-3 form-coment'>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Comentar essa publica????o"/>
                      <span className="input-group-text"><a href="#">Publicar</a></span>
                    </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
            }
          </Col>
          <Col lg={3} className='requests'>
          <Requests/>
          <div className="position-sticky">
            <Contact/>
          </div>
        </Col>
        </Row>
      </Container>
    </section>
  </main>;
}

export default Home;