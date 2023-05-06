import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  return (
    <>
      <img
        src="https://img.shields.io/badge/Made%20With-ReactJS-blue?style=for-the-badge&logo=react"
        alt="javascript-badge"
        style={{ marginTop: "1rem" }}
      />
      <a
        href="https://github.com/Mayuradlak123"
        target="_blank"
        style={{ marginTop: "5px" }}

      >
        <img
          src="https://img.shields.io/badge/On%20Github-Mayuradlak123-orange?style=for-the-badge&logo=github"
          alt="github-badge"
        />
      </a>
      <p>
        Copyrights &copy; 2023. Made by <span>💙</span>
      </p>
    </>
  );
};

export default Footer;
