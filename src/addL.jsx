import { Button } from "react-bootstrap";

function AddL(){
    return(
        <div class="addList">
        <Button variant="primary">Zobrazit vsechny</Button>
        <Button variant="success" style={{ marginLeft: '2vh' }}>Vytvorit novy seznam</Button>
        </div>
        
    );
}

export default AddL