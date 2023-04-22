import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { editProduct } from '../../redux/Product/productSlice';

export default function AdminPages() {

  const listProduct = useSelector(state => state.productReducer);

  let numberStt = 0;
  const products = Object.entries(listProduct.data);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [dataEdit, setDataEdit] = useState('')
  const dispatch = useDispatch();
  


  const handleShow =(id, item) => {
    setShow(true);
    setId(id)
    setDataEdit(item)
  }

  const handleSubmit = () => {
    dispatch(editProduct(
      {id, dataEdit}
    ));
    setShow(false);
  }

  const handleChangeName = (e) => {
    const newObj = {...dataEdit}
    newObj.name = e.target.value;
    setDataEdit(newObj)
  }
  const handleChangeCategoty = (e) => {
    const newObj = {...dataEdit}
    newObj.category = e.target.value;
    setDataEdit(newObj)
  }
  const handleChangeDescription = (e) => {
    const newObj = {...dataEdit}
    newObj.description = e.target.value;
    setDataEdit(newObj)
  }

  

  return (
    <div>
      <h1>Admin Pages</h1>
      

      <Table bordered >
        <thead>
          <tr>
            <th>STT</th>
            <th colSpan={4}>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Color</th>
            <th>Sale</th>
            <th>Link Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {products.map(([id,item]) => {
            numberStt++;
            return (<tr key={id}>
              <td>{numberStt}</td>
              <td colSpan={4}>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.size?.length < 1 ? item.size : <ul>{item.size?.map((itemSize, index) => {return <li key={index}>{itemSize}</li>})}</ul>}</td>
              <td>{item.color?.length < 1 ? item.color : <ul>{item.color?.map((itemColor, index) => {return <li key={index}>{itemColor}</li>})}</ul>}</td>
              <td>{item.sale}</td>
              <td>{item.image?.length < 1 ? item.image : <ul>{item.image?.map((itemImage, index) => {return <li key={index}><a href={itemImage}>{itemImage}</a></li>})}</ul>}</td>
              <td><Button className='mb-2' variant="success" onClick={() => handleShow(id, item)}>Edit</Button> <Button variant="danger">Delete</Button></td>
            </tr>)
            
            
          }
          )}
        </tbody>
      </Table>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' value={dataEdit?.name}  onChange={handleChangeName} />


            <Form.Label className='mt-3'>CateGory</Form.Label>
            <Form.Control type='text' value={dataEdit?.category}  onChange={handleChangeCategoty} />

            <Form.Label className='mt-3'>Description</Form.Label>
            <Form.Control type='text' value={dataEdit?.description}  onChange={handleChangeDescription} />


            <Button className='mt-5' onClick={handleSubmit}>Submit</Button>
          </Form>

        </Modal.Body>
      </Modal>

  
      
    </div>
  )
}
