import Image from "next/image";
import { UniformText } from "@uniformdev/canvas-react";
import { imageFrom } from "@uniformdev/assets";
import type { AssetParamValue } from "@uniformdev/assets";
import type { LinkParamValue } from "@uniformdev/canvas";

function FooterLink({
  link,
  openInNewTab = false,
  icon,
}: {
  link?: LinkParamValue;
  openInNewTab?: boolean;
  icon: AssetParamValue;
}) {
  const isSupportedLink = link?.type === "url" || link?.type === "projectMapNode";
  const href = isSupportedLink && link?.path?.length ? link.path : "#";
  const shouldOpenInNewTab = openInNewTab;

  const [firstAsset] = icon ?? [];
  const iconUrl = firstAsset
    ? imageFrom(firstAsset)
        .transform({ width: 16, height: 16, fit: "cover" })
        .url()
    : undefined;

  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={href}
      target={shouldOpenInNewTab ? "_blank" : "_self"}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
    >
      {iconUrl && (
        <Image
          aria-hidden
          src={iconUrl}
          alt={firstAsset?.fields.description?.value ?? "Link icon"}
          width={16}
          height={16}
        />
      )}
      <UniformText parameterId="label" placeholder="Link label goes here" />
    </a>
  );
}

export default FooterLink;
