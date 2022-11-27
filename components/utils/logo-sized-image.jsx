import Image from 'next/image';
import React from 'react';

export default function LogoSizedImage(props) {
  return (
    <div>
        <Image
        className={props.imgClassName}
        layout="fill"
        objectFit="contain"
        priority
        src={props.src}
        alt={props.alt}
      />
    </div>
  )
}
