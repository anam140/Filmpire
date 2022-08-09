import { IMenu, IMenuItems } from '@/types';
import { Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useStyles } from './asideStyles';

interface IProps {
  menu: IMenu;
}

const MenuItem: React.FC<IProps> = ({ menu }) => {
  const { classes, cx } = useStyles();
  const router = useRouter();

  return (
    <>
      <Text size={11} color="dimmed" my={6} pl={15}>
        {menu.title}
      </Text>
      {menu.items?.map((item: IMenuItems) => (
        <Link href={item.link} key={item.label} passHref>
          <a
            className={cx(classes.link, {
              [classes.linkActive]: router.pathname === item.link,
            })}
          >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
          </a>
        </Link>
      ))}
    </>
  );
};
export default MenuItem;
