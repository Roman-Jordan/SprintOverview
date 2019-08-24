import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
const CharCard = props =>{
    let {image,name,species,status,episode} = props.char
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                {species}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                {`episodes: ${episode.length}`}
            </a>
            </Card.Content>
        </Card>
    )
}

export default CharCard;
