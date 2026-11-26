import { Box, Flex, Heading } from '@chakra-ui/react'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'

 

function HomePage() {
  return (
    <Flex direction="column">
      <Box w="100%" h="70vh" bg="bg.hero" cursor="crosshair" />
      <PageSection>

        <PageArticle id="projects">
            <Heading as="h1">Selected Projects</Heading> 
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
        <a class="btn" href="./assets/Spyridon-Mousouris-CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
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
