import StudioPlugin from "@coremedia/studio-client.main.editor-components/configuration/StudioPlugin";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";

interface ViewTypeConfigurationStudioPluginConfig extends Config<StudioPlugin> {
}

class ViewTypeConfigurationStudioPlugin extends StudioPlugin {
  declare Config: ViewTypeConfigurationStudioPluginConfig;

  constructor(config: Config<ViewTypeConfigurationStudioPlugin> = null) {
    super((() => {
      return ConfigUtils.apply(Config(ViewTypeConfigurationStudioPlugin, {}), config);
    })());
  }
}

export default ViewTypeConfigurationStudioPlugin;
