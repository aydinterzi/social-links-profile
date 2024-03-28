type CardLinkProps = {
  link: {
    href: string;
    text: string;
  };
};

function CardLink(props: CardLinkProps) {
  return (
    <a
      href={props.link.href}
      className=" text-center bg-grey text-white hover:bg-green hover:text-grey p-3 rounded-lg"
    >
      {props.link.text}
    </a>
  );
}

export default CardLink;
