import React, { useState, useEffect } from "react";
import { UniformPlaygroundDecorator } from "@uniformdev/canvas-react";
import { IS_RENDERED_BY_UNIFORM_ATTRIBUTE } from "@uniformdev/canvas";

type ComponentType =
  | "hero";

const sizes = {
  "Full Width": "100%",
  "2XL": "1536px",
  XL: "1280px",
  LG: "1024px",
  MD: "768px",
  SM: "640px",
  XS: "480px",
  "2XS": "320px",
};

const defaultSizes: Record<ComponentType, keyof typeof sizes> = {
  hero: "MD"
};

export const ResizablePlaygroundDecorator: UniformPlaygroundDecorator = ({
  children,
  data,
}) => {
  const componentType = data?.type as ComponentType | undefined;
  const defaultSize = componentType ? defaultSizes[componentType] : "2XL";
  const [selectedSize, setSelectedSize] = useState(sizes[defaultSize]);

  useEffect(() => {
    if (componentType) {
      const newSize = sizes[defaultSizes[componentType]];
      setSelectedSize(newSize);
    }
  }, [componentType]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full" style={{ maxWidth: selectedSize }}>
        {children}
      </div>
      <div className="mt-8 mb-4">
        {Object.entries(sizes).map(([label, size]) => (
          <button
            key={size}
            className={`px-4 py-2 mx-1 text-sm font-medium rounded-md ${
              selectedSize === size
                ? "text-white"
                : "bg-white text-black border border-gray-300"
            }`}
            onClick={() => setSelectedSize(size)}
            style={selectedSize === size ? { backgroundColor: "#7952C6" } : {}}
            {...{ [IS_RENDERED_BY_UNIFORM_ATTRIBUTE]: true }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
