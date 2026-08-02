import { Container } from "./Container";
import { ILMenu } from "./menus/Menus";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return(
    <>

    <Container
      bgColorClass="bg-color-base-ext"
      pad="content-padding-m"
      wrap="wrapper"
    >
      <footer>
        <ILMenu />
      </footer>
    </Container>

    <Container 
      id="copyright"
      bgColorClass="bg-color-base-ext"
      pad="content-padding-xs"
      wrap="wrapper"
      alignment="center"
      
      
    >

  
      <p>&copy; Copyright Oxygen {currentYear} | Attribution to Freepik & Clipart Library </p>
     

    </Container>

    </>
  )
}