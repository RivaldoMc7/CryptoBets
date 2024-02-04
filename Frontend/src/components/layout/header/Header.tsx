
import { Avatar, Box, Button, Heading, AvatarBadge, AvatarGroup, Stack } from '@chakra-ui/react'
import { Account } from './account';
import styles from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      <Stack direction='row' spacing={4}>
      <Box h = '5vh' bg = 'black' alignSelf='center'>
      <Heading color = 'white' textTransform= 'uppercase' textAlign= 'center'>
      CryptoBets
        </Heading>
      
    </Box>

  {/* You can also change the borderColor and bg of the badge */}

</Stack>
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
