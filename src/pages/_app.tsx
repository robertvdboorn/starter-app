import "@/styles/globals.css";
import createUniformContext from "@/uniformContext/context";
import { UniformAppProps } from "@uniformdev/context-next";
import { UniformContext } from "@uniformdev/context-react";

const clientContext = createUniformContext();
export default function App({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext context={serverUniformContext ?? clientContext}>
      <Component {...pageProps} />
    </UniformContext>
  );
}
