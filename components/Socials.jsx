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
    path: 'www.linkedin.com/in/divyeshbakaraniya',
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
    path: 'https://www.instagram.com/divyesh_bakaraniya?igsh=MW5vaHVuczcyMnk2ZA==',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return ( <Link href={icon.path} key={index} passHref legacyBehavior>
        <a target='_blank'><div className={`${iconsStyles}`}>{icon.name}</div></a>
        </Link> );
      })}
    </div>
  );
};

export default Socials;