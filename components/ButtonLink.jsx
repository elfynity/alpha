import Link from 'next/link';

export const ButtonLink = ({ link, theme}) => {
	if (!link?.url) return null;

	return (
		<Link 
      href={link.url} 
      className={`buttonLink ${theme}`}
      target={link.target || '_self'}>
			{link.title}
		</Link>
	);
};