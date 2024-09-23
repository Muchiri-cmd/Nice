import { Link } from 'react-router-dom'
import { footer } from '../assets'
import { socials,footer_contact_info,footer_links } from '../constants';

const FooterColumn = ({title,children}) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}
const Footer = () => {
  return (
    <footer className='flexCenter pb-24 pt-20'>
      <div className='max-padd-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <div className='max-w-72'>
            <Link
              to={'/'}
              className='mb-10 bold-28'
            ><span className='bold-36 text-secondary'>N</span>ice Boutique</Link>
            <div className='mb-8'>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eligendi sunt?</p>
              <img src={footer} alt="" className='rounded-md mt-6 w-44 shadow-md'/>
            </div>
          </div>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>{footer_links.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                {col.links.map((link) => (
                  <Link to={'/'} key={link}>{link}</Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
          <div className='flex flex-col gap-4 md:flex-col lg:flex-row'>
            <FooterColumn title={footer_contact_info.title}>
              {footer_contact_info.links.map((link) => (
                 <Link to={'/'} key={link.label}>
                  <p>{link.label}:</p>
                  <p className='medium-14'>{link.value}</p>
                  </Link>
              ))}
            </FooterColumn>
          </div>
          <div className='flex'>
            <FooterColumn>
              <ul className='flex gap-4'>
                {socials.links.map((link) => (
                  <Link to={'/'} key={link}>
                    <img src={link} alt="social media icon" height={22} width={22}/>
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
          </div>
        </div>
        <div className='border bg-gray-20'> </div>
        <p className='text-center regular-14 text-gray-20'>&copy;2024 Nice Boutique | All rights reserved .</p>      
      </div>
    </footer>
  )
}

export default Footer
