import React from 'react'
import { Avatar } from '../../atoms/Avatar';
import { Component } from '../../atoms/Component'
import { Column, Grid, Row } from '../../atoms/Grid';
import Link from '../../atoms/Link';
import List from '../../atoms/List';
import Text from '../../atoms/Text';
import {default as StyledFooter} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Grid container={true}>
        <Row wrap>
          <Column>
            <Avatar href="/about" src={"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"} alt="Portrait of Mohammed Rabay'a" placeholder='blur' blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"' size={45} />
          </Column>
        </Row>
        <Row wrap>
          <Column sm={6} md={4}>
            <Text as="p">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </Text>
            <Text as="p">
              <Link animated={true} href="mail:rabaya.moe@gmail.com">contact@moerabaya.com</Link>
            </Text>
          </Column>
          <Column sm={12} hide="sm" md={2}>
          </Column>
          <Column md={2}>
            <List>
              <List.Header>
                <Text smallCaps>Languages</Text>
              </List.Header>
              <List.Item>
                <Link smallCaps>en</Link>
                <Text opacity={0.5} style={{padding: "0 0.5em"}}>.</Text>
                <Link smallCaps opacity={0.5} onHover={{ opacity: 1 }}>ar</Link>
              </List.Item>
            </List>
          </Column>
          <Column md={2}>
            <List>
              <List.Header>
                <Text smallCaps>Follow</Text>
              </List.Header>
              <List.Item>
                <Link opacity={0.5} onHover={{ opacity: 1 }}>Twitter</Link>
              </List.Item>
              <List.Item>
                <Link opacity={0.5} onHover={{ opacity: 1 }}>LinkedIn</Link>
              </List.Item>
              <List.Item>
                <Link opacity={0.5} onHover={{ opacity: 1 }}>Dribbble</Link>
              </List.Item>
              <List.Item>
                <Link opacity={0.5} onHover={{ opacity: 1 }}>Behance</Link>
              </List.Item>
            </List>
          </Column>
          <Column md={2}>
            <List>
              <List.Item as="h5">
                <Link smallCaps opacity={0.5} onHover={{ opacity: 1 }}>Home</Link>
              </List.Item>
              <List.Item as="h5">
                <Link smallCaps opacity={0.5} onHover={{ opacity: 1 }}>Cases</Link>
              </List.Item>
              <List.Item as="h5">
                <Link smallCaps opacity={0.5} onHover={{ opacity: 1 }}>Services</Link>
              </List.Item>
              <List.Item as="h5">
                <Link smallCaps opacity={0.5} onHover={{ opacity: 1 }}>Blog</Link>
              </List.Item>
              <List.Item as="h5">
                <Link smallCaps opacity={0.5} onHover={{ opacity: 1 }}>Contact</Link>
              </List.Item>
            </List>
          </Column>
        </Row>
        <Row>
          <Column>
            ©2022 moerabaya.com
          </Column>
        </Row>
      </Grid>
    </StyledFooter>
  )
}
export default Footer
