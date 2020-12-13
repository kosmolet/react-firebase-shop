import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => (
  <div className="home-wrapper">
    <header className="home-banner-img" />
    <div className="shadow" />
    <div className="shop-name">PANDA GUN SHOP</div>
    <div className="home-row">
      {/* {products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))} */}
      <Product
        id="1"
        title="Water Gun TT-1"
        price={239.0}
        rating={5}
        image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607535294/projectsGitHUB/water%20gun%20shop/2020-12-09_18-34-06_p2qqi0.jpg"
      />
      <Product
        id="2"
        title="Water Gun TT-2"
        price={39.0}
        rating={5}
        image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607521244/projectsGitHUB/water%20gun%20shop/wg5_x330ch.jpg"
      />
    </div>
    <div className="home-row">
      <Product
        id="3"
        title="Water Gun TT-3"
        price={44.0}
        rating={4}
        image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607521243/projectsGitHUB/water%20gun%20shop/wg2_cx0qub.jpg"
      />
      <Product
        id="4"
        title="Water Gun TT-4"
        price={343}
        rating={5}
        image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607535147/projectsGitHUB/water%20gun%20shop/wg3_v8yl9v.jpg"
      />
      <Product
        id="5"
        title="Water Gun TT-5"
        price={342.0}
        rating={5}
        image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607535147/projectsGitHUB/water%20gun%20shop/wg8_aqxesk.jpg"
      />
    </div>
    <div className="home-row">
      <Product
        id="6"
        title="Water Gun TT-6"
        price={839.0}
        rating={5}
        image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607521244/projectsGitHUB/water%20gun%20shop/wg7_ufewa6.jpg"
      />
    </div>
  </div>
);

export default Home;
