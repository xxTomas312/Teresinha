import React from 'react';
import { SwiperItemType } from '../types';
import './SwiperItem.css';

type props = SwiperItemType;

function SwiperItem({ imageSrc, imageAlt }: props) {
  return (
    <li className="swiper-item">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="swiper-img"
        draggable={false}
      />
    </li>
  );
}

export default SwiperItem;
