import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsDownload, BsPeople } from 'react-icons/bs';
import { GrBookmark } from 'react-icons/gr';
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
      { link: '/bookmarked', label: 'Bookmarked', icon: GrBookmark },
      { link: '/top-rated', label: 'Top rated', icon: AiOutlineStar },
      { link: '/downloaded', label: 'Downloaded', icon: BsDownload },
    ],
  },
];

export default menu;
