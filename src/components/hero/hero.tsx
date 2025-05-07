import Image from "next/image";
import { UniformSlot, UniformText } from "@uniformdev/canvas-react";
import { imageFrom } from "@uniformdev/assets";
import type { AssetParamValue } from "@uniformdev/assets";

function Hero({ image }: { image?: AssetParamValue }) {
  const [firstAsset] = image ?? [];

  const imageUrl = firstAsset
    ? imageFrom(firstAsset)
        .transform({ width: 180, height: 38, fit: "cover" })
        .url()
    : undefined;

  const width = firstAsset?.fields.width?.value ?? 180;
  const height = firstAsset?.fields.height?.value ?? 38;

  return (
    <>
      {imageUrl && (
        <Image
          className="dark:invert"
          src={imageUrl}
          alt={firstAsset?.fields.description?.value ?? "Hero image"}
          width={width}
          height={height}
          priority
        />
      )}
      <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <UniformText
          parameterId="title"
          placeholder="Title goes here"
          as="h2"
          className="text-2xl font-bold"
        />
        <UniformText
          parameterId="description"
          placeholder="Description goes here"
          as="p"
          className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
        />
      </ol>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <UniformSlot name="buttons" />
      </div>
    </>
  );
}

export default Hero;
