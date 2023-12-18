
import { ProductSearchWrap } from './ProjectStyle';
import { useDispatch } from "react-redux";
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';
import { StyleSheetContext } from 'styled-components';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const ProductSearch = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const textRef = useRef()

    const onSort=(e)=>{
        e.preventDefault()
        const {value} = e.target
       dispatch(sortCart(value))

    }

    const changeInput =e=>{
        const  {value} = e.target
        setText(value)
    }
    const onSubmit =e=>{
        e.preventDefault()
        if(!text) return
        dispatch(searchCart(text))
        // setText('')
        textRef.current.focus()

    }

    useEffect(()=>{
        dispatch(searchCart(''))
    },[])
    return (
        <ProductSearchWrap>
            <form onClick={onSubmit}>
                <p>
                    <input type="text" name='text' id='' onChange={changeInput} value={text} ref={textRef} />
                    <button></button>
                </p>
                <p>
                    <select name="" id="" onChange={onSort} >
                        <option value="">++정렬++</option>
                        <option value="title">제품명</option>
                        <option value="price">가격</option>
                        <option value="category">카테고리</option>
                    </select>
                    <span onClick={()=>dispatch(resetCart())}>초기화</span>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;