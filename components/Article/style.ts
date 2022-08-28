import {default as NextImage} from "next/image";
import styled from "styled-components";

const Title = styled.h5`
	margin-bottom: 0;
	margin-top: 1em;
`;
const Image = styled(NextImage)`
	display: block;
`;

const Article = Object.assign(styled.article`
	padding: 20px;
	text-decoration: none;
	border: 1px solid #eaeaea;
	display: inline-block;
`, {
	Title,
	Image
});

export default Article;