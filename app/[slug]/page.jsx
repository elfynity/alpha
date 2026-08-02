import { wordpressUrl } from '@/lib/config';
import { BlockRenderer } from '@/components/BlockRenderer';



const getPageBySlug = async (slug) => {
	const res = await fetch(
		`${wordpressUrl}/wp-json/wp/v2/pages?slug=${slug}&_fields=title,acf,featured_media&acf_format=standard`
	);
	const data = await res.json();
	return data[0];
};



const getFeaturedImageUrl = async (mediaId) => {
	if (!mediaId) return null;
	const res = await fetch(
		`${wordpressUrl}/wp-json/wp/v2/media/${mediaId}?_fields=source_url`,
		{ cache: 'no-store' }
	);
	const data = await res.json();
	return data.source_url;
};




export async function generateMetadata({ params }) {
	const slug = (await params).slug;
	const pageData = await getPageBySlug(slug);
	const pageTitle = pageData.acf.seo_title || pageData.title.rendered;
  const featuredImageUrl = await getFeaturedImageUrl(pageData.featured_media);

  const metadata = {
      title: pageTitle,
    };

    if (pageData.acf.description !== "") {
      metadata.description = pageData.acf.description;
    }

    if (featuredImageUrl) {
      metadata.openGraph = {
        images: [{ url: featuredImageUrl }],
      };
    }

    return metadata;
}









const Page = async ({ params }) => {
	const { slug } = await params;
	const pageData = await getPageBySlug(slug);
  const featuredImageUrl = await getFeaturedImageUrl(pageData.featured_media);

	if (!pageData) return <div>404 - Page Not Found</div>;

	return (
		<main>
			<h1>{pageData.title.rendered}</h1>


			<BlockRenderer 
        layouts={pageData.acf?.page_layout} 
      />

		</main>
	);
};

export default Page;