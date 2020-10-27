import React, { useState } from 'react';
import './AddMovie.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function AddMovie({ UpDateMovie }) {
  //*Show function for the AddIcon ***********/
  const [Show, SetAddIcon] = useState(false);
  let ShowAddIcon = () => {
    SetAddIcon(!Show);

  }
  //********************************************************/
  /***Show the AddIcon  */

  /***Function for Showing the Model  */
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  /*****End of Modal State  */

  /**Reate a state for the input to add to the movie list  */
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posteUrl: "",
    rate: 0
  });

  let handleChange = (e) => {
    e.preventDefault();
    setNewMovie({
      ...newMovie, [e.target.id]: e.target.value,
    });
  }
  /**End of the declaration of the movie list State  */
  //**Clear the form After Adding the movie */
  let handleReset = (e) => {
    setNewMovie({
      title: "",
      description: "",
      posteUrl: "",
      rate: 0
    });
  }

  /**end of the reset function  *************************** */
  //**Create a function to update movie if all the input are valid */
  if (Show) {
    return (

      <div className="AddMovie__Style">

        {/***** show Madal Part */}
        <div>
          <Tooltip title="Add" aria-label="add" className="Add">
            <Fab className="AddIcon__CSS" color="primary" aria-label="add" onClick={handleShow} >
              <AddIcon className="AddIcon__CSS" />
            </Fab>
          </Tooltip>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Movie </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form >
                <Form.Control type="text" placeholder="title..." id="title" onChange={handleChange} /><br />
                <Form.Control type="text" placeholder="description..." id="description" onChange={handleChange} /><br />
                <Form.Control type="text" placeholder="posteUrl..." id="posteUrl" onChange={handleChange} /><br />
                <Form.Control type="number" max={5} min={0} placeholder="rate..." id="rate" onChange={handleChange} /><br />
                {/**The Add Action Must to be here  */}
                <Button variant="contained" color="primary" onClick={() => { UpDateMovie(newMovie); handleClose(); handleReset() }} >Add</Button>
                {/**End of comment of AddButton */}
                <Button color="secondary" variant="contained" onClick={handleClose}>
                  Close
          </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </Modal>

        </div>
        {/***End of show Modal Part  */}
      </div>
    );
  }

  return (
    <div className="AddMovie__Style">
      <Tooltip title="Add" aria-label="add" className="Add">
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={ShowAddIcon} />
        </Fab>
      </Tooltip>

    </div>
  )

  /******show the AddIcon */

}



export default AddMovie
