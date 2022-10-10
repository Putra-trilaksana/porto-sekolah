import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../assets/tkj.png'

const CardJurusan = (props) => {
  return (
    <Card style={{ width: '18rem', height: '25rem'}} className='mb-5 text-start shadow'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.judul}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
      </Card.Body>
        <div className='d-flex justify-content-center mb-2'>
          <Button style={{width: '12rem'}} variant='success'>Lebih Lanjut</Button>
        </div>
    </Card>
  );
}

export default CardJurusan;