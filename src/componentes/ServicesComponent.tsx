import React, { useRef } from 'react';
import { getRefValue, useSatateRef } from '../lib/hooks';
import { SwiperItemType } from '../types';
import { url } from 'inspector';

export default function ServicesComponent({ images, caption }: any) {
  return (
    <>
      <div className="grid_item">
        <div style={{ backgroundImage: `url(${images})` }}>
          {''}
          <h2 className="caption_hover">{caption}</h2>
        </div>
      </div>
    </>
  );
}
