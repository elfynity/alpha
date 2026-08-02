import { ButtonLink } from "@/components/ButtonLink"

export const Banner = ({ block }) => {
	return (
		<section 
      className="banner"
      style={{ 
        backgroundImage: `url(${block.image.sizes['banner-image']})`
      }}
    >

      <div className={`wrapper ${block.alignment}`}>

        <div className="text">
          <h2>{block.heading}</h2>
          <p>{block.description}</p>
          <ButtonLink 
            link={block.button_link} 
            theme={block.button_theme}
          />
        </div>{/* text */}  

      </div>{/* wrapper */}  


		</section>
	);
};

