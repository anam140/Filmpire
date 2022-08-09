import { menus } from '@/data';
import { Group, Navbar, Title } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import { useStyles } from './asideStyles';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const { classes } = useStyles();

  return (
    <Navbar height="100vh" width={{ sm: 220 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={2}>Anime</Title>
        </Group>

        {menus.map((menu) => (
          <MenuItem key={menu.title} menu={menu} />
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <button
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </button>
      </Navbar.Section>
    </Navbar>
  );
}
