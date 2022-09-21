import React from 'react'
import { Component } from '../../atoms/Component'
import { Column, Grid, Row } from '../../atoms/Grid';
import {default as StyledFooter} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Grid container={true}>
        <Row>
          <Column md={12}>
            <ul className="social-media-list">
            {/* <li className="social-media-item">
              <a className="animated" target="_blank" href="https://www.facebook.com/moerabaya">facebook</a>
            </li> */}
            {/* <li className="social-media-item">
              <a target="_blank" href="https://www.instagram.com/moe.rabaya/">instagram</a>
            </li> */}
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/moerabaya/">linkedin</a>
            </li>
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://dribbble.com/moerabaya">dribbble</a>
            </li>
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://www.behance.net/moerabaya">behance</a>
            </li>
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://github.com/moerabaya">github</a>
            </li>
          </ul>
          </Column>
          <Column md={1}>
            <ul className="social-media-list">
            {/* <li className="social-media-item">
              <a className="animated" target="_blank" href="https://www.facebook.com/moerabaya">facebook</a>
            </li> */}
            {/* <li className="social-media-item">
              <a target="_blank" href="https://www.instagram.com/moe.rabaya/">instagram</a>
            </li> */}
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/moerabaya/">linkedin</a>
            </li>
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://dribbble.com/moerabaya">dribbble</a>
            </li>
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://www.behance.net/moerabaya">behance</a>
            </li>
            <li className="social-media-item">
              <a className="animated" target="_blank" rel="noreferrer" href="https://github.com/moerabaya">github</a>
            </li>
          </ul>
          </Column>
        </Row>
        <ul className="resume-list">
          <li>
            <a className="animated" href="/engineering-resume-2022.pdf" target="_blank">download résumé</a>
          </li>
        </ul>
        <ul className="social-media-list">
          {/* <li className="social-media-item">
            <a className="animated" target="_blank" href="https://www.facebook.com/moerabaya">facebook</a>
          </li> */}
          {/* <li className="social-media-item">
            <a target="_blank" href="https://www.instagram.com/moe.rabaya/">instagram</a>
          </li> */}
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/moerabaya/">linkedin</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://dribbble.com/moerabaya">dribbble</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://www.behance.net/moerabaya">behance</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://github.com/moerabaya">github</a>
          </li>
        </ul>
      </Grid>
    </StyledFooter>
  )
}
export default Footer
