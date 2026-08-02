import { Container } from "@/components/Container"; 

export const PageTitle = ({block}) => {
return(
  <>
  <Container
      customClass="main-write-up"
      wrap={block.wrapper}
      bgColorACF={block.color}
    >
    <h1>{block.title}</h1>

    {block.sub_title && 
      <h2 className="small">{block.sub_title}</h2>
    }

    {block.main_write_up &&
      <div 
        className="description"  
        dangerouslySetInnerHTML={{ __html: block.main_write_up }} />
    }

  </Container>
  </>
)

}