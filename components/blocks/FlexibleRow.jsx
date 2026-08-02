import Link from "next/link";
import { Container } from "../Container";

export const FlexibleRow = ({ block }) => {

	return (
		<Container 
      customClass="flexible-rows"
      wrap={block.wrapper}
      bgColorACF={block.color}
      pad="content-padding-s"
    >
			{block.flexible_blocks.map((nestedBlock, index) => {
				switch (nestedBlock.acf_fc_layout) {

					case 'text':
						return (
            <div 
              key={index}
              className="flexible-row"
            >
              <h2>
                {nestedBlock.heading}
              </h2>

              <p>
                {nestedBlock.description}
              </p>
            </div>
            );



          case 'button':
          return (
            <div 
              key={index}
              className="flexible-row"
            >
              <Link 
                className={`buttonLink ${nestedBlock.button_theme}`}
                href={nestedBlock.button_link.url}
                target={nestedBlock.button_link.target || '_self'}
              >
                {nestedBlock.button_link.title}
              </Link>
            </div>
          )

					default:
						return null;
				}
			})}
		</Container>
	);
};