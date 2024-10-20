import './componentfilters.css';
import { GrAdd } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { useState, useEffect,useMemo } from 'react';
import { FaRegStar } from "react-icons/fa";
import { PiCurrencyInr } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Componentfilters = () => {
    const [getData, setData] = useState([]);
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate('/thankyoupage');
    };
    const Itemsarry = useMemo(()=>[
        {
          "id": 1,
          "image_url": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
          "plant": "View Product",
          "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
          
          
        },
        {
          "id": 2,
          "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/What-Are-Plants_x8kisp.jpg",
          "plant": "View Product",
           "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
        },
        {
          "id": 3,
          "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/GettyImages-1494628683-c0c2b1897bee4a4eaf21e851d36c2f02_vcoj1f.jpg",
          "plant": "View Product",
          "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
          
        },
        {
          "id": 4,
          "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338217/Best_Feng_Shui_Plants_for_Home_and_Office_qz1wxa.jpg",
          "plant": "View Product",
          "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
          
        },
        {
          "id": 5,
          "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338214/insulin-plant-flower-leaves-nature-outdoors-732x549-thumbnail_jfjpuh.jpg",
          "plant": "View Product",
          "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
          
        },
        {
            "id": 6,
            "image_url": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 7,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/What-Are-Plants_x8kisp.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 8,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/GettyImages-1494628683-c0c2b1897bee4a4eaf21e851d36c2f02_vcoj1f.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 9,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338217/Best_Feng_Shui_Plants_for_Home_and_Office_qz1wxa.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 10,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338214/insulin-plant-flower-leaves-nature-outdoors-732x549-thumbnail_jfjpuh.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 11,
            "image_url": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 12,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/What-Are-Plants_x8kisp.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 13,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/GettyImages-1494628683-c0c2b1897bee4a4eaf21e851d36c2f02_vcoj1f.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 14,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338217/Best_Feng_Shui_Plants_for_Home_and_Office_qz1wxa.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 15,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338214/insulin-plant-flower-leaves-nature-outdoors-732x549-thumbnail_jfjpuh.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
          },
          {
            "id": 16,
            "image_url": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 17,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/What-Are-Plants_x8kisp.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          },
          {
            "id": 18,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338215/GettyImages-1494628683-c0c2b1897bee4a4eaf21e851d36c2f02_vcoj1f.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  "249",
            
          },
          {
            "id": 19,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338217/Best_Feng_Shui_Plants_for_Home_and_Office_qz1wxa.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  "4.2",
          "Prize" :  '249',
            
          },
          {
            "id": 20,
            "image_url": "https://res.cloudinary.com/dmgvoecio/image/upload/v1729338214/insulin-plant-flower-leaves-nature-outdoors-732x549-thumbnail_jfjpuh.jpg",
            "plant": "View Product",
            "plant_name": "Monsterra",
          "plant_text" : "Indoor plant low maintanance",
          "rating" :  '4.2',
          "Prize" :  '249',
            
          }

      ]);

    useEffect(() => {
        setData(Itemsarry);
    }, [Itemsarry]);

    return (
        <div className='itemscontainer'>
            <div className="filter_card">
                <div className='filterdata'>
                    <p>Filter</p>
                    <p>CLEAR ALL</p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Types of Plants</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Price</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Nursery</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Ideal plants Location</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Indoor/Outdoor</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Maintenance</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Plant Size</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Water Schedule</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Colour</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Seasonal</p>
                    <p><GrAdd /></p>
                </div>
                <hr />
                <div className='filterdata'>
                    <p>Light Efficient</p>
                    <p><GrAdd /></p>
                </div>
            </div>

            <div className='products'>
                300 Products 
                <select className='sort'>
                    <option>Sort By</option>
                    <option>Flowers</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                </select>

                <div className='product-card'>
                    
                    {getData.map((item) => (
                        <div key={item.id} className='product-item'>
                          <div className='image'>
                            <p className='like'><FcLike /></p>
                            <img className='img-width' src={item.image_url} alt='Loading' />
                            <p className='view-item' onClick={handleProduct}>View Product</p>
                            </div>
                          <div className='plant-details'>                          
                          <h3>{item.plant_name}</h3>
                          <p>{item.plant_text}</p>
                          <p className='fontsize'><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> {item.rating}</p>
                          <p className='fontsize'><PiCurrencyInr />249</p>
                          <div className='btn-card'><button className='addcartbtn'><FaMinus/> Add cart<FaPlus/></button>
                          <button className='buynowbtn'>Buy on Rent</button></div>
                          
                         
                      </div>
                        </div>
                        
                    ))}
                
                </div>
                
                    
            </div>
            
        </div>
        
    );
};
