import React from "react";
import { UniformPlayground } from "@uniformdev/canvas-react";
import { RootComponentInstance } from "@uniformdev/canvas";
import "../../components/page/page";
import { ResizablePlaygroundDecorator } from "../../components/playground/resizable-playground-decorators";
//import { getRouteClient } from "@/utilities/canvasClients";

export type PlaygroundProps = {
  data?: RootComponentInstance | null;
};

export const PlaygroundPage = ({ data }: PlaygroundProps) => {
  if (!data) {
    return (
      <UniformPlayground
        decorators={[ResizablePlaygroundDecorator]}
        contextualEditingDefaultPlaceholder="Placeholder Text"
      />
    );
  }

  return <UniformPlayground decorators={[ResizablePlaygroundDecorator]} />;
};

export default PlaygroundPage;
