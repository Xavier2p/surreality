import { useState } from 'react';
import { AppShell, Button, Group } from '@mantine/core';
import SiteHeader from './components/header';

const Surreality = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppShell padding="md" header={<SiteHeader />}>
        <Group position="center">
          <Button color="yellow" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Group>
      </AppShell>
    </>
  );
};

export default Surreality;
