import React from 'react';
import { SwiperItemType } from '../types';
import './SwiperItem.css';

function SwiperItem({ imageSrc, imageAlt, elements }: SwiperItemType) {
  return (
    <li className="swiper-item">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="swiper-img"
        draggable={false}
      />
      {elements}
    </li>
  );
}

export default SwiperItem;
