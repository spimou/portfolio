import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'
import HeroSpotlight from '../components/HeroSpotlight'
import profileImage from '../assets/images/me.jpg'
import mapImage from '../assets/images/map.avif'
import ProjectCard, { type Project } from '../components/ProjectCard'
import DownloadCvButton from '../components/DownloadCvButton'
import sdmImage from '../assets/images/signgledigitalmap.png'
import sikyonImage from '../assets/images/sikyon.png'
import vesselQuadImage from '../assets/images/vesselquad.png'
import SocialButtons from '../components/SocialButtons'

const PROJECTS: Project[] = [
  {
    company: 'Terra – Mapping the Globe',
    years: '2023 – 2026',
    title: 'Single Digital Map',
    url: 'https://sdigmap.tee.gov.gr/sdmportal/en/',
    image: sdmImage,
    imageAlt: 'Map of city streets blending into 3D buildings',
    points: [
      'Brings land and urban planning data together on one online map.',
      'Helps to record issues, locate them on the map and follow how they are resolved.',
      'I developed the record editing / relating functionality and searching via a map.',
    ],
  },
  {
    company: 'Dipylon',
    years: '2022 – 2023',
    title: 'Sikyon Excavation Map',
    url: 'https://v1.sikyonexcavation.gr/',
    image: sikyonImage,
    imageAlt: '3D map of excavated areas at the ancient site of Sikyon',
    points: [
      'Supports exploring the findings of an archaeological excavation on an interactive map.',
      'Makes overlapping areas of the site easy to tell apart and understand.',
      'I designed and developed the entire app, in collaboration with GIS experts and archaeologists.',
    ],
  },
  {
    company: 'Propulsion Analytics',
    years: '2019 – 2021',
    title: 'VesselQUAD',
    url: 'https://propulsionanalytics.com/VesselQUAD/',
    image: vesselQuadImage,
    imageAlt: 'VesselQUAD dashboard with a vessel route map and performance charts',
    points: [
      'Shows how ships are performing through live data, maps and charts.',
      'Helps shipping companies spot wasted fuel and decide when a ship needs cleaning or maintenance.',
      'Developed the interface and how it consumes data, in collaboration with naval engineers.',
    ],
  },
]

function HomePage() {
  return (
    <Flex direction="column">
      <HeroSpotlight image={mapImage}>
        <Flex
          direction="column"
          align="flex-start"
          w={{ base: '95%', lg: '80%', xl: '70%' }}
          mx="auto"
          pb="8"
        >
          <Flex
            direction="row"
            align="center"
            gap="8"
            mt="30px"
            mr="0"
          >
            <Image
              src={profileImage}
              alt="Portrait of Spiros Mousouris"
              htmlWidth={770}
              htmlHeight={679}
              w={{ base: '90px', md: 'clamp(120px, 16vh, 170px)' }}
              h="auto"
              aspectRatio={1}
              borderRadius="50%"
              objectFit="cover"
              flex="none"
              border="2px solid"
              borderColor="brand.accent"
            />
            <Flex
              direction="column"
              align={{ base: 'flex-start', lg: 'flex-start' }}
              textAlign={{ base: 'left', lg: 'left' }}
            >
              <Text fontSize="1rem" m="2px" p="5px" bg="brand.accent" color="brand.background">
                Hi, I am
              </Text>
              <Heading
                as="h1"
                fontSize="1.25rem"
                lineHeight="1.25"
                color="brand.background"
                bg="brand.accent"
                m="2px"
                p="5px"
              >
                Spiros Mousouris , PhD
              </Heading>
              <Text fontSize="1rem" m="2px" p="5px" bg="brand.accent" color="brand.background">
                Software Developer & GeoData Viz
              </Text>
              <Text  fontSize="1rem" m="2px" p="5px" bg="brand.accent" color="brand.background"></Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            align="flex-start"
            textAlign="left"
            
            mt="8"
          >
            <Heading
              as="h1"
              fontSize="2rem"
              lineHeight="1.25"
              color="brand.background"
              bg="brand.accent"
              m="2px"
              p="5px"
              w={{ base: '100%', md: '65%' }}
            >
              I build apps that make data easier to explore and understand.
            </Heading>

            <Text w={{ base: '100%', md: '80%' }} fontSize="1rem" m="2px" p="5px" bg="brand.accent" color="brand.background">
              I develop apps that uncover patterns and make sense of information. <i>After all, storytelling is dynamic spatiotemporal data.</i>
            </Text>
            <Text  fontSize="1rem" m="2px" p="5px" bg="brand.accent" color="brand.background"></Text>
          </Flex>
        </Flex>
      </HeroSpotlight>
      <PageSection mt="-30px" position="relative" zIndex="1">

        <PageArticle id="projects" mt="0">
            <Heading as="h1">// Selected Projects  </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} gap="6" mt="4">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </Flex>
            <Button
              asChild
              alignSelf="center"
              mt="8"
              bg="brand.accent"
              color="brand.background"
              _hover={{ bg: 'brand.secondary' }}
            >
              <RouterLink to="/about">View Full CV</RouterLink>
            </Button>
            <Text textAlign="center" color="fg.muted" my="3">
              or
            </Text>
            <DownloadCvButton />
            
        </PageArticle>

        <PageArticle id="skills">
            <Heading as="h1">Skills & Expertise</Heading> 
        </PageArticle>

        <PageArticle id="contact">
            <Heading as="h1">Contact</Heading> 
            <SocialButtons />
        </PageArticle>

        


      </PageSection>
    </Flex>
  )
}

export default HomePage
