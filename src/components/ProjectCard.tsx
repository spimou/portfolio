import { Flex, Heading, Image, Link, List, Text } from '@chakra-ui/react'

export interface Project {
  company: string
  years: string
  title: string
  image: string
  imageAlt: string
  points: string[]
  url: string
}

function ProjectCard({ company, years, title, image, imageAlt, points, url }: Project) {
  return (
    <Flex
      direction="column"
      flex="1"
      gap="3"
      p="4"
      bg="bg.panel"
      border="1px solid"
      borderColor="border"
    >
      <Text color="fg.muted" fontSize="xs">
        {company} · {years}
      </Text>
      <Image src={image} alt={imageAlt} w="100%" aspectRatio={16 / 9} objectFit="cover" />
      <Heading as="h2" fontSize="lg" color="brand.secondary">
        {title}
      </Heading>
      <List.Root ps="5" gap="2" fontSize="sm" _marker={{ color: 'brand.accent' }}>
        {points.map((point) => (
          <List.Item key={point}>{point}</List.Item>
        ))}
      </List.Root>
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${title}`}
        alignSelf="flex-end"
        mt="auto"
        color="brand.accent"
        fontSize="xl"
        lineHeight="1"
        _hover={{ color: 'brand.secondary', textDecoration: 'none' }}
      >
        →
      </Link>
    </Flex>
  )
}

export default ProjectCard
