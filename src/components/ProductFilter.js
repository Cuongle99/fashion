import React from 'react'
import { Form } from 'react-bootstrap'


export default function ProductFilter() {


    const allCategories  = ['Men', 'Women', 'Kids'];
    const allColor = ['Black', 'White', 'Pink', 'Blue', 'Red']
    const allSize = ['S', 'M', 'L', 'XL', 'XXL']


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
                    name="group1"
                    type="checkbox" className='mb-2'
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
                    key={index}
                    name="group1"
                    type="checkbox" className='mb-2'
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
                    label={item}
                    name="group1"
                    type="checkbox" className='mb-2'
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
