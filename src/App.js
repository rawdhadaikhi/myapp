import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav , Container , Navbar ,Card , Button , Carousel} from 'react-bootstrap'
function App() {
  return (
 
    <div className='food'>
      <Navbar bg="primary" variant="primary">
        <Container>
          <Navbar.Brand href="#home">myApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">contact</Nav.Link>
            <Nav.Link href="#pricing">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/photos-premium/delicieuse-pizza-italienne-classique-mozzarella_79762-2652.jpg?w=740" />
      <Card.Body>
        <Card.Title>PIZZA</Card.Title>
        <Card.Text>
        tasty.
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/photos-premium/delicieuse-pizza-italienne-classique-mozzarella_79762-2652.jpg?w=740" />
      <Card.Body>
        <Card.Title>PIZZA</Card.Title>
        <Card.Text>
        tasty.
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/photos-premium/delicieuse-pizza-italienne-classique-mozzarella_79762-2652.jpg?w=740" />
      <Card.Body>
        <Card.Title>PIZZA</Card.Title>
        <Card.Text>
        tasty.
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default App;
