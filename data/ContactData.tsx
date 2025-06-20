import { Mail } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ContactType } from '@/types/index';

const ContactData: ContactType[] = [
  {
    type: 'email',
    icon: Mail,
    title: 'Opportunities',
    description: 'For job, internship, or freelance offers.',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[Opportunity]',
      body: 'Position:\nCompany:\nDetails:\nTimeline:',
    },
  },
  {
    type: 'email',
    icon: Mail,
    title: 'General Inquiry',
    description: 'Mentoring, questions, or collaboration ideas.',
    mailto: {
      email: 'taeeunk1208@gmail.com',
      subject: '[General Inquiry]',
      body: 'Topic:\nContext:\nPreferred Time:\nDetails:',
    },
  },
  {
    type: 'social',
    icon: FaLinkedin,
    title: 'LinkedIn',
    description: 'Connect with me.',
    href: 'https://www.linkedin.com/in/taeeunnkim/',
  },
  {
    type: 'social',
    icon: FaInstagram,
    title: 'Instagram',
    description: 'Follow or DM me.',
    href: 'https://www.instagram.com/taeeun.k__/',
  },
];

export default ContactData;
