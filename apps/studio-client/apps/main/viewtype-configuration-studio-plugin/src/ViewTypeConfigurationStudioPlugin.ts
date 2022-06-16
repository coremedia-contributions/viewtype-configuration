import ViewTypeSelectorForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/ViewTypeSelectorForm";
import AddItemsPlugin from "@coremedia/studio-client.ext.ui-components/plugins/AddItemsPlugin";

import StudioPlugin from "@coremedia/studio-client.main.editor-components/configuration/StudioPlugin";

import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import StoriesSliderOptionsForm from "./configuration/StoriesSliderOptionsForm";
import TetrisBlockOptionsForm from "./configuration/TetrisBlockOptionsForm";

interface ViewTypeConfigurationStudioPluginConfig extends Config<StudioPlugin> {
}

class ViewTypeConfigurationStudioPlugin extends StudioPlugin {
  declare Config: ViewTypeConfigurationStudioPluginConfig;

  constructor(config: Config<ViewTypeConfigurationStudioPlugin> = null) {
    super((() => {
      return ConfigUtils.apply(Config(ViewTypeConfigurationStudioPlugin, {

        rules: [
          Config(ViewTypeSelectorForm, {
            plugins: [
              Config(AddItemsPlugin, {
                items: [
                  Config(StoriesSliderOptionsForm),
                  Config(TetrisBlockOptionsForm),
                ],
              }),
            ],
          }),
        ],
      }), config);
    })());
  }
}

export default ViewTypeConfigurationStudioPlugin;
