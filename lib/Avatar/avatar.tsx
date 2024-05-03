interface AvatarProps {
  src?: string;
  alt?: string;
  rounded?: boolean;
  disabled?: boolean;
  label?: string;
  initials?: string;
  small?: boolean;
  large?: boolean;
  tli?: boolean;
  tri?: boolean;
  bli?: boolean;
  bri?: boolean;
  ring?: boolean;
}

export const Avatar = ({
  src,
  alt,
  disabled,
  initials,
  label,
  rounded,
  large,
  small,
  tli,
  tri,
  bli,
  bri,
  ring,
}: AvatarProps) => {
  return (
    <div className={`w-fit h-fit relative`}>
      {initials ? (
        <>
          {" "}
          <div
            className={`bg-gray-500 flex items-center justify-center cursor-pointer uppercase hover:brightness-75 duration-300 transition-all ease-in
        ${rounded ? "rounded-full" : "rounded-lg"}
        ${large ? "w-16 h-16" : `${small ? "w-8 h-8" : "w-12 h-12"}`}
        ${disabled && "grayscale hover:cursor-not-allowed"}
        ${ring && "ring"} `}
          >
            <span
              className={`font-medium text-white ${
                large ? "text-xl" : `${small ? "text-xs" : "text-base"}`
              }`}
            >
              {initials}
            </span>
          </div>
        </>
      ) : (
        <>
          <img
            className={`cursor-pointer rounded-full object-cover object-center hover:brightness-75 duration-300 transition-all ease-in
        ${rounded ? "rounded-full" : "rounded-lg"}
        ${large ? "w-16 h-16" : `${small ? "w-8 h-8" : "w-12 h-12"}`}
        ${disabled && "grayscale hover:cursor-not-allowed"}
        ${ring && "ring"}

        `}
            src={src}
            alt={alt}
          />
        </>
      )}

      {tli || tri || bli || bri ? (
        <span
          className={`absolute
          ${tli && "-top-0.5 -left-0.5"}
          ${tri && "-top-0.5 -right-0"}
          ${bli && "bottom-0.5 -left-0.5"} 
          ${bri && "bottom-0.5 right-0"}
          ${large ? "p-2" : `${small ? "p-1" : "p-1.5"}`}
           bg-green-600 rounded-full outline outline-2 outline-white`}
        />
      ) : null}

      {(tli || tri || bli || bri) && label ? (
        <span
          className={`absolute
          ${tli && "-top-0.5 -left-0.5"}
          ${tri && "-top-0.5 -right-0"}
          ${bli && "bottom-0.5 -left-0.5"} 
          ${bri && "bottom-0.5 right-0"}
          ${
            large
              ? "px-1.5 text-sm font-medium"
              : `text-xs ${small ? "px-1 text-center" : "px-1.5 font-medium"}`
          }
           bg-green-600 py-0 rounded-full outline outline-2 outline-white text-white`}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
