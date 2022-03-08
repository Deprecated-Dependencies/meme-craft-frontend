import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class MemeEdit extends React.Component {
  
  render() {
    let boxCount = 3;
    let formControls = [];
    for(let i = 1; i <= boxCount; i++) {
      formControls.push((
        <>
        <Form.Group key={i} controlId={`${i}box`}>
        <Form.Label>box{i}</Form.Label>
        <Form.Control type={`${i}box`}/>
        </Form.Group>
        </>
      ))
    }
    
    return (
    <Form>
      {formControls}
      <Button type='submit'>Save</Button>
      <Button type='submit'>Preview</Button>
      </Form>
    )
  }
}

export default MemeEdit;
