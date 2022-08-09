import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Group, Avatar } from '@mantine/core';
import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import avatarImage from '@/assets/images/avatar.jpg';

const RightSection: React.FC = () => {
  return (
    <Group>
      <AiOutlineBell fontSize="22px" />
      <Avatar radius="xl" src={avatarImage.src} alt="it's me" />
      <ThemeSwitcher />
    </Group>
  );
};
export default RightSection;
