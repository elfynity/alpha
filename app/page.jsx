import { wordpressUrl } from '@/lib/config';
import { NoShow } from "@/components/NoShow";
import { BlockRenderer } from '@/components/BlockRenderer';




const getHomePage = async () => {
	const data = await fetch(`${wordpressUrl}/wp-json/`);

	const pagesInfo = await data.json();

	const pageHomeContent = await fetch(
		`${wordpressUrl}/wp-json/wp/v2/pages/${pagesInfo.page_on_front}?_fields=title,acf&acf_format=standard`
	);

  // to see the json link above
  //console.log(pageHomeContent.url);

	return pageHomeContent.json();
};






export const generateMetadata = async () => {
	const pageData = await getHomePage();

	const pageTitle = pageData.acf.seo_title || pageData.title.rendered;

	if (pageData.acf.description !== "") {
		return {
			title: pageTitle,
			description: pageData.acf.description,
		};
	} else {
		return {
			title: pageTitle,
		};
	}
};




const SeoPhrases = async () => {
  const pageData = await getHomePage();
  return (
    <>
    {pageData.acf.seo_phrases}
    </>
  );
  
}




const HomeBlocks = async () => {
	const pageData = await getHomePage();
	return <BlockRenderer layouts={pageData.acf.page_layout} />;
};



export default function Home() {




	return (
		<>
      <NoShow>
        <SeoPhrases/>
      </NoShow>
      
			<HomeBlocks />
		</>
	);
}