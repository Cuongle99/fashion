import React,  {useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'


export default function ProductFilter(props) {


    const allCategories  = ['All','Men', 'Women', 'Kids'];
    const allColor = ['All','Black', 'White', 'Pink', 'Blue', 'Red']
    const allSize = ['All', 'S', 'M', 'L', 'XL', 'XXL']

    const [selectCategories, setselectCategories] = useState('All');
    const [selectColor, setselectColor] = useState('All');
    const [selectSize, setselectSize] = useState('All');

    const handleSelectCategories = (e) => {
            setselectCategories(e.target.value);
    }
    const handleSelectColor = (e) => {
        setselectColor(e.target.value)
    }
    const handleSelectSize = (e) => {
        setselectSize(e.target.value)
    }


    useEffect(() => {
        props.fillterData({cate: selectCategories, color: selectColor, size: selectSize})
    }, );
    


  return (
    <div className='product__filter'>
        <h2 className="product__filter__title mb-4">
            Filter By
        </h2>

        <div className='product__filter__items mb-4'>
            <h4> Categories </h4>

            {   
                allCategories.map( (item, index) => {
                    return <Form.Check 
                    label={item}
                    key={index}
                    value={item}
                    checked={item === selectCategories ? true : false}
                    name="group1"
                    type="radio" className='mb-2'
                    onChange={handleSelectCategories}
                />
                })
            }
            
        </div>


        <div className='product__filter__items mb-4'>
            <h4> Color </h4>

            {   
                allColor.map( (item, index) => {
                    return <Form.Check
                    label={item}
                    value={item}
                    key={index}
                    checked={item === selectColor ? true : false}
                    name="group2"
                    type="radio" className='mb-2'
                    onChange={handleSelectColor}
                />
                })
            }
            
        </div>


        <div className='product__filter__items mb-4'>
            <h4> Size </h4>

            {   
                allSize.map( (item, index) => {
                    return <Form.Check
                    key={index}
                    value={item}
                    label={item}
                    checked={item === selectSize ? true : false}
                    name="group3"
                    type="radio" className='mb-2'
                    onChange={handleSelectSize}
                />
                })
            }
            
        </div>

        <div className='product__filter__items mb-3'>
            <h4> Price </h4>

            
            
        </div>
    </div>
  )
}
