import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  const i = 5;
  return (
    <div className="home-wrapper">
      <header className="home-banner-img" />
      <div className="shadow" />
      <div className="home-row">
        <Product
          id="49534344"
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
        <Product
          id="49534344"
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="49534344"
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
        <Product
          id="49534344"
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
        <Product
          id="49534344"
          title="ewfweef"
          price={239.0}
          rating={5}
          image="https://res.cloudinary.com/dnkftif1n/image/upload/v1607224542/projectsGitHUB/water-gun-vector-7_yh9dfn.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="49534344"
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
