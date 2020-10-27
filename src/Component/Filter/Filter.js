import React, { useState } from 'react'
import { Navbar, FormControl, Form, Jumbotron } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filter.css'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
function Filter({ handleText, handleRate }) {
  const [value, setValue] = useState(1);
  return (
    <>
      <Navbar className="NavBar">
        <Form inline>
          <FormControl type="text" placeholder="Search By Title..." className=" mr-sm-2" onChange={(e) => handleText(e.target.value)} />
        </Form>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography style={{ color: "Gold" }} component="legend">Search By Rating</Typography>
          <Rating
            style={{ color: "Gold" }}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            name="simple-controlled"

            value={value}
            onChange={(e, newValue) => {
              setValue(newValue); handleRate(e.target.value)
            }}


          />
        </Box>
      </Navbar>
      <Jumbotron className="jumbotron" fluid>

        <h1 style={{ fontSize: "70px" }}>Anime Movie App</h1>
      </Jumbotron>
    </>
  )
}

export default Filter
