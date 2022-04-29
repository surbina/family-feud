import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { Flex, FormControl, Input, Button, Heading } from '@chakra-ui/react';

import { useCreatePlayerMutation } from 'src/app/operations/players';

export function Login() {
  const [name, setName] = useState('');
  const { push, prefetch } = useRouter();
  const { makeRequest: createPlayer } = useCreatePlayerMutation();
  const [creatingPlayer, setCreatingPlayer] = useState(false);

  useEffect(() => {
    prefetch('/player');
  }, [prefetch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCreatingPlayer(true);
    const playerData = await createPlayer(name);

    localStorage.setItem('userId', playerData.createPlayer.id);
    localStorage.setItem('userName', playerData.createPlayer.name);

    push('/player');
  };

  return (
    <Flex width="100%" padding="12" flexDirection="column">
      <Heading as="h1">100 Cristianos Dicen</Heading>

      <form onSubmit={handleSubmit} style={{ paddingTop: 32 }}>
        <Flex
          backgroundColor="orange"
          color="black"
          flexDirection="column"
          padding="12">
          <FormControl>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="¿Cómo te llamás?"
              _placeholder={{ color: 'blackAlpha.900', textAlign: 'center' }}
              disabled={creatingPlayer}
            />
          </FormControl>
          <Button
            type="submit"
            marginTop="4"
            disabled={!name || creatingPlayer}>
            Ingresar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
