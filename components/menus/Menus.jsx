import style from './Menu.module.css';
import Link from 'next/link';

const MenuItem = ({ item }) => {
	const hasChildren = item.children && item.children.length > 0;

	return (
		<li>
			<Link href={item.slug || '/'}>
        {item.title}
      </Link>

			{hasChildren && (
				<ul className={style.subMenu}>
					{item.children.map((child) => (
						<MenuItem 
              key={child.id} 
              item={child} 
            />
					))}
				</ul>
			)}

		</li>
	);
};

export const PrimaryMenu = async () => {
  try {  

    const data = await fetch('https://react.theoxygencompany.co.za/wp-json/devgirl/menus/primary');
    if (!data.ok) return null;
    
    const menuItems = await data.json();

    return (
      <nav id={style.primaryMenu}>
        <ul>
          {menuItems.map((item) => (
            <MenuItem 
              key={item.id} 
              item={item} 
            />
          ))}
        </ul>
      </nav>
    );

  } catch(error) {
    return null;
  }  
};


export const ILMenu = async () => {
	try {

    const data = await fetch('https://react.theoxygencompany.co.za/wp-json/devgirl/menus/importantlinks');
    if (!data.ok) return null;

    const menuItems = await data.json();

    return (
      <nav>
        <ul>
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    );

  } catch(error) {
    return null;
  }

};