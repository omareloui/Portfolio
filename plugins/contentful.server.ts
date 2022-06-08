import contentful from "contentful";
import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const createClientFunc =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient;
  const client = createClientFunc({
    space: config.private.CONTENTFUL_SPACE_ID,
    accessToken: config.private.CONTENTFUL_ACCESS_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});
