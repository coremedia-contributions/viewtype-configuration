const { jangarooConfig } = require("@jangaroo/core");

module.exports = jangarooConfig({
  type: "code",
  sencha: {
    name: "com.coremedia.blueprint__viewtype-configuration-studio-client.main",
    namespace: "com.coremedia.blueprint.viewtypeconfiguration.main",
    studioPlugins: [
      {
        mainClass: "com.coremedia.blueprint.viewtypeconfiguration.main.ViewTypeConfigurationStudioPlugin",
        name: "Viewtype Configuration",
      },
    ],
  },
});
