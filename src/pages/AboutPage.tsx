import { Flex, Heading, Link, List, Text, Timeline } from '@chakra-ui/react'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'
import DownloadCvButton from '../components/DownloadCvButton'

function AboutPage() {
  return (
    <Flex direction="column">
      <PageSection>

        <PageArticle>
          <DownloadCvButton />
          <Heading as="h1">Professional Experience</Heading>

          <Timeline.Root as="ol" listStyleType="none">
            <Timeline.Item as="li">
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.accent" />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title as="h2" fontSize="lg">Front-End Developer, Terra – Mapping the Globe</Timeline.Title>
                <Timeline.Description color="fg.muted">12 / 2023 – 08 / 2026</Timeline.Description>
                <Text>Developed large-scale web GIS apps for the private and the public sector</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item as="li">
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.accent" />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title as="h2" fontSize="lg">Full Stack Developer, Geodata Visualization, Dipylon</Timeline.Title>
                <Timeline.Description color="fg.muted">02 / 2022 – 10 / 2023</Timeline.Description>
                <Text>Developed custom geovisualization and storytelling apps for archaeological and cultural data</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item as="li">
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.accent" />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title as="h2" fontSize="lg">Full Stack Developer, Propulsion Analytics</Timeline.Title>
                <Timeline.Description color="fg.muted">07 / 2019 – 02 / 2021</Timeline.Description>
                <Text>Co-developed a custom web platform for visualizing vessel data and performance metrics</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item as="li">
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.accent" />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title as="h2" fontSize="lg">Academic Researcher, University of Patras</Timeline.Title>
                <Timeline.Description color="fg.muted">03 / 2017 – 06 / 2019</Timeline.Description>
                <Text>Developed map-based solutions for cultural data</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item as="li">
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.accent" />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title as="h2" fontSize="lg">Front-End Developer, Biblop</Timeline.Title>
                <Timeline.Description color="fg.muted">05 / 2016 – 02 / 2017</Timeline.Description>
                <Text>Developed custom, responsive front-end UIs</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item as="li">
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="brand.accent" />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title as="h2" fontSize="lg">Academic Researcher, University of Patras</Timeline.Title>
                <Timeline.Description color="fg.muted">08 / 2012 – 01 / 2015</Timeline.Description>
                <Text>Developed map-based solutions for cultural data</Text>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </PageArticle>

        <PageArticle>
          <Heading as="h1">Projects</Heading>

          <Heading as="h2" fontSize="lg">Single Digital Map (SDM)</Heading>
          <Text color="fg.muted" fontSize="sm">Front-End Developer, Terra – Mapping the Globe · 12 / 2023 – 08 / 2026</Text>
          <Link href="https://sdigmap.tee.gov.gr/sdmportal/" target="_blank" rel="noreferrer" color="brand.textGhost" fontSize="sm" wordBreak="break-all" alignSelf="flex-start">
            [ https://sdigmap.tee.gov.gr/sdmportal/ ]
          </Link>
          <List.Root ps="5" mt="2">
            <List.Item>Developed the front-end to CRUD government issues and resolutions. Contains map-based functionality to find and project issues.</List.Item>
          </List.Root>
          <Text color="fg.muted" fontSize="sm" mt="2" mb="6">
            TypeScript | React | React Router | React Query Builder | Axios | Zustand | ArcGIS Experience Builder | ArcGIS Online
          </Text>

          <Heading as="h2" fontSize="lg">Cargo Tracking & Monitoring Platform</Heading>
          <Text color="fg.muted" fontSize="sm">Front-End Developer, Terra – Mapping the Globe · 12 / 2023 – 08 / 2026</Text>
          <List.Root ps="5" mt="2">
            <List.Item>Analyzed client requirements and researched existing solutions</List.Item>
            <List.Item>UX prototyping in Figma</List.Item>
            <List.Item>Developed demos for real-time geodata using React and ArcGIS Maps SDK</List.Item>
          </List.Root>
          <Text color="fg.muted" fontSize="sm" mt="2" mb="6">
            React | TypeScript | Python | ArcGIS Maps SDK for JavaScript | ArcGIS Velocity | Figma
          </Text>

          <Heading as="h2" fontSize="lg">Sikyon Excavation Map, first version</Heading>
          <Text color="fg.muted" fontSize="sm">Full Stack Developer, Data Geovisualization, Dipylon · 02 / 2022 – 10 / 2023</Text>
          <Link href="https://v1.sikyonexcavation.gr/" target="_blank" rel="noreferrer" color="brand.textGhost" fontSize="sm" wordBreak="break-all" alignSelf="flex-start">
            [ https://v1.sikyonexcavation.gr/ ]
          </Link>
          <List.Root ps="5" mt="2">
            <List.Item>Map-based web application for exploring excavation data through category-based filtering, spatial inclusion and interactive map navigation</List.Item>
            <List.Item>Designed a polygon-extrusion solution to visually distinguish selected areas and reduce overlapping</List.Item>
          </List.Root>
          <Text color="fg.muted" fontSize="sm" mt="2" mb="6">
            React | React Router | mapbox.js | turf.js | Axios | Node.js | express.js | Geoserver | PostgreSQL | PostGIS | QGIS | Figma
          </Text>

          <Heading as="h2" fontSize="lg">VesselQUAD</Heading>
          <Text color="fg.muted" fontSize="sm">Full Stack Developer, Propulsion Analytics · 07 / 2019 – 02 / 2021</Text>
          <Link href="https://propulsionanalytics.com/VesselQUAD/" target="_blank" rel="noreferrer" color="brand.textGhost" fontSize="sm" wordBreak="break-all" alignSelf="flex-start">
            [ https://propulsionanalytics.com/VesselQUAD/ ]
          </Link>
          <List.Root ps="5" mt="2">
            <List.Item>Co-developed a custom web platform for visualizing vessel data and metrics.</List.Item>
            <List.Item>Developed APIs and front-end to retrieve and display data and algorithmic results.</List.Item>
            <List.Item>Implemented role-based access control to support different user categories and permission levels.</List.Item>
            <List.Item>Integrated WebSockets to stream large data volumes to feed data-driven charts</List.Item>
          </List.Root>
          <Text color="fg.muted" fontSize="sm" mt="2" mb="6">
            Node.js | express.js | WebSockets | Vue.js | Vuetify | Highcharts.js
          </Text>

          <Heading as="h2" fontSize="lg">Ikospot</Heading>
          <Text color="fg.muted" fontSize="sm">Front-End Developer, Biblop · 05 / 2016 – 02 / 2017</Text>
          <List.Root ps="5" mt="2">
            <List.Item>Developed the front-end for a real-estate platform</List.Item>
            <List.Item>Translated design mockups into responsive web pages</List.Item>
            <List.Item>Implemented interactive UI elements and integrated front-end pages with PHP and MySQL back-end functionality.</List.Item>
          </List.Root>
          <Text color="fg.muted" fontSize="sm" mt="2">
            HTML5 | CSS3 | JavaScript | jQuery | Responsive Web Design | PHP | MySQL | phpMyAdmin
          </Text>
        </PageArticle>

        <PageArticle>
          <Heading as="h1">Skills & Expertise</Heading>
          <List.Root ps="5" gap="1">
            <List.Item><Text><b>Programming Languages:</b> SQL, JavaScript, TypeScript, Python</Text></List.Item>
            <List.Item><Text><b>Databases:</b> PostgreSQL</Text></List.Item>
            <List.Item><Text><b>Back-End:</b> Node.js, Express.js</Text></List.Item>
            <List.Item><Text><b>GIS & Geospatial:</b> Geoserver, mapbox, PostGIS, QGIS</Text></List.Item>
            <List.Item><Text><b>Front-End:</b> React, React Router, Zustand</Text></List.Item>
            <List.Item><Text><b>UX prototyping:</b> Figma</Text></List.Item>
            <List.Item><Text><b>AI-Assisted Development:</b> Claude Code</Text></List.Item>
            <List.Item><Text><b>Semantic Web & Knowledge Engineering:</b> RDF, OWL, Protégé, Apache Jena Fuseki, SPARQL, SWRL</Text></List.Item>
            <List.Item><Text><b>Version Control Systems:</b> Git</Text></List.Item>
            <List.Item><Text><b>Containerization:</b> Docker</Text></List.Item>
          </List.Root>
        </PageArticle>

        <PageArticle>
          <Heading as="h1">Publications and Conference Papers</Heading>
          <List.Root as="ol" ps="5" gap="3">
            <List.Item>
              <Text>
                Mousouris, S., Kavakli, E., Kotis, K. <cite>“Definition and Evaluation of the Spatiotemporal States Reference Model (SStaRM) Ontology Design Pattern”</cite>. In: Journal on Computing and Cultural Heritage. 2026, Under Review
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris, S., Kavakli, E., Kotis, K. <cite>“Defining Axioms to Address the Cultural Snapshot Phenomenon: Introducing the Spatiotemporal States Reference Model (SStaRM)”</cite>. In: Metadata and Semantic Research, MTSR 2025. Under Publication
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris, S., Kavakli, E. <cite>“Towards a reference model for addressing the cultural snapshot phenomenon in cultural mapping libraries”</cite>. In: Int. J. Metadata, Semantics and Ontologies 2024, 17, 1.{' '}
                <Link href="https://doi.org/10.1504/ijmso.2024.145509" target="_blank" rel="noreferrer" color="brand.textGhost" wordBreak="break-all">
                  https://doi.org/10.1504/ijmso.2024.145509
                </Link>
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris, S., Kavakli, E. <cite>“Towards Addressing the Cultural Snapshot Phenomenon in Cultural Mapping Libraries”</cite>. In: Metadata and Semantic Research. MTSR 2022. Communications in Computer and Information Science, 1789. Springer.{' '}
                <Link href="https://doi.org/10.1007/978-3-031-39141-5_10" target="_blank" rel="noreferrer" color="brand.textGhost" wordBreak="break-all">
                  https://doi.org/10.1007/978-3-031-39141-5_10
                </Link>
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris Spiridon, Styliaras Georgios <cite>“The Research Development of Cultural Mapping Libraries”</cite>. In: IEEE - Information, Intelligence, Systems and Applications (IISA 2018)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris Spiridon, Styliaras Georgios <cite>“On The Implementation of a Digital Map for Cultural Heritage”</cite>. In: International Journal of Computational Intelligence Studies, Special Issue on: "Content Management and Dissemination in Multimedia Systems for Culture". InderScience Publishers. 2016 Vol. 5 No. 1, pages 30-49.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris Spiridon, Styliaras Georgios <cite>“Implementing Digital Cultural Heritage Map”</cite>. In: IEEE - Information, Intelligence, Systems and Applications (IISA 2014)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Mousouris Spiridon, Styliaras Georgios <cite>“On the Creation of a Digital Cultural Heritage Map”</cite>. In: IEEE - Information, Intelligence, Systems and Applications (IISA 2013)
              </Text>
            </List.Item>
          </List.Root>

          <DownloadCvButton />
        </PageArticle>

      </PageSection>
    </Flex>
  )
}

export default AboutPage
