import { Col, Row } from 'antd';
import React from 'react';
import { useMain } from '../../context/MainContext'
import facebookIcon from '../../assets/images/facebook.png'; // Import icons for social media platforms
import instagramIcon from '../../assets/images/instagram.png';
import lineIcon from '../../assets/images/line.png';
import XIcon from '../../assets/images/x.png';
import CustomButton from "../../components/button/CustomButton";
import imageSrc from './images.jpg'; // Import your image with the correct path
import './style.css'; // Import your CSS file with the correct path
import { useState, useCallback } from "react";
import { getWaterFestivalBlessingWord } from "../../components/modal/configure/api";
import { useNavigate } from 'react-router-dom';
import { navigateTo } from '../../utils/common'

const Result = () => {
  const { language, translations } = useMain();
  const [blessingWord, setBlessingWord] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigateTo(navigate, '/parade');
  }

  useCallback(async () => {
    try {
      const params = {
        "name": "string",
        "location": "string",
        "celebrateWith": "string",
        "food": "string",
        "activity": "string"
      }
      const response = await getWaterFestivalBlessingWord("request_id", "session_id", params);
      if (response.message !== undefined) {
        console.log("error");
      } else {
        setBlessingWord(response.blessingWord);
      }
    } catch (e) { console.log("xxxx"); }
  }, []);


  return (
    <>
      <Row>
        <Col span={24} align='middle'>
          <p className='title'>{translations[language].result.title}</p>
        </Col>
        <Col align='middle' span={24}>
          <img src={imageSrc} alt="Description of the image" className='image' />
        </Col>
        <Col span={24} align='middle'>
          <p className='send-bless'>{blessingWord} - Your Songkran Gen AI blessing here</p>
        </Col>
        <Col span={24} align='middle'>
          <p className='share-text'>{translations[language].result.social}</p>
        </Col>
        <Col span={24} align='middle'>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com" >
            <img src={facebookIcon} alt="Share on Facebook" className='icon-social' />
          </a>
          <a href="https://www.instagram.com" >
            <img src={instagramIcon} alt="Share on Instagram" className='icon-social' />
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=URL_OF_YOUR_IMAGE" >
            <img src={lineIcon} alt="Share on Line" className='icon-social' />
          </a>
          <a href="https://X.com/intent/tweet?url=https://yourwebsite.com&text=Your%20Songkran%20water%20festival%20in%202024" >
            <img src={XIcon} alt="Share on X" className='icon-social' />
          </a>
        </Col>
        <Col span={24} align='middle'>
            <CustomButton
              style="white-style"
              text={translations[language].result.save}
              onClick={() => handleClick()}
              size="large"
            />
            <CustomButton
              style="pink-style"
              text={translations[language].result.done}
              onClick={() => handleClick()}
              size="large"              
            />
        </Col>
      </Row>
    </>
  )
}



export default Result;
