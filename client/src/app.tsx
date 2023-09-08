import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout';

const Surreality = () => (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </MantineProvider>
);

export default Surreality;
