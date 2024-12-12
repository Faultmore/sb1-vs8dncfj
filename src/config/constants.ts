import { FaDiscord, FaTiktok } from 'react-icons/fa';
import type { Department, SocialLink } from '../types';

export const SITE_NAME = 'Coastal State Roleplay';
export const SITE_DESCRIPTION = 'Experience authentic Southern California roleplay in our premier FiveM community';
export const DISCORD_URL = 'https://discord.gg/your-server';
export const TIKTOK_URL = 'https://tiktok.com/@your-account';

export const DEPARTMENTS: Department[] = [
  {
    id: 'sheriff',
    name: "Sheriff's Department",
    description: 'Dedicated to maintaining law and order in our community.',
    imageUrl: '/images/departments/sheriff.jpg'
  },
  {
    id: 'fire',
    name: 'Fire Department',
    description: 'First responders providing emergency medical and fire services.',
    imageUrl: '/images/departments/fire.jpg'
  },
  {
    id: 'dispatch',
    name: 'Communications',
    description: 'The vital link between citizens and emergency services.',
    imageUrl: '/images/departments/dispatch.jpg'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'discord',
    name: 'Discord',
    url: DISCORD_URL,
    icon: FaDiscord
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: TIKTOK_URL,
    icon: FaTiktok
  }
];