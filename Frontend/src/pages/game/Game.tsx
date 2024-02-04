import { Button, ButtonGroup, Stack, Wrap, Box, WrapItem } from '@chakra-ui/react'


function Game() {
    return (
  
      <Stack direction='column'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        py={12}
        bgPosition='center'
        bgRepeat='no-repeat'
        mb={2}
      >

      <Wrap spacing={4}>
      <WrapItem>
      <Button colorScheme='blue'>Blue</Button>
      </WrapItem>
      </Wrap>
      </Box>
</Stack>
    );
  }
  
  export { Game };