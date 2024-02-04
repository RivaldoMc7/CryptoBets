import { Card, CardHeader, Link, CardBody, CardFooter, Box, Heading, Stack, StackDivider, Text, Button, ButtonGroup, Image, Divider} from '@chakra-ui/react'

function Home() {
 
  return (
   
    <div className="container">
      <div><Card maxW='sm' background='black'>
  <CardBody>
    <Image
      src='https://imagenes.elpais.com/resizer/odba0yKV2ChUPM8uuAqxByAiBnI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GS3FZX5YFVC6HCBGALQNVMYZTE.jpg'
      alt='Guess random number'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color='white'>Guess random number</Heading>
      <Text color='white'>
        Guess if a number is higher or lower, if you get it right, you win!
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
      <Link href='./game' isExternal>
  Play now
</Link>
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Multiplayer
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card></div>
      <div><Card maxW='sm' background='black'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color = 'white'>Living room Sofa</Heading>
      <Text color='white'>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
  
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card></div>
      <div><Card maxW='sm' background='black'>
  <CardBody>
    <Image
      src='data:image/jpeg;base64,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'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color = 'white'>Living room Sofa</Heading>
      <Text color = 'white'>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card></div>
    </div>

    


    
  )
}

export { Home };
