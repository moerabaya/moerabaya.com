import { default as NextImage } from "next/image";
import styled from "styled-components";

const Title = styled.h5`
  margin: 0;
  font-weight: 500;
  font-size: 1.3em;
  line-height: 1.2;
`;

const Content = styled.section`
  padding: 20px;
`;

const Image = styled(NextImage)`
  display: block;
`;

const Text = styled.small`
  padding: 5px 0;
  color: var(--text-color-light);
  margin-right: 0.75em;
  margin-top: 0.5em;
  font-size: 0.75em;
  display: inline-block;
`;

const Label = styled(Text)`
  border: 1px solid var(--border-color);
  padding: 5px 10px;
  border-radius: 0.3em;
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
    border: 1px solid var(--border-color);
    display: inline-block;
    border-radius: 0.5em;
    overflow: hidden;
    text-decoration: none !important;
    background-color: var(--card-background);
    box-shadow: 0px 0px 0px 0px var(--card-shadow-color);
    transition: 0.25s ease;
    &:hover {
      box-shadow: 0px 0px 5px 0px var(--card-shadow-color);
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
  }
);

export default Article;
