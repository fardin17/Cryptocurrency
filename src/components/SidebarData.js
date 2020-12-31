import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaIcons.FaBorderAll />,
    cName: 'nav-text'
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <GiIcons.GiWallet />,
    cName: 'nav-text'
  },
  {
    title: 'Trade',
    path: '/trade',
    icon: <AiIcons.AiOutlineAreaChart/>,
    cName: 'nav-text'
  },
  {
    title: 'Buy & Sell',
    path: '/buy&sell',
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: 'nav-text'
  },
  {
    title: 'Affliate System',
    path: '/affliate_system',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Charts',
    path: '/charts',
    icon: <AiIcons.AiOutlinePieChart />,
    cName: 'nav-text'
  },
  {
    title: 'Wizards',
    path: '/wizards',
    icon: <FaIcons.FaCoins />,
    cName: 'nav-text'
  },
  {
    title: 'Form',
    path: '/form',
    icon: <RiIcons.RiPagesLine />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FiIcons.FiSettings />,
    cName: 'nav-text'
  },
  


];
