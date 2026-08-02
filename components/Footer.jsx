import { Container } from "./Container";
import { ILMenu } from "./menus/Menus";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return(
    <>

    <footer>
      <ILMenu />
    </footer>

    <Container 
      id="copyright"
      pad="content-padding-s"
      bgColorClass="bg-color-primary"
    >

  
      <p>&copy; Copyright Oxygen {currentYear} | Attribution to Freepik & Clipart Library </p>
     

    </Container>

    </>
  )
}