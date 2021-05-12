import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "./specialCarousel_img/slide1.jpg";
import img2 from "./specialCarousel_img/slide2.jpg";
import img3 from "./specialCarousel_img/slide3.jpg";
import img11 from "./specialCarousel_img/items/slide1/img11";
import img12 from "./specialCarousel_img/items/slide1/img12";
import img13 from "./specialCarousel_img/items/slide1/img13";
import img21 from "./specialCarousel_img/items/slide2/img21";
import img22 from "./specialCarousel_img/items/slide2/img22";
import img23 from "./specialCarousel_img/items/slide2/img23";
import img31 from "./specialCarousel_img/items/slide3/img31";
import img32 from "./specialCarousel_img/items/slide3/img32";
import img33 from "./specialCarousel_img/items/slide3/img33";
import "./SpecialCarousel.css";

const SpecialCarousel = () => {
  let specC;
  let [walkDist, setWalkDist] = useState(0);
  let [counter, setCounter] = useState(0);
  let scpItemsContent = {
    slide1: {
      item1: {
        img: img11,
        title:
          "TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz",
        desc: "R$ 3.989,90 ",
        ID: "60999c26c4846f0004a77f5d",
      },
      item2: {
        img: img12,
        title:
          "Mesa de Centro Retangular 1 Prateleira Antuérpia Siena Móveis Preto/Branco",
        desc: "R$ 182,32",
        ID: "609af3c72753d700040c2ee5",
      },
      item3: {
        img: img13,
        title: "Sofá 4 Lugares Living Base de Madeira Linho Cotton",
        desc: "R$ 1.328,99 ",
        ID: "60975c423648320004e5f53f",
      },
    },
    slide2: {
      item1: {
        img: img21,
        title: "White dinner table Coimbra",
        desc: "R$ 512,99",
        ID: "609af4212753d700040c2ee6",
      },
      item2: {
        img: img22,
        title: "Electric Oven Sonetto",
        desc: "R$ 699,90",
        ID: "609af4872753d700040c2ee7",
      },
      item3: {
        img: img23,
        title: "Kit Cozinha 3 Portas Vidro 3 Gavetas Telasul Star",
        desc: "R$ 688,00",
        ID: "609af50f2753d700040c2ee8",
      },
    },
    slide3: {
      item1: {
        img: img31,
        title: "Cama Casal Madri Espresso Móveis Canion - Marrom Cacau",
        desc: "R$ 387,99",
        ID: "5f6ccf7f2c135c3ee6ad7cec",
      },
      item2: {
        img: img32,
        title:
          "Guarda Roupa Casal Munique e Armário Multiuso Elite Brilho - BRANCO",
        desc: "R$ 753,63",
        ID: "609af2a72753d700040c2ee2",
      },
      item3: {
        img: img33,
        title: "Mesa de Cabeceira 4 Gavetas Luxo II EJ Móveis Branco",
        desc: "R$ 140,90",
        ID: "609af3392753d700040c2ee3",
      },
    },
  };

  let [currentImg, setCurrentImg] = useState([]); // = useState([scpItemsContent.slide1.item1.img, scpItemsContent.slide1.item2.img, scpItemsContent.slide1.item3.img]);
  let [currentTitle, setCurrentTitle] = useState([]);
  let [currentDesc, setCurrentDesc] = useState([]);
  let [currentID, setCurrentID] = useState([]);
  let prodPage = "/product/" + "5f6ccf7f2c135c3ee6ad7cec";

  useEffect(() => {
    specC = document.getElementsByClassName("special-carousel");
    setWalkDist((prevValue) => prevValue - specC[0].offsetWidth);
    specC[0].style.transform = "translateX(" + -specC[0].offsetWidth + "px)";
    setCounter((prevValue) => prevValue + 1);
  }, []);

  useEffect(() => {
    specC = document.getElementsByClassName("special-carousel");
    specC[0].style.transform = "translateX(" + walkDist + "px)";
    updateImg(counter);
  }, [walkDist]);

  const updateImg = (counter) => {
    if (counter === 1) {
      setCurrentImg([
        scpItemsContent.slide1.item1.img,
        scpItemsContent.slide1.item2.img,
        scpItemsContent.slide1.item3.img,
      ]);
      setCurrentTitle([
        scpItemsContent.slide1.item1.title,
        scpItemsContent.slide1.item2.title,
        scpItemsContent.slide1.item3.title,
      ]);
      setCurrentDesc([
        scpItemsContent.slide1.item1.desc,
        scpItemsContent.slide1.item2.desc,
        scpItemsContent.slide1.item3.desc,
      ]);
      setCurrentID([
        scpItemsContent.slide1.item1.ID,
        scpItemsContent.slide1.item2.ID,
        scpItemsContent.slide1.item3.ID,
      ]);
    } else if (counter === 2) {
      setCurrentImg([
        scpItemsContent.slide2.item1.img,
        scpItemsContent.slide2.item2.img,
        scpItemsContent.slide2.item3.img,
      ]);
      setCurrentTitle([
        scpItemsContent.slide2.item1.title,
        scpItemsContent.slide2.item2.title,
        scpItemsContent.slide2.item3.title,
      ]);
      setCurrentDesc([
        scpItemsContent.slide2.item1.desc,
        scpItemsContent.slide2.item2.desc,
        scpItemsContent.slide2.item3.desc,
      ]);
      setCurrentID([
        scpItemsContent.slide2.item1.ID,
        scpItemsContent.slide2.item2.ID,
        scpItemsContent.slide2.item3.ID,
      ]);
    } else if (counter === 3) {
      setCurrentImg([
        scpItemsContent.slide3.item1.img,
        scpItemsContent.slide3.item2.img,
        scpItemsContent.slide3.item3.img,
      ]);
      setCurrentTitle([
        scpItemsContent.slide3.item1.title,
        scpItemsContent.slide3.item2.title,
        scpItemsContent.slide3.item3.title,
      ]);
      setCurrentDesc([
        scpItemsContent.slide3.item1.desc,
        scpItemsContent.slide3.item2.desc,
        scpItemsContent.slide3.item3.desc,
      ]);
      setCurrentID([
        scpItemsContent.slide3.item1.ID,
        scpItemsContent.slide3.item2.ID,
        scpItemsContent.slide3.item3.ID,
      ]);
    } else {
      setCurrentImg([
        scpItemsContent.slide1.item1.img,
        scpItemsContent.slide1.item2.img,
        scpItemsContent.slide1.item3.img,
      ]);
      setCurrentTitle([
        scpItemsContent.slide1.item1.title,
        scpItemsContent.slide1.item2.title,
        scpItemsContent.slide1.item3.title,
      ]);
      setCurrentDesc([
        scpItemsContent.slide1.item1.desc,
        scpItemsContent.slide1.item2.desc,
        scpItemsContent.slide1.item3.desc,
      ]);
      setCurrentID([
        scpItemsContent.slide1.item1.ID,
        scpItemsContent.slide1.item2.ID,
        scpItemsContent.slide1.item3.ID,
      ]);
    }
  };

  const nextFcn = () => {
    specC = document.getElementsByClassName("special-carousel");
    if (counter < specC[0].children.length - 1) {
      specC[0].style.transition = "1s ease all";
      setWalkDist((prevValue) => prevValue - specC[0].offsetWidth);
      setCounter((prevValue) => prevValue + 1);
    }
    //counterTeste += 1;*/
  };

  const prevFcn = () => {
    specC = document.getElementsByClassName("special-carousel");
    if (counter > 0) {
      specC[0].style.transition = "1s ease all";
      setWalkDist((prevValue) => prevValue + specC[0].offsetWidth);
      setCounter((prevValue) => prevValue - 1);
    }
  };

  const transEnd = () => {
    specC = document.getElementsByClassName("special-carousel");
    specC[0].style.transition = "none";
    if (counter === specC[0].children.length - 1) {
      setWalkDist(-specC[0].offsetWidth);
      setCounter(1);
    }
    if (counter === 0) {
      setWalkDist(-specC[0].offsetWidth * (specC[0].children.length - 2));
      setCounter(specC[0].children.length - 2);
    }
  };

  return (
    <div className="special-carousel-wrapper">
      <div className="special-carousel-container">
        <div className="special-carousel" onTransitionEnd={transEnd}>
          <img src={img3} />
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
        </div>
      </div>
      <div className="special-carousel-products-container">
        <Link to={"/product/" + currentID[0]}>
          <div className="special-carousel-products sc-prod1">
            <img className="scp-img" src={currentImg[0]}></img>
            <div className="scp-content">
              <h1 className="scp-title">{currentTitle[0]}</h1>
              <p className="scp-desc">{currentDesc[0]}</p>
            </div>
          </div>
        </Link>
        <Link to={"/product/" + currentID[1]}>
          <div className="special-carousel-products sc-prod2">
            <img className="scp-img" src={currentImg[1]}></img>
            <div className="scp-content">
              <h1 className="scp-title">{currentTitle[1]}</h1>
              <p className="scp-desc">{currentDesc[1]}</p>
            </div>
          </div>
        </Link>
        <Link to={"/product/" + currentID[2]}>
          <div className="special-carousel-products sc-prod3">
            <img className="scp-img" src={currentImg[2]}></img>
            <div className="scp-content">
              <h1 className="scp-title">{currentTitle[2]}</h1>
              <p className="scp-desc">{currentDesc[2]}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="arrow-container left" onClick={prevFcn}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div
        className="arrow-container right"
        onClick={() => {
          nextFcn();
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default SpecialCarousel;
