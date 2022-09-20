
declare module 'motion' {
	type TagType = {
		p: "p",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		h5: "h5",
		h6: "h6"
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