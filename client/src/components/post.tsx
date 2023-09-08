import { ActionIcon, Button, Card, Image, Paper, Text, Title, createStyles } from '@mantine/core';
import { IExif, IPost } from '../api/interfaces';
import {
    IconAntennaBars5,
    IconAperture,
    IconBrandSpeedtest,
    IconCamera,
    IconExposure,
    IconHeart,
    IconRulerMeasure,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

const Exif = ({ exif }: { exif: IExif }) => (
    <Paper shadow="sm" p="sm" radius="sm">
        <Button leftIcon={<IconAperture />} variant="outline" color="blue">
            <Text>{exif.aperture}</Text>
        </Button>
        <Button leftIcon={<IconCamera />} variant="outline" color="blue">
            <Text>{exif.camera}</Text>
        </Button>
        <Button leftIcon={<IconExposure />} variant="outline" color="blue">
            <Text>{exif.exposureTime}</Text>
        </Button>
        <Text>{exif.lens}</Text>
        <Button leftIcon={<IconRulerMeasure />} variant="outline" color="blue">
            <Text>{exif.focalLength}</Text>
        </Button>
        <Button leftIcon={<IconBrandSpeedtest />} variant="outline" color="blue">
            <Text>{exif.shutterSpeed}</Text>
        </Button>
        <Button leftIcon={<IconAntennaBars5 />} variant="outline" color="blue">
            <Text>{exif.iso}</Text>
        </Button>
    </Paper>
);

const PostCard = ({ post }: { post: IPost }) => {
    const { classes } = useStyles();
    return (
        <Card className={classes.card} withBorder>
            <Card.Section>
                <Image src={post.imageUrl} height={200} alt={post.title} />
            </Card.Section>
            <Title className={classes.title}>{post.title}</Title>
            <Text>{post.description}</Text>
            <Exif exif={post.exif} />
            <ActionIcon color="red" radius="sm">
                <IconHeart />
            </ActionIcon>
        </Card>
    );
};

export default PostCard;
