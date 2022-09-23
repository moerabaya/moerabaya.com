import React from 'react'
import { Avatar } from '../../atoms/Avatar';
import { Component } from '../../atoms/Component'
import { Column, Grid, Row } from '../../atoms/Grid';
import Link from '../../atoms/Link';
import List from '../../atoms/List';
import Text from '../../atoms/Text';
import {default as StyledFooter} from "./Footer.styled";
import navigation from "utils/data/navigation.json";

const Pages = navigation.menu;
const Footer: React.FC = () => {
  const renderPages = () => Pages?.map(({path, name}) => (
    <List.Item key={name} as="h5" style={{marginTop: "0.5em"}}>
      <Link href={path} smallCaps opacity={0.5} onHover={{ opacity: 1 }}>{name}</Link>
    </List.Item>
  ));

  return (
    <StyledFooter>
      <Grid container={true}>
        <Row wrap>
          <Column>
            <Avatar href="/about" src={"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"} alt="Portrait of Mohammed Rabay'a" placeholder='blur' blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"' size={45} />
          </Column>
        </Row>
        <Row wrap>
          <Column sm={12} lg={5} style={{paddingBottom: "2em"}}>
            <Text as="h4">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </Text>
            <Text as="h4">
              <Link animated={true} href="mail:rabaya.moe@gmail.com">contact@moerabaya.com</Link>
            </Text>
          </Column>
          <Column sm={12} hide={["sm", "md"]} lg={1}>
          </Column>
          <Column sm={4} lg={2} style={{paddingBottom: "2em"}}>
            <List>
              <List.Header>
                <Text smallCaps>Languages</Text>
              </List.Header>
              <List.Item>
                <Link href="/" smallCaps>en</Link>
                <Text opacity={0.5} style={{padding: "0 0.5em"}}>.</Text>
                <Link href="/ar/" smallCaps opacity={0.5} onHover={{ opacity: 1 }}>ar</Link>
              </List.Item>
            </List>
          </Column>
          <Column sm={4} lg={2} style={{paddingBottom: "2em"}}>
            <List>
              <List.Header>
                <Text smallCaps>Follow</Text>
              </List.Header>
              <List.Item>
                <Link href="https://twitter.com/moerabaya_" target="_blank" opacity={0.5} onHover={{ opacity: 1 }}>Twitter</Link>
              </List.Item>
              <List.Item>
                <Link href="https://www.linkedin.com/in/moerabaya/" target="_blank" opacity={0.5} onHover={{ opacity: 1 }}>LinkedIn</Link>
              </List.Item>
              <List.Item>
                <Link href="https://dribbble.com/moerabaya/" target="_blank" opacity={0.5} onHover={{ opacity: 1 }}>Dribbble</Link>
              </List.Item>
              <List.Item>
                <Link href="https://www.behance.net/moerabaya/" target="_blank" opacity={0.5} onHover={{ opacity: 1 }}>Behance</Link>
              </List.Item>
            </List>
          </Column>
          <Column sm={4} lg={2}>
            <List style={{paddingTop: "0.75em"}}>
              {renderPages()}
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
