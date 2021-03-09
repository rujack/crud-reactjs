import React from 'react'
import {Container, Form,Button} from 'react-bootstrap'

const Formulir = ({nama,harga,stok,handleChange,handleSubmit,id,isValid}) => {
    return (
        <div>
          <Container className="mt-4">
            <h3>{id ?"Edit" :"Input"} Data</h3>
          <Form onSubmit={handleSubmit} className="mt-3">
          {isValid}
            <Form.Group controlId="nama">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control type="Text" placeholder="Nama" name="nama" value={nama} onChange={(event)=>handleChange(event)}/>
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>Harga Barang</Form.Label>
              <Form.Control type="Text" placeholder="harga" name="harga" value={harga} onChange={(event)=>handleChange(event)}/>
            </Form.Group>
            <Form.Group controlId="stok">
              <Form.Label>Stok Barang</Form.Label>
              <Form.Control type="text" placeholder="stok" name="stok" value={stok} onChange={(event)=>handleChange(event)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              {id ?"Edit" :"Submit"}
            </Button>
          </Form>
          </Container>
        </div>
    )
}

export default Formulir
