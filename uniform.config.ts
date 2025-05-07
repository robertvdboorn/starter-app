import type { CLIConfiguration } from "@uniformdev/cli";

const config: CLIConfiguration = {
  serialization: {
    format: "yaml",
    mode: "mirror",
    directory: "./uniform",
    entitiesConfig: {
      aggregate: {},
      asset: {},
      category: {},
      component: {},
      componentPattern: {},
      composition: {},
      compositionPattern: {},
      contentType: {},
      dataType: {},
      enrichment: {},
      entry: {},
      entryPattern: {},
      locale: {},          
      previewUrl: {},
      previewViewport: {},      
      projectMapDefinition: {},
      projectMapNode: {},
      prompt: {},
      quirk: {},
      redirect: {},
      signal: {},
      test: {},
      workflow: {},
      
    },
  },
};

module.exports = config;
