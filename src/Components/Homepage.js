import { Header } from "./Header/Header"
import './homepage.css'
import 'primeicons/primeicons.css';
import { Contentmini } from "./Contentmini/Contentmini";
import {Slider} from './Slider/Slider'
import { Componentfilters } from "./Componentfilters/Componentfilters";
import { Footercard } from "./Footercard/Footercard";

export const Homepage = () =>{
    return<>
        <Header/>
        <div>
        <div className="services">
        <h2>MNP Plants</h2>
        <p>Home</p>
        <p>plants&pots</p>
        <select name='Tools'>
            <option>Tools</option>
        </select>
        <select name='Our Services'>
            <option>Our Services</option>
        </select>
        <p>Blog</p>
        <p>OurStory</p>
        <p>FQSA</p>
        <div className="myprofile"><span className="pi pi-user" style={{ fontSize: '1.5rem' }}></span><span>MyProfile</span></div>
        <div className="myprofile"><span className="pi pi-cart-arrow-down" style={{ fontSize: '1.5rem' }}></span><span>Cart</span></div>

        </div>
        <div className="searchbar">
        <span className="pi pi-search"></span><input type="search" placeholder="Search Plant" className="searchtag"/>
        <span className="pi pi-trophy"></span>
        </div>
        </div>
        <Contentmini/>
        <div className="slids">
        <h1>Nursery</h1>
        <div>
        <Slider/>
        </div>

            <div className="Componentfilter-box">
                <Componentfilters/>
                <div className='btn-box'> <button className='viewmorebtn'>View More</button></div>
            </div>

        </div>

        <Footercard/>
        
    </>
    
}
