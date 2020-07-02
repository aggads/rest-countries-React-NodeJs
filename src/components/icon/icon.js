import React from 'react';
import './icon.css';
import lemon from '../../assets/images/lemon.svg'
import cherry from '../../assets/images/cherry.svg'
import apple from '../../assets/images/apple.svg'
import banana from '../../assets/images/banana.svg'

const iconTypes = {
  lemon: lemon,
  cherry: cherry,
  apple: apple,
  banana: banana
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;