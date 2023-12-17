import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <div class="cards">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Alza</Card.Title>
        <Button variant="primary">Zobrazit nakupni seznam</Button>
        <Button variant="danger">Smazat</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Nakup</Card.Title>
      <Button variant="primary">Zobrazit nakupni seznam</Button>
      <Button variant="danger">Smazat</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Nakup na oslavu</Card.Title>
      <Button variant="primary">Zobrazit nakupni seznam</Button>
      <Button variant="danger">Smazat</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Kaufland</Card.Title>
      <Button variant="primary">Zobrazit nakupni seznam</Button>
      <Button variant="danger">Smazat</Button>
    </Card.Body>
  </Card>
  </div>
  
  );
}

export default Cards;