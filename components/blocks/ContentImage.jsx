import { Container } from "../Container";
import Image from "next/image";

export const ContentImage = ({ block }) => {
return (
<>
<Container 
  id={block.heading}
  wrap={block.wrapper}
  bgColorACF={block.color}
  pad={block.padding_top_bottom}
>

  <div className="content-image">


    {block.content_image_blocks.map((nestedBlock, index) => {
      switch (nestedBlock.acf_fc_layout) {

        case 'image':
          return (
          <div 
            key={index}
            className="image"
          >

            <Image
              src={nestedBlock.image.sizes["square-image"]}
              alt={nestedBlock.image.title}
              width={nestedBlock.image.sizes["square-image-width"]}
              height={nestedBlock.image.sizes["square-image-height"]}
            />


          </div>
          );



        case 'content':
        return (
          <div 
            key={index}
            className={`content ${nestedBlock.alignment}`}
          >

            <h2>{nestedBlock.heading}</h2>
            <h5>{nestedBlock.sub_heading}</h5>
            <div 
              dangerouslySetInnerHTML={{ __html: nestedBlock.content }} />
            </div>
        )

        default:
          return null;
      }
    })}



  </div>  


</Container>
</>
);
};

