import { Text, Title } from '@mantine/core';
import md from '../api/load-data';
import PostCard from '../components/post';

const getPosts = (seriesId: string) => md.posts.filter((post) => post.seriesId === seriesId);

const Series = () => {
    const setId = window.location.href.split('/').slice(-1)[0];
    const posts = getPosts(setId);
    const setMetadata = md.series.find((set) => set.id === setId);

    return (
        <>
            <Title>{setMetadata?.name}</Title>
            <Text>{setMetadata?.description}</Text>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    );
};

export default Series;
