import { UniformText } from "@uniformdev/canvas-react";
import { LinkParamValue, ProjectMapLinkParamValue } from "@uniformdev/canvas";

function Button({
  link,
  openInNewTab = false,
}: {
  link?: LinkParamValue | ProjectMapLinkParamValue;
  openInNewTab?: boolean;
}) {
  const isSupportedLink =
    link?.type === "url" || link?.type === "projectMapNode";

  const href = isSupportedLink && link?.path?.length ? link.path : "#";

  return (
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <UniformText parameterId="label" placeholder="Button label goes here" />
    </a>
  );
}

export default Button;
