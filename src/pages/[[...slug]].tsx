import { prependLocale, withUniformGetServerSideProps } from "@uniformdev/canvas-next/route";
import {
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";

import PageComposition from "@/components/page/page-composition";

export const getServerSideProps = withUniformGetServerSideProps({
  requestOptions: (context) => ({
    state: Boolean(context.preview)
      ? CANVAS_DRAFT_STATE
      : CANVAS_PUBLISHED_STATE,
  }),
  modifyPath: (path, context) => {
      const resultingPath = prependLocale(path, context);
    return resultingPath;
  },
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

export default PageComposition;