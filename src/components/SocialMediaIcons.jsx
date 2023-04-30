import React from 'react'
import linkedInIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import instagramIcon from '../assets/instagram.png'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a href="https://www.linkedin.com" target='_blank' rel='noreferrer' className='hover:opacity-50 transition duration-500'>
            <img src={linkedInIcon} alt="linkedin-link" />
        </a>
        <a href="https://github.com/ediwnll" target='_blank' rel='noreferrer' className='hover:opacity-50 transition duration-500'>
            <img src={githubIcon} alt="github-link" />
        </a>
        <a href="https://www.instagram.com/zx.edwin/" target='_blank' rel='noreferrer' className='hover:opacity-50 transition duration-500'>
            <img src={instagramIcon} alt="twitter-link" />
        </a>

    </div>
  )
}

export default SocialMediaIcons