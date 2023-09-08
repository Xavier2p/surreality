import { AppShell } from '@mantine/core';
import SiteHeader from './header';
import AppRouter from './app-router';

const Layout = () => (
    <AppShell padding="md" header={<SiteHeader />}>
        <AppRouter />
    </AppShell>
);

export default Layout;
