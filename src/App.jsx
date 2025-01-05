import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Slider from "./components/Slider/Slider";
import Cards from "./components/Cards/Cards";
import Online from "./components/OnlineDelivery/Online";
import FooterTop from "./components/FooterTop/FooterTop";
import Footer from "./components/Footer/Footer";

//here i use the concept of state liftining in react for the slide component when it gets clicked then perform some function on the category component using the common state

const App = () => {
  const [slide1, setSlide1] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [slide3, setSlide3] = useState(0);
  const [Categorys, setCategorys] = useState([]);
  const [data, setData] = useState([]);

  console.log(data);

  function nextSlide1() {
    if (Categorys.length - 8 == slide1) return false;
    setSlide1(slide1 + 3);
  }

  function prevSlide1() {
    if (slide1 == 0) return false;

    setSlide1(slide1 - 3);
  }

  function nextSlide2() {
    if (data.length - 1 == slide2) return false;
    setSlide2(slide2 + 3);
  }
  function prevSlide2() {
    if (slide2 == 0) return false;
    setSlide2(slide2 - 3);
  }
  function nextSlide3() {
    if (data.length - 1 == slide2) return false;
    setSlide2(slide2 + 3);
  }
  function prevSlide3() {
    if (slide2 == 0) return false;
    setSlide2(slide2 - 3);
  }

  return (
    <div>
      <Header />
      <Slider
        text="What's on your mind ?"
        nextSlide={nextSlide1}
        prevSlide={prevSlide1}
        appearance={"visible"}
      />
      <Category
        slide={slide1}
        Category={Categorys}
        setCategory={setCategorys}
      />
      <hr />
      <Slider
        text="Top resturants in Mayur Vihar"
        nextSlide={nextSlide2}
        prevSlide={prevSlide2}
        appearance={"visible"}
      />
      <Cards data={data} setData={setData} slide2={slide2} />
      <hr />
      <Slider
        text="Resturants with online food delivery in Mayur Vihar "
        nextSlide={nextSlide3}
        prevSlide={prevSlide3}
        appearance={"hidden"}
      />
      
      <Online data={data} /> 
      <FooterTop />
      <Footer/>     
    </div>
  );
};

export default App;
