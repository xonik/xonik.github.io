import React from 'react';
import classNames from 'classnames';
import './ImageWithDescription.scss';

interface Props {
  src: string,
  label: string,
  className?: string,
}

const ImageWithDescription = ({src, label, className}: Props) => {
  return <div className={classNames('image-with-description', className)}>
    <img src={src} alt={label}/><br/>
    <div className="label">{label}</div>
  </div>
};

export default ImageWithDescription;
