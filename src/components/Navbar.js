
import styled from 'styled-components';
import { useState } from 'react';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import { FaTimes, FaBars } from "react-icons/fa";

// import './Navbar.css'


const Navbar = ( {user, setUser} ) => {

    // Set the menu items to an array so if we ever need to add, update or change items in the navbar, the code is right and will be easier to do so.
    const MenuItems = 
    [
        { title: 'Home',        url: '#' },
        { title: 'Routes',      url: '#' },
        // { title: 'Exercises',   url: '#' },
        { title: 'Leaderboard', url: '#' },
    ];
    
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => setClicked( !clicked );

    return(
        <NavContainer clicked={clicked}>
            {/* i tag includes a logo which is imported from fontawesome.com (will be changed when we deicde a logo). "fab fa-react is just the name of the logo that was imported from the website"  */}
            {/* <h1 id="navbar-logo">React<FaReact /></h1> */}
            {/* The code below allows us to change the 'menu' icon into the 'X' icon when it is clicked.
                The i tag below allows us to import the 'X' icon and the 'menu' icon, which you can see in the navbar when in mobile version. */}
            <h1 id="navbar-logo">React</h1>

            <div id="menu-icon" onClick={handleClick}>
                { clicked ? <FaTimes/> : <FaBars/> }
            </div>

            <ul id="nav-menu" >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })} 
            </ul>
            <UserLogin user={user} setUser={setUser} />
            <UserRegister user={user} setUser={setUser} />
        </NavContainer>
    )
}

export default Navbar;



const NavContainer = styled.nav`

    overflow: hidden;
    background: linear-gradient(90deg, rgb(110, 94, 254, 1) 0%, rgba(73, 63, 252, .7) 100%);
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
    }

    #menu-icon {
        display: none;
    }

    #nav-menu {
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: repeat(5,auto);
        grid-gap: 4px;
        list-style: none;
        text-align: center;
        /* width: 70vw; */
        justify-content: end;
        /* margin-right: 2rem; */
        margin-right: auto;
    }

    ul a {
        /* border: 1px solid red; */
        display: block;
        color: white;
        text-decoration: none;
        padding: 6px;
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



// class Navbar extends Component {
//     state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked})
//     }

//     render() {
//         return(
//             <nav className="NavbarItems">
//                 {/* i tag includes a logo which is imported from fontawesome.com (will be changed when we deicde a logo). "fab fa-react is just the name of the logo that was imported from the website"  */}
//                 <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
//                  {/* The code below allows us to change the 'menu' icon into the 'X' icon when it is clicked.
//                      The i tag below allows us to import the 'X' icon and the 'menu' icon, which you can see in the navbar when in mobile version. */}
//
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <a className={item.cName} href={item.url}>
//                                 {item.title}
//                                 </a>
//                             </li>
//                         )
//                     })} 
//                 </ul>
//                 {/* <Button>Sign up</Button> */}
//                 <RegisterUser />
//             </nav>
//         )
//     }
// }

// export default Navbar