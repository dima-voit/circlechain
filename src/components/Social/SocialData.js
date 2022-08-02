import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const socials = [
  {
    id: uuidv4(),
    link: "https://www.facebook.com",
    icon: <AiOutlineFacebook />
  },
  {
    id: uuidv4(),
    link: "https://www.instagram.com",
    icon: <AiOutlineInstagram />
  },
  {
    id: uuidv4(),
    link: "https://www.linkedin.com",
    icon: <AiOutlineLinkedin />
  },
  {
    id: uuidv4(),
    link: "https://www.youtube.com",
    icon: <AiOutlineYoutube />
  }
]

export default socials;