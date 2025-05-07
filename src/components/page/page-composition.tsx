import { UniformComposition } from "@uniformdev/canvas-react";
import {
  RootComponentInstance,
} from "@uniformdev/canvas";
import "@/components/page/page";
import { useSetViewportQuirk } from "@/hooks/useSetViewportQuirk";

export default function Page({ data }: { data: RootComponentInstance }) {  
    useSetViewportQuirk();
  
    return <UniformComposition data={data}></UniformComposition>;
  }
  