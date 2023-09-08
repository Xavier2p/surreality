import { createStyles, Header, Group, Container, rem, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

const SiteHeader = () => {
    const links = [
        { link: '/surreality', label: 'Home' },
        { link: '/surreality/about', label: 'About' },
        { link: '/surreality/contact', label: 'Contact' },
    ];
    const { classes } = useStyles();
    const navigate = useNavigate();

    const items = links.map((link) => {
        return (
            <UnstyledButton key={link.label} onClick={() => navigate(link.link)} className={classes.link}>
                {link.label}
            </UnstyledButton>
        );
    });

    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner}>
                <Group spacing={5} className={classes.links} position="center">
                    {items}
                </Group>
            </Container>
        </Header>
    );
};

export default SiteHeader;
