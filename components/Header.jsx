import Link from "next/link";
import { Container } from "./Container";
import { getSiteInfo } from "./SiteInfo";
import { PrimaryMenu } from "./menus/Menus";




export const Header = async () => {
const siteInfo = await getSiteInfo(); 

  return(
    <>
      <header>
        <Container 
          wrap="wrapper headerWrapper" pad="no-pad"
          bgColorClass="bg-color-base-ext">
          <Link href="/">
            <img 
              id="logo" 
              src={siteInfo.logo_url} 
            />
          </Link>  

          <PrimaryMenu />
        </Container>  
        
      </header>
    </>
  )

}