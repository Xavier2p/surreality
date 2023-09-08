import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(120),
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(220),
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color: theme.colors[theme.primaryColor][3],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(120),
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
        },
    },

    description: {
        maxWidth: rem(540),
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
}));

const PageNotFound = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>Nothing to see here</Title>
                <Text size="lg" align="center" className={classes.description}>
                    Page you are trying to open does not exist. You may have mistyped the address, or the page has been
                    moved to another URL. If you think this is an error contact support.
                </Text>
                <Group position="center">
                    <Button size="md">Take me back to home page</Button>
                </Group>
            </Container>
        </div>
    );
};

export default PageNotFound;
