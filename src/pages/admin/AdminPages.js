import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addProduct, deleteProduct, editProduct } from '../../redux/Product/productSlice';

export default function AdminPages() {

  const listProduct = useSelector(state => state.productReducer);

  let numberStt = 0;
  const products = Object.entries(listProduct.data);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [statusAdd, setStatusAdd] = useState(false);
  const [dataEdit, setDataEdit] = useState('')
  const [dataAdd, setDataAdd] = useState('')
  const [sizeAdd, setSizeAdd] = useState(false);
  const [size , setSize] = useState('')
  const [colorAdd, setColorAdd] = useState(false);
  const [color , setColor] = useState('')
  const [imgAdd, setImgAdd] = useState(false);
  const [image , setImage] = useState('')
  const dispatch = useDispatch();


  


  const handleShow =(id, item) => {
    setShow(true);
    setId(id)
    setDataEdit(item);
  }

  const handleShowAdd = () => {
    setShow(true);
    setStatusAdd(true);
    const newData = {
      name : '',
      category: '',
      description: '',
      price: '',
      quantity: '',
      sale: '',
      size: [],
      color: [],
      image: [],
    }
    setDataEdit(newData);
  }

  const handleSubmit = () => {
    if (statusAdd) {
      dispatch(addProduct(dataEdit))
    } else {
      dispatch(editProduct(
        {id, dataEdit}
      ));
    }
    
    setShow(false);
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
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
  const handleChangePrice = (e) => {
    const newObj = {...dataEdit}
    newObj.price = e.target.value * 1;
    setDataEdit(newObj)
  }
  const handleChangeQuantity = (e) => {
    const newObj = {...dataEdit}
    newObj.quantity = e.target.value * 1;
    setDataEdit(newObj)
  }
  const handleChangeSale = (e) => {
    const newObj = {...dataEdit}
    newObj.sale = e.target.value * 1;
    setDataEdit(newObj)
  }


  const handleRemoveSize = (item) => {
    const newObj = {...dataEdit}
    const newArr = newObj.size?.filter( e => e !== item)
    newObj.size = newArr
    setDataEdit(newObj)
  }


  const handleChangeSize = (e) => {
    setSize(e.target.value.toUpperCase())
  } 

  const handleKeyDownSize = (e) => {
    if (e.key === 'Enter') {
      setSizeAdd(false);
      setSize('');
      const newObj = {...dataEdit}
      if (!newObj?.size) {
        newObj.size = []
      }


      const newArr = [...newObj?.size, size]
      newObj.size = newArr
      setDataEdit(newObj);
    }
  }
  const handleRemoveColor = (item) => {
    const newObj = {...dataEdit}
    const newArr = newObj.color?.filter( e => e !== item)
    newObj.color = newArr
    setDataEdit(newObj)
  }


  const handleChangeColor = (e) => {
    
    setColor(e.target.value)
    
  } 

  const handleKeyDownColor = (e) => {
    if (e.key === 'Enter') {
      setColorAdd(false);
      
      const newObj = {...dataEdit}
      if (!newObj?.color) {
        newObj.color = []
      }
      const newArr = [...newObj?.color, color]
      newObj.color = newArr
      setDataEdit(newObj);
      
      setColor('');
    }
  }


  const handleRemoveImg = (item) => {
    const newObj = {...dataEdit}
    const newArr = newObj.image?.filter( e => e !== item)
    newObj.color = newArr
    setDataEdit(newObj)
  }


  const handleChangeImg = (e) => {
    
    setImage(e.target.value)
    
  } 

  const handleKeyDownImg = (e) => {
    if (e.key === 'Enter') {
      setImgAdd(false);
      
      const newObj = {...dataEdit}
      if (!newObj?.image) {
        newObj.image = []
      }
      const newArr = [...newObj?.image, image]
      newObj.image = newArr
      setDataEdit(newObj);
      
      setImage('');
    }
  }
  


  

  return (
    <div>
      <h1>Admin Pages</h1>
      

      <div className='mb-3'><Button variant='info' onClick={handleShowAdd}>Add Product</Button></div>


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
              <td><Button className='mb-2' variant="success" onClick={() => handleShow(id, item)}>Edit</Button> <Button variant="danger" onClick={() => handleDelete(id)}>Delete</Button></td>
            </tr>)
            
            
          }
          )}
        </tbody>
      </Table>

      <Modal show={show} fullscreen={true} onHide={() => {setShow(false); setStatusAdd(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>{statusAdd ? "Add Product" : "Edit Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            

            <Row>
              <Col xs={3}>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' value={ dataEdit?.name}  onChange={handleChangeName} />
              </Col>
              <Col xs={3}>
                <Form.Label>Category</Form.Label>
                <Form.Control type='text' value={dataEdit?.category}  onChange={handleChangeCategoty} />
              </Col>

            </Row>
            
            <Row>
              <Col xs={6}>
                <Form.Label className='mt-3'>Description</Form.Label>
                <Form.Control type='text' as="textarea" value={ dataEdit?.description}  onChange={handleChangeDescription} />
              </Col>
            </Row>

            <Row>
              <Col xs={2}>
                <Form.Label className='mt-3'>Price</Form.Label>
                <Form.Control type='number' value={ dataEdit?.price} onChange={handleChangePrice} />
              </Col>
              <Col xs={2}>
                <Form.Label className='mt-3'>Quantity</Form.Label>
                <Form.Control type='number' value={ dataEdit?.quantity} onChange={handleChangeQuantity} />
              </Col>
              <Col xs={2}>
                <Form.Label className='mt-3'>Sale</Form.Label>
                <Form.Control type='number' value={ dataEdit?.sale} onChange={handleChangeSale} />
              </Col>

            </Row>


            <Row>
              <Col xs={3}>
              
           
              <Form.Group controlId="size">
                <Form.Label className='mt-3'>Size  <span className='add' onClick={() => setSizeAdd(true)}><i className='bx bx-plus' ></i></span></Form.Label>
                <Form.Control  onChange={handleChangeSize} onKeyDown={handleKeyDownSize} value={size ? size : ''} type="text" style={{display: sizeAdd ? 'block' : 'none'}}></Form.Control>
              </Form.Group>
              
                <ul>
                  {dataEdit?.size?.map((item, index) => {
                    return <li key={index}>{item} <span className='del' onClick={() => handleRemoveSize(item)}><i className='bx bx-minus'></i></span></li>
                  })}
                </ul>
              </Col>
              <Col xs={3}>
              <Form.Group controlId="color">
                <Form.Label className='mt-3'>Color  <span className='add' onClick={() => setColorAdd(true)}><i className='bx bx-plus' ></i></span></Form.Label>
                <Form.Control  onChange={handleChangeColor} onKeyDown={handleKeyDownColor} value={color ? color : ''} type="text" style={{display: colorAdd ? 'block' : 'none'}}></Form.Control>
              </Form.Group>
                <ul>
                  { dataEdit?.color?.map((item, index) => {
                    return <li key={index}>{item} <span className='del' onClick={() => handleRemoveColor(item)}><i className='bx bx-minus'></i></span></li>
                  })}
                </ul>
              </Col>
            </Row>

            <Row>
            <Col xs={6}>
              
           
              <Form.Group controlId="img">
                <Form.Label className='mt-3'>Image  <span className='add' onClick={() => setImgAdd(true)}><i className='bx bx-plus' ></i></span></Form.Label>
                <Form.Control  onChange={handleChangeImg} onKeyDown={handleKeyDownImg} value={image ? image : ''} type="text" style={{display: imgAdd ? 'block' : 'none'}}></Form.Control>
              </Form.Group>
              
                <ul>
                  {dataEdit?.image?.map((item, index) => {
                    return <li key={index}>{item} <span className='del' onClick={() => handleRemoveImg(item)}><i className='bx bx-minus'></i></span></li>
                  })}
                </ul>
              </Col>
            </Row>

            



            <Button className='mt-5' onClick={handleSubmit}>Submit</Button>
          </Form>

        </Modal.Body>
      </Modal>

  
      
    </div>
  )
}
