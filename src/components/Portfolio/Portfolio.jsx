import React, { useState, useEffect } from "react";
import "./portfolio.css";
import "aos/dist/aos.css";
import AOS from "aos";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import img6 from "../../assets/images/img-6.jpg";
import img7 from "../../assets/images/img-7.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  const portfolioItems = [
    { id: 1, category: "All", img: [img2, img3, img5, img7] },
    { id: 2, category: "Web Design", img: [img5, img6] },
    { id: 3, category: "Graphic Design", img: [img1, img2] },
    { id: 4, category: "UI/UX Design", img: [img7, img3] },
    { id: 5, category: "Web Developer", img: [img3, img4] },
  ];

  const categories = ["All", "Web Design", "Graphic Design", "UI/UX Design", "Web Developer"];
  const filteredItems = portfolioItems.find((item) => item.category === selectedCategory) || portfolioItems[0];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="portfolio">
      <h2 className="portfolio-heading" data-aos="fade-up">
        Our Projects
        <div
          className="bg-CustomYellow mt-3 mb-6 h-1 w-32"
          data-aos="fade-right"
        ></div>
      </h2>
      <p className="portfolio-para" data-aos="fade-up">
        Explore our portfolio showcasing a diverse range of projects in web design, graphic design, UI/UX, and web development.
      </p>
      <div className="categories" data-aos="fade-up">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryChange(category)}

          >
            {category}
          </button>
        ))}
      </div>
      <div className={`portfolio-items ${isAnimating ? "fade-out" : "fade-in"}`}>
        {filteredItems.img.map((image, index) => (
          <div key={index} className="portfolio-item" data-aos="fade-up">
            <img src={image} alt={selectedCategory} className="portfolio-item-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
