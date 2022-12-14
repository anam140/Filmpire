import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsBookmark, BsDownload, BsPeople } from 'react-icons/bs';
import { RiCompassLine, RiTimerLine } from 'react-icons/ri';

export const menu = [
  {
    title: 'Menu',
    items: [
      { link: '/', label: 'Home', icon: AiOutlineHome },
      { link: '/discovery', label: 'Discovery', icon: RiCompassLine },
      { link: '/community', label: 'Community', icon: BsPeople },
      { link: '/coming-soon', label: 'Coming Soon', icon: RiTimerLine },
    ],
  },

  {
    title: 'Library',
    items: [
      { link: '/recent', label: 'Recent', icon: AiOutlineClockCircle },
      { link: '/bookmarked', label: 'Bookmarked', icon: BsBookmark },
      { link: '/top-rated', label: 'Top rated', icon: AiOutlineStar },
      { link: '/downloaded', label: 'Downloaded', icon: BsDownload },
    ],
  },
];

export default menu;
