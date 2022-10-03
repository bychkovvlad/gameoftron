import React from 'react';
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to="/" className='header_logo_div'>
          <div className='logo_link_wrapper'>
            <div className='header_logo'>
              <img className='logo' src={"../images/logogot.png"} alt="logo" />
            </div>
          </div>
        </Link>
        <div className='header_title'>Encyclopedia of the legendary series</div>
        <div></div>
      </div>
      <div className='border' />
    </>
  );
};
