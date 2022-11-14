import { default as NextImage } from "next/image";
import styled from "styled-components";

const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
  line-height: 1.3;
  font-size: 150%;
`;

const Content = styled.section`
  padding: 0 2em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled(NextImage)`
  display: block;
  flex: 1;
  position: relative;
`;

const ImageWrapper = styled.div`
  /* padding: 1em; */
  width: 28.5%;
  border-radius: 88px;
  overflow: hidden;
  padding-bottom: 18%;
  position: relative;
`;

const Text = styled.span`
  padding: 5px 0;
  color: var(--text-color-light);
  margin-right: 0.75em;
  margin-top: 0.5em;
  font-size: 0.9em;
  display: inline-block;
`;

const Label = styled(Text)`
  border: 1px solid var(--border-color);
  padding: 5px 10px;
  /* border-radius: 0.3em; */
  margin-right: 0.5em;
  margin-top: 0.5em;
`;

const Category = styled(Text)`
  margin-bottom: 0.3em;
  margin-top: 0;
  font-size: 0.8em;
  font-weight: 500;
  color: var(--button-color);
`;

const Article = Object.assign(
  styled.article`
    border: 1px solid rgba(var(--text-color-rgb), 0.5);
    /* display: inline-block; */
    /* border-radius: 0.5em; */
    overflow: hidden;
    text-decoration: none !important;
    background-color: var(--card-background);
    /* box-shadow: 0px 0px 0px 0px var(--card-shadow-color); */
    transition: 0.25s ease;
    display: flex;
    padding: 0.75em;
    &:hover {
      /* box-shadow: 0px 0px 5px 0px var(--card-shadow-color); */
      border: 1px solid rgba(var(--text-color-rgb), 1);
      h5 {
        text-decoration: underline;
      }
    }
  `,
  {
    Title,
    Image,
    Content,
    Label,
    Text,
    Category,
    ImageWrapper,
  }
);

export default Article;
