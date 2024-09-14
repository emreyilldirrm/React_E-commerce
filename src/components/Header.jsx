import React, { useState } from 'react'
import '../css/Header.css'
import { GrBasket } from "react-icons/gr";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { setDrawer } from '../redux/slices/basketSlices';

function Header() {
    const [theme, settheme] = useState(false)
    const navigate = useNavigate()
    const { products } = useSelector((store) => store.basket)
    const dispatch = useDispatch()

    const changetheme = () => {
        const root = document.getElementById("root")
        settheme(!theme)
        if (theme) {
            root.style.backgroundColor = "black"
            root.style.color = "white"
        } else {
            root.style.backgroundColor = "white"
            root.style.color = "black"
        }
    }
    return (
        <div className='flex-row Header-nav'>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>Yıldırım A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' placeholder='Bir şeyler ara' type="text" />
                <div>
                    {
                        theme ? <FaRegMoon onClick={changetheme} className='icon' /> : <CiLight onClick={changetheme} className='icon' />
                    }

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <GrBasket className='icon' />
                    </Badge>

                </div>

            </div>
        </div>
    )
}

export default Header