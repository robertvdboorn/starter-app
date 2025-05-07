import { UniformComposition } from "@uniformdev/canvas-react";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/route";
import {
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
  RootComponentInstance,
} from "@uniformdev/canvas";
import "@/components/page/page";

export default function Page({ data }: { data: RootComponentInstance }) {
  return <UniformComposition data={data}></UniformComposition>;
}

export const getServerSideProps = withUniformGetServerSideProps({
  requestOptions: (context) => ({
    state: Boolean(context.preview)
      ? CANVAS_DRAFT_STATE
      : CANVAS_PUBLISHED_STATE,
  }),
  handleComposition: async (routeResponse, _context) => {
    const { composition, errors } = routeResponse.compositionApiResponse || {};

    if (errors?.some((e) => e.type === "data" || e.type === "binding")) {
      return { notFound: true };
    }

    const preview = Boolean(_context.preview);

    return {
      props: { preview, data: composition || null },
    };
  },
});
