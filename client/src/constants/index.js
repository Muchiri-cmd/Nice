import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import tiktok from '../assets/tiktok.svg'

const navLinks = [
  {
    title:"Home",
    path:"/"
  },
  {
    title:"Men",
    path:"/men"
  },
  {
    title:"Women",
    path:"/women"
  },
  {
    title:"Kids",
    path:"/kids"
  }
]
const footer_links = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Categories",
      "Exchange Policy",
      "Order Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Terms and Conditions",
      "Special Offers",
      "Customer Reviews",
    ],
  },
];

const footer_contact_info = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "nice@gmail.com" },
  ],
};

const socials = {
  title: "Social",
  links: [
    facebook,
    instagram,
    twitter,
    tiktok,
    youtube,
  ],
};

export default socials


export { navLinks,socials,footer_links,footer_contact_info };