import React from "react";

import Styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Recommended from "../components/Recommended";
import Testamony from "../components/Testamony";

import img1 from "../assets/books/books/book1.png";
import img2 from "../assets/books/books/book2.png";
import img3 from "../assets/books/books/book3.png";
import img4 from "../assets/books/books/book4.png";
import img5 from "../assets/books/books/book5.png";
import img6 from "../assets/books/books/book6.png";
import img7 from "../assets/books/books/book7.png";
import img8 from "../assets/books/books/book8.png";

import profile1 from "../assets/books/profiles/profile1.png";
import profile2 from "../assets/books/profiles/profile2.png";
import profile3 from "../assets/books/profiles/profile3.png";
import profile4 from "../assets/books/profiles/profile4.png";
import profile5 from "../assets/books/profiles/profile5.png";
import profile6 from "../assets/books/profiles/profile6.png";
import profile7 from "../assets/books/profiles/profile7.png";
import profile8 from "../assets/books/profiles/profile8.png";

import person1 from "../assets/testamonies/person1.png";
import person2 from "../assets/testamonies/person2.png";
import person3 from "../assets/testamonies/person3.png";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div className={Styles.container}>
        <Header />
        <Navigation />
        <Hero />
        <Slider
          mainHeading="Popular Now"
          subHeading="View All"
          books={{
            books: [
              {
                image: img1,
                title: "selena",
                author: "Tere Liye",
                userName: "Andre Syak",
                userImg: profile1,
                date: "A week ago",
              },
              {
                image: img2,
                title: "How To Master Your Habits",
                author: "Felix Y Siauw",
                userName: "John Lucas",
                userImg: profile2,
                date: "Five Days Ago",
              },
              {
                image: img3,
                title: "Bingtang",
                author: "Tere Liye",
                userName: "Ade Barkah",
                userImg: profile3,
                date: "6 Months Ago",
              },
              {
                image: img4,
                title: "Start With Why",
                author: "Felix Y Siauw",
                userName: "Felix Y Siauw",
                userImg: profile4,
                date: "A week ago",
              },
            ],
          }}
        />
        <Slider
          mainHeading="Latest Books"
          subHeading="View All"
          books={{
            books: [
              {
                image: img6,
                title: "The compountd effect",
                author: "Drren hardy",
                userName: "Andre Syak",
                userImg: profile5,
                date: "A week ago",
              },
              {
                image: img7,
                title: "Build A story Brand",
                author: "Donald Miller",
                userName: "John Lucas",
                userImg: profile6,
                date: "Five Days Ago",
              },
              {
                image: img8,
                title: "Crushing It",
                author: "Gary veynerchuck",
                userName: "Ade Barkah",
                userImg: profile7,
                date: "6 Months Ago",
              },
              {
                image: img5,
                title: "Atomic habits",
                author: "James clear",
                userName: "Felix Y Siauw",
                userImg: profile8,
                date: "A week ago",
              },
            ],
          }}
        />
        <Recommended />
        <div className={Styles.testamonies}>
          <Testamony
            data={{
              img: person1,
              name: "Eka Ardilah",
              testamony:
                "I feel very helpful with all the books provided, so I do my job easily and happily",
            }}
          />
          <Testamony
            data={{
              img: person3,
              name: "Hazar Hamzah",
              testamony: "Thank you. Many good books to accompany everyday",
            }}
          />
          <Testamony
            data={{
              img: person2,
              name: "khoeromnisa",
              testamony: "Thanks team, many recommended books for me to read",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
