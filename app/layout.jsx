import { Inter } from "next/font/google";
import { getSiteInfo } from "@/components/SiteInfo";
import "./style.css";
import "./style-blocks.css";
import './responsive.css';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["300", "400", "600"],
  preload: false 
});


export async function generateMetadata() {
	const siteInfo = await getSiteInfo();

  let indexing = false;
  if (siteInfo.my_site.indexing === "index") {
    indexing = true; 
  } else {
    indexing = false;
  }

  let follow = false;
  if (siteInfo.my_site.follow === "follow") {
    follow = true; 
  } else {
    follow = false;
  }



	return {
		title: "Alpha Base Theme",
		description: "Main meta description here for all pages",
		robots: {
			index: indexing,
			follow: follow
		},
	};
}




export default function RootLayout({ children }) {
  return (
   <html 
    lang="en" 
    className={`${inter.variable}`}
    data-scroll-behavior="smooth"
  >
      <body>

        <div className="site">
          <Header />
            {children}
        </div>{/* site */}

        <Footer />  

      </body>
    </html>
  );
}
