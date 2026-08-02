import { Container } from "../Container";

export const Content = ({ block }) => {
	return (
    <>
		<Container 
      id={block.heading}
      customClass="content-area"
      wrap={block.wrapper}
      bgColorACF={block.color}
    >

      
			<h2>{block.heading}</h2>
			<h3 className="parallax-text">{block.sub_heading}</h3>
			<div dangerouslySetInnerHTML={{ __html: block.content }} />
		</Container>
    </>
	);
};

