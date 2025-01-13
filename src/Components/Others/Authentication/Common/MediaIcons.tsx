import { FaceBookSVG, GoogleSVG, InstagramSVG, TwitterSVG } from "@/svgIcons";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "react-toastify";

const MediaIcons = () => {
  const handlesubmit = () => {
    toast.error("This is only demo purpose, click on the Sign In button to login.");
  };
  return (
    <ul className="simple-list login-social flex-row">
      <li>
        <a onClick={handlesubmit}>
          <GoogleSVG />
        </a>
      </li>
      <li>
        <a onClick={handlesubmit}>
          <TwitterSVG />
        </a>
      </li>
      <li>
        <a onClick={handlesubmit}>
          <InstagramSVG />
        </a>
      </li>
      <li>
        <a onClick={handlesubmit}>
          <FaceBookSVG />
        </a>
      </li>
    </ul>
  );
};

export default MediaIcons;
