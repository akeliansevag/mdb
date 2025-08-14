
interface Props {
    data: Array<{ label: string; href: string }>;
}

const FooterMenuList = ({ data }: Props) => {
    return (
        <>
            {data?.map((item, i) => (
                <li key={i}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </>
    );
};

export default FooterMenuList;
