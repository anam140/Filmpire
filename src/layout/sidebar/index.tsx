import { menus } from '@/data';
import { Box, Group, Navbar, Title } from '@mantine/core';
import { BiLogOut } from 'react-icons/bi';
import { useStyles } from './asideStyles';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const { classes } = useStyles();

  return (
    <Navbar height="100vh" width={{ sm: 220 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={2}>
            <span style={{ color: 'var(--accent-clr)' }}>FILM</span>PIRE
          </Title>
        </Group>

        {menus.map((menu) => (
          <MenuItem key={menu.title} menu={menu} />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a className={classes.link} onClick={(event) => event.preventDefault()}>
          <BiLogOut className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
