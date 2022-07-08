
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState } from 'react';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import UserUpdateAndDelete from './UserUpdateAndDelete';
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";




const NavContainer = styled.nav`

    overflow: hidden;
    background: linear-gradient(90deg, rgb(110, 94, 254, .7) 0%, rgba(73, 63, 252, .7) 100%);
    height: 60px;
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    font-size: 1.2rem;

    #navbar-logo {
        color: #fff;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        margin-right: 20px;
        text-align: center;
        display:flex;
        align-items:center;
        
        text-shadow: lightcoral;
        text-shadow: 1px 1px 13px rgba(255, 119, 40, 0.47);

        color: #FFFFFF;
        /* background: #0e8dbc; */
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
        color: #FFFFFF;
        /* background: #0e8dbc; */

    }

    #navbar-logo img {
        /* border: 1px solid red; */
        object-fit: cover;
        height: 45px;
    }

    #menu-icon {
        display: none;
    }

    #nav-menu {
        /* border: 1px solid red; */
        /* align-self: center; */
        display: grid;
        grid-template-columns: repeat(5,auto);
        grid-gap: 4px;
        list-style: none;
        text-align: center;
        /* width: 70vw; */
        justify-content: end;
        /* margin-right: 2rem; */
        margin-right: auto;
        margin-bottom: 0;
    }

    ul a {
        /* border: 1px solid red; */
        display: block;
        color: white;
        text-decoration: none;
        padding: 6px;
        /* align-self: center; */
        /* padding: 0.3rem 0.3rem; */
        /* padding: 0.5rem 1 rem; */
        /* padding: 0.5rem 3 rem; */
    }

    ul a:hover {
        /* hover background color on links : #6d76f7 */
        background-color: rgb(255, 255, 255, .2);
        /* background-color: coral ; */
        
        border-radius: 4px;
        text-decoration: underline 3px coral ;
        text-underline-position: under;
        transition: all 0.2s ease-out;
    }


    @media screen and (max-width: 600px) {  /* max-width: 960px */
        position: relative;
        height: inherit;
        flex-direction: column;

        #navbar-logo {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(25%, 50%)
        }

        #menu-icon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
        }

        #nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 500px;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;

            /* .nav-menu.active */
            ${ (props)=> !props.clicked ? "" : "background: #6668f4;"}      /* backgroud color when the menu is active ?! */
            ${ (props)=> !props.clicked ? "" : "left: 0; opacity: 1;transition: all 0.5s ease; z-index: 1;"}
        }

        ul a {
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
        }

        ul a:hover {
            background-color: #7577fa;      /* hover background color on links */
            border-radius: 0;
        }

    }
`;


const Navbar = ( {user, setUser} ) => {

    // Set the menu items to an array so if we ever need to add, update or change items in the navbar, the code is right and will be easier to do so.
    const MenuItems = 
    [
        { title: 'Home',        url: '/' },
        { title: 'Routes',      url: '/routes' },
        // { title: 'Activities',   url: '#' },
        // { title: 'Leaderboard', url: '/leaderboard' },
    ];
    
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => setClicked( !clicked );

    return(
        <NavContainer clicked={clicked}>

            <div id="navbar-logo">
                <h1>Fitverse</h1>
                <img src={logo} alt="logo" />
            </div>

            <div id="menu-icon" onClick={handleClick}>
                { clicked ? <FaTimes/> : <FaBars/> }
            </div>

            <ul id="nav-menu" >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })} 
            </ul>

            <UserLogin user={user} setUser={setUser} />
            <UserRegister user={user} setUser={setUser} />
            <UserUpdateAndDelete user={user} setUser={setUser} />
        </NavContainer>
    )
}

export default Navbar;


