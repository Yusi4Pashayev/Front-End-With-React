import React from "react";
import ehp from "./download.png";

import {
  AiFillApple,
  AiFillAndroid,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";
import HorizantalList from "./HorizantalList";

const footerMenuList = [
  { id: Math.random(), title: "Kartlar", list: ["Kartlar", "Debet", "Digər"] },
  { id: Math.random(), title: "Kreditlər", list: ["Nağd", "Mikro", "İpoteka"] },
  { id: Math.random(), title: "Əmanətlər", list: ["Müddətli", "Proqressiv", "Yığım", "Faizlər əvvəlcədən", "Topla"] },
  { id: Math.random(), title: "Köçürmələr", list: ["Ölkəxarici", "Ölkədaxili"] },
  { id: Math.random(), title: "Rəqəmsal bankçılıq", list: ["UBank", "İnternet bankçılıq", "Şəxsi kabinet", "Unimiles şəxsi kabinet", "Onlayn kredit ödənişi", "Onlayn kredit müraciəti"] },
  { id: Math.random(), title: "Əlavə xidmətlər", list: ["Hesablaşma-kassa xidməti", "POS terminal / Smart kassa", "Depozit qutuları", "Onlayn ticarət (eCommerce)"] },
  { id: Math.random(), title: "Bank Haqqında", list: ["Rəhbərlik", "Müxbir hesablar", "Təklif və Şikayətlər", "İnsan resursları", "Hesabatlar", "Digər sənədlər"] },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__area">
          <div className="footer__menu">
            {footerMenuList.map((item) => {
              return (
                <HorizantalList
                  key={item.id}
                  title={item.title}
                  list={item.list}
                />
              );
            })}
          </div>
          <div className="footer__social">
            <a href="#" className="apple">
              <AiFillApple />
            </a>
            <a href="#" className="android">
              <AiFillAndroid />
            </a>
            <a href="#" className="facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="twitter">
              <AiOutlineTwitter />
            </a>
            <a href="#" className="linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" className="youtube">
              <AiFillYoutube />
            </a>
            <a href="#" className="instagram">
              <AiFillInstagram />
            </a>
            <a href="#" className="teelegram">
              <FaTelegramPlane />
            </a>
          </div>
          <hr />
          <div className="footer__cbar">
            <div className="footer__cbar--cr">
              <span>© 2023, Unibank - Sənin Bankın</span>
              <div>
                Unibank Azərbaycan Respublikası Mərkəzi Bankının 73 saylı 14
                dekabr 2010-cu il tarixli lisenziyası əsasında fəaliyyət
                göstərir.
                <br /> Bütün hüquqlar qorunur.
              </div>
            </div>
            <div className="footer__cbar--partner">
              <a href="#">
                <img src="https://unibank.az/assets/images/adif.png" alt="" />
              </a>
              <a href="#">
                <img
                  src={ehp}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://unibank.az/assets/images/infobank.png?v4"
                  alt=""
                />
              </a>
              <a href="#">
                <img src="https://unibank.az/assets/images/msp.png?v5" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
