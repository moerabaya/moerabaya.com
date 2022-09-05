import {default as NextImage} from "next/image";
import styled from "styled-components";

const Title = styled.h5`
	text-transform: uppercase;
	margin: 0;
	font-weight: 500;
`;
const Content = styled.section`
	padding: 20px;
`;
const Image = styled(NextImage)`
	display: block;
`;

const Label = styled.small`
	border: 1px solid #eaeaea;
	padding: 5px 10px;
	color: rgba(0,0,0,0.5);
	border-radius: 0.3em;
	margin-right: 0.5em;
	margin-top: 0.5em;
	font-size: 0.85em;
	display: inline-block;
`;

const Article = Object.assign(styled.article`
	border: 1px solid #eaeaea;
	display: inline-block;
	border-radius: 0.5em;
	overflow: hidden;
	text-decoration: none !important;
	&:hover h5 {
		text-decoration: underline;
	}
`, {
	Title,
	Image,
	Content,
	Label
});

export default Article;