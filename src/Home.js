import React, { useState, useEffect } from 'react';
import './Home.css';
import { nanoid } from 'nanoid';
import Product from './Product';
import products from './data';

const Home = () => {
  const [id] = useState(nanoid);

  return (
    <div className="home-wrapper">
      <header className="home-banner-img" />
      <div className="shadow" />
      <div className="home-row">
        {products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
        <Product
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
        <Product
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
        <Product
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
        <Product
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
