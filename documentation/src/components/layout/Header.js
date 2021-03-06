import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Treasure Hunt
      </div>
      <div className="flex mt-4 sm:mt-0">
      <AnchorLink className="px-4" href="#start">
          Start
        </AnchorLink>
        <AnchorLink className="px-4" href="#highlights">
          Highlights
        </AnchorLink>
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#ideas">
          About the Project 
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm" onClick={ () => window.open("https://github.com/netmedianer-GmbH/treasure-hunt/", "_blank")}>View at github</Button>
      </div>
    </div>
  </header>
);

export default Header;
