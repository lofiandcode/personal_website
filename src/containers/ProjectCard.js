import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProjectCard = (props) => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.cardInfo.title}</Card.Header>
      <Card.Meta>{props.cardInfo.stack}</Card.Meta>
      <Card.Description>
        {props.cardInfo.description}
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