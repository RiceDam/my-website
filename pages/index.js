import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Featured from "../components/featured";
import Footer from "../components/footer";
import Projects from "../components/projects";
import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <div id="home">
      <div
        id="title"
        className="h-screen md:h-5/6 md:py-40 lg:h-screen lg:my-0"
      >
        <Header></Header>

        <div
          id="content"
          className="pt-20 h-full flex bg-transparent content-center justify-center lg:content-start lg:justify-start lg:mx-20"
        >
          <Hero></Hero>
        </div>
      </div>

      <div id="more-content">
        <About></About>
        <Featured></Featured>
        <Projects></Projects>
      </div>

      <Footer></Footer>
    </div>
  );
}
