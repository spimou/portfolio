import { lazy, Suspense, useState } from 'react'
import { Button, Card, Center, Link, Spinner } from '@chakra-ui/react'

//the map chunk (with MapLibre) is only downloaded when it is first rendered
const Map = lazy(() => import('./Map'))

//nothing is requested from MapTiler until the visitor asks for the map
const MapGate = () => {
  //kept in memory only, so nothing is stored on the visitor's device
  const [requested, setRequested] = useState(false)

  const spinner = (
    <Center h="100%">
      <Spinner size="xl" />
    </Center>
  )

  if (requested) {
    return (
      <Suspense fallback={spinner}>
        <Map />
      </Suspense>
    )
  }

  return (
    <Center h="100%" p="4">
      <Card.Root maxW="sm">
        <Card.Header>
          <Card.Title>Load the map?</Card.Title>
        </Card.Header>
        <Card.Body gap="3">
          <Card.Description>
            <p>Map imagery by MapTiler. </p>
            <p>Your browser will them your IP address, like many other services </p>
            <p>This is typical, to count the map usage and necessary to use the map .</p>
          </Card.Description>
          <Link variant="underline" fontSize="sm" href="https://www.maptiler.com/privacy-policy/" target="_blank" rel="noreferrer">
            MapTiler privacy policy
          </Link>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => setRequested(true)}>Load map</Button>
        </Card.Footer>
      </Card.Root>
    </Center>
  )
}

export default MapGate
