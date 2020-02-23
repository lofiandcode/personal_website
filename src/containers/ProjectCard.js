import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProjectCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Bigger Fish</Card.Header>
      <Card.Meta>React.js|JavaScript|Ruby on Rails|Semantic-UI </Card.Meta>
      <Card.Description>
        This app using google maps tools to match volunteer delivery drivers with donors that want to donate parishable food.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        github link goes here
      </a>
    </Card.Content>
  </Card>
)

export default ProjectCard