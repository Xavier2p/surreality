import { createStyles, Paper, Text, Title, Button, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

// interface ArticleCardImageProps {
//   image: string;
//   title: string;
//   category: string;
// }

const SeriesCard = () => {
  // { image, title, category }: ArticleCardImageProps) {
  const { classes } = useStyles();

  const mockData = {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  };

  return (
    <Paper shadow="md" p="xl" radius="md" sx={{ backgroundImage: `url(${mockData.image})` }} className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          {mockData.category}
        </Text>
        <Title order={3} className={classes.title}>
          {mockData.title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
};

export default SeriesCard;
