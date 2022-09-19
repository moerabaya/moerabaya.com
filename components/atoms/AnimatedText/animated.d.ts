
declare module 'motion' {
	type TagType = {
		paragraph: "p",
		heading1: "h1",
		heading2: "h2"
	};
	
	interface AnimatedCharachtersProps {
		children?: ReactElement;
		text: string;
		type: tagMap;
	}

	interface AnimatedTextProps {
		children?: ReactElement;
		text: string;
		type: tagMap;
	}
}