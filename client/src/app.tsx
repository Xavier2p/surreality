import { useState } from 'react';
import { Button, Group } from '@mantine/core';

const Surreality = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Group position="center">
        <Button color="yellow" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Group>
    </>
  );
};

export default Surreality;
