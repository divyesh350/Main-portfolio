'use client'

import { RiYoutubeFill, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiFacebookFill, 
  RiInstagramFill } from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  // {
  //   path: '/',
  //   name: <RiYoutubeFill />,
  // },
  {
    path: 'https://in.linkedin.com/in/divyesh-bakaraniya-733bb825b',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/divyesh350',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/gajjar.divyesh.581?mibextid=ZbWKwL',
    name: <RiFacebookFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return ( <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link> );
      })}
    </div>
  );
};

export default Socials;