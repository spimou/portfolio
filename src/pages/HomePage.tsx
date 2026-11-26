import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'
import HeroSpotlight from '../components/HeroSpotlight'
import profileImage from '../assets/images/me.jpg'
import mapImage from '../assets/images/map.avif'

 

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
            <Heading as="h1">Selected Projects </Heading> 
                  <article class="job">
        <h3>SINGLE DIGITAL MAP <span class="sep">//</span> <span class="company"> Terra-Mapping The Globe</span></h3>
        <p class="years">2023 – 2026</p>
        <p>Developed the front-end to CRUD Governmental Decisions.Has map-based UI to find and project them.</p>
      </article>
      <article class="job">
        <h3>CARGO TRACKING PLATFORM <span class="sep">//<span class="company"> Terra-Mapping The Globe</span></span></h3>
        <p class="years">2023 – 2026</p>
        <p>Analyzed client requirements and developed demos for real-time geodata.UX prototyping in Figma</p>
      </article>
      <article class="job">
        <h3>PhD IN CULTURAL INFORMATICS <span class="sep">//</span> <span class="company"> University of the Aegean</span></h3>
        <p class="years">2019 – 2026</p>
        <p>Developed a model to define and inferencecultural states for points of interest</p>
      </article>
      <article class="job">
        <h3>SIKYON EXCAVATION MAP <span class="sep">//</span><span class="company"> Dipylon</span></h3>
        <p class="years">2022 – 2023</p>
        <p>Web app for excavation geo data.Designed a polygon-extrusion solution to solve overlapping</p>
      </article>
      <div class="center">
        <a class="btn" href={`${import.meta.env.BASE_URL}assets/Spyridon-Mousouris-CV.pdf`} target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
        </PageArticle>

        <PageArticle id="skills">
            <Heading as="h1">Skills & Expertise</Heading> 
        </PageArticle>

        <PageArticle id="contact">
            <Heading as="h1">Contact</Heading> 
        </PageArticle>

        


      </PageSection>
    </Flex>
  )
}

export default HomePage
