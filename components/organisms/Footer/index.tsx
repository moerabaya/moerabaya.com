import React from 'react'
import { Avatar } from '../../atoms/Avatar';
import { Component } from '../../atoms/Component'
import { Column, Grid, Row } from '../../atoms/Grid';
import Link from '../../atoms/Link';
import List from '../../atoms/List';
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
          <Column md={5}>
            <h4>
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </h4>
            <h4>
              <Link animated={true} href="mail:rabaya.moe@gmail.com">contact@moerabaya.com</Link>
            </h4>
          </Column>
          <Column md={1}>
            
          </Column>
          <Column md={2}>
            <List>
              <List.Header>
                Languages
              </List.Header>
              <List.Item>
                <Link animated={true}>linkedin</Link>
              </List.Item>
            </List>
          </Column>
          <Column md={2}>
            <List>
              <List.Header>
                Follow
              </List.Header>
              <List.Item>
                <Link animated={true}>Twitter</Link>
              </List.Item>
              <List.Item>
                <Link animated={true}>LinkedIn</Link>
              </List.Item>
              <List.Item>
                <Link animated={true}>Dribbble</Link>
              </List.Item>
              <List.Item>
                <Link animated={true}>Behance</Link>
              </List.Item>
            </List>
          </Column>
          <Column md={2}>
            
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
