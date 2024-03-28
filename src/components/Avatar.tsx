type AvatarProps = {
  src: string;
  alt: string;
};

function Avatar(props: AvatarProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`h-[88px] w-[88px] rounded-full`}
    />
  );
}

export default Avatar;
