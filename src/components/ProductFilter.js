import React,  {useState, useEffect} from 'react'
import { Form } from 'react-bootstrap'


export default function ProductFilter(props) {


    const allCategories  = ['Men', 'Women', 'Kids'];
    const allColor = ['Black', 'White', 'Pink', 'Blue', 'Red']
    const allSize = ['S', 'M', 'L', 'XL', 'XXL']

    const [selectCategories, setselectCategories] = useState([]);
    const [selectColor, setselectColor] = useState([]);
    const [selectSize, setselectSize] = useState([]);

    const handleSelectCategories = (e) => {
        if(e.target.checked) {
            const newArr = [...selectCategories, e.target.value];
            setselectCategories(newArr);
        } else {
            const newArr = selectCategories.filter(item  => {
                return item !== e.target.value;
            })

            setselectCategories(newArr)
        }
        // props.fillterData(selectCategories)
    }
    const handleSelectColor = (e) => {
        if(e.target.checked) {
            const newArr = [...selectColor, e.target.value];
            setselectColor(newArr);
        } else {
            const newArr = selectColor.filter(item  => {
                return item !== e.target.value;
            })

            setselectColor(newArr)
        }
        // props.fillterData(selectCategories)
    }
    const handleSelectSize = (e) => {
        if(e.target.checked) {
            const newArr = [...selectSize, e.target.value];
            setselectSize(newArr);
        } else {
            const newArr = selectSize.filter(item  => {
                return item !== e.target.value;
            })

            setselectSize(newArr)
        }
        // props.fillterData(set)
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
                    name="group1"
                    type="checkbox" className='mb-2'
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
                    name="group1"
                    type="checkbox" className='mb-2'
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
                    name="group1"
                    type="checkbox" className='mb-2'
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
