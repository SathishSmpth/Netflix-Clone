import React, { Fragment } from "react";
import HeroBackdrop from "./HeroBD";
import ThrillerGenres from "./Thriller";
import ActionGenres from "./Action";
import AnimationGenres from "./Animation";
import RomanceGenres from "./Romance";

const HomePage = () => {
  return (
    <Fragment>
      <HeroBackdrop />
      <ThrillerGenres />
      <ActionGenres />
      <AnimationGenres />
      <RomanceGenres />
    </Fragment>
  );
};

export default HomePage;
