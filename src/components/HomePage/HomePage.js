import React, { Fragment } from 'react';
import HeroBackdrop from './HeroBackdrop';
import ThrillerGenres from './ThrillerGenres';
import Action from './Action';
import AnimationGenres from './AnimationGenre';
import RomanceGenres from './RomanceGenre';

const HomePage = () => {
    return (
        <Fragment>
            <HeroBackdrop/>
            <ThrillerGenres/>
            <Action/>
            <AnimationGenres/>
            <RomanceGenres/>
        </Fragment>
    );
};

export default HomePage;