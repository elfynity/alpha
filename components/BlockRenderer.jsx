import { PageTitle } from '@/components/blocks/PageTitle';
import { Banner } from '@/components/blocks/Banner';
import { ContentImage } from '@/components/blocks/ContentImage';
import { FlexibleRow } from '@/components/blocks/FlexibleRow';



export const BlockRenderer = ({ layouts }) => {
	if (!layouts?.length) return null;

	return layouts.map((block, index) => {

		switch (block.acf_fc_layout) {
      
      case 'page_title':
				return <PageTitle key={index} block={block} />;

			case 'banner':
				return <Banner key={index} block={block} />;
			
      case 'content_image':
				return <ContentImage key={index} block={block} />;

      case 'flexible_row':
				return <FlexibleRow key={index} block={block} />;  


			default:
				return null;
		}
	});
};