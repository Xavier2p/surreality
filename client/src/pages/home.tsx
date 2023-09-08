import { Title } from '@mantine/core';
import SeriesGrid from '../components/grid-series';
import md from '../api/load-data';

const Home = () => (
    <>
        <Title>Home</Title>
        <SeriesGrid series={md.series} />
    </>
);

export default Home;
