const { jangarooConfig } = require("@jangaroo/core");

module.exports = jangarooConfig({
  type: "code",
  sencha: {
    name: "com.coremedia.blueprint__viewtype-configuration-studio-client",
    namespace: "com.coremedia.blueprint.viewtypeconfiguration.studio",
    studioPlugins: [
      {
        mainClass: "com.coremedia.blueprint.viewtypeconfiguration.studio.ViewTypeConfigurationStudioPlugin",
        name: "Viewtype Configuration",
      },
    ],
  },
});
