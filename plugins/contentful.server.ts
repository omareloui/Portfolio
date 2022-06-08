import { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const client = createClient({
    space: config.private.CONTENTFUL_SPACE_ID,
    accessToken: config.private.CONTENTFUL_ACCESS_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});
