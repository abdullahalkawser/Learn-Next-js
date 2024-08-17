import { Body, Container, Html, Link, Preview, Tailwind, Text } from '@react-email/components'
import React from 'react'


const WelcomeTemplate = ({name}: {name:string}) => {
  return (
 <Html>
    <Preview>
        welcome
    </Preview>
    <Tailwind>
    <Body>
        <Container>
            <Text className='text-8xl'> hellow world {name}</Text>
            <Link href=''>www.codewithmosh.com</Link>
        </Container>
    </Body>
    </Tailwind>
 </Html>
  )
}

export default WelcomeTemplate