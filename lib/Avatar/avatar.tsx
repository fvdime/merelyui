import { AdjustSizeProps } from "../utils/adjust-size";

interface AvatarBase {
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

type AvatarProps = AdjustSizeProps<AvatarBase>;

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
  const sizeClasses = large ? "w-16 h-16" : small ? "w-8 h-8" : "w-12 h-12";
  const textSizeClasses = large ? "text-xl" : small ? "text-xs" : "text-base";
  const baseClasses = `
      ${rounded ? "rounded-full" : "rounded-lg"}
      ${sizeClasses}
      ${disabled ? "grayscale cursor-not-allowed" : "cursor-pointer"}
      ${ring && "ring"}
      object-cover object-center hover:brightness-75 duration-300 transition-all ease-in
    `;

  const badgePositionClasses = `
      ${tli && "-top-0.5 -left-0.5"}
      ${tri && "-top-0.5 -right-0"}
      ${bli && "bottom-0.5 -left-0.5"}
      ${bri && "bottom-0.5 right-0"}
    `;

  const badgeSizeClasses = large ? "p-2" : small ? "p-1" : "p-1.5";

  return (
    <div className="w-fit h-fit relative">
      {initials ? (
        <div
          className={`bg-gray-500 flex items-center justify-center uppercase ${baseClasses}`}
        >
          <span className={`font-medium text-white ${textSizeClasses}`}>
            {initials}
          </span>
        </div>
      ) : (
        <img className={baseClasses} src={src} alt={alt} />
      )}

      {(tli || tri || bli || bri) && (
        <span
          className={`absolute ${badgePositionClasses} ${badgeSizeClasses} bg-green-600 rounded-full outline outline-2 outline-white`}
        />
      )}

      {label && (tli || tri || bli || bri) && (
        <span
          className={`absolute ${badgePositionClasses} bg-green-600 text-white py-0 rounded-full outline outline-2 outline-white text-xs ${
            large
              ? "px-1.5 font-medium"
              : small
                ? "px-1 "
                : "px-1.5 font-medium"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};
