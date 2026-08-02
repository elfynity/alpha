import { wordpressUrl } from '@/lib/config';

export const getSiteInfo = (async () => {
	const res = await fetch(`${wordpressUrl}/wp-json/devgirl/site-info`);
	if (!res.ok) return null;
	return res.json();
});

export const MySite = async ({field}) => {
	const siteInfo = await getSiteInfo();
	return <>{siteInfo?.my_site[field] ?? null}</>;
};