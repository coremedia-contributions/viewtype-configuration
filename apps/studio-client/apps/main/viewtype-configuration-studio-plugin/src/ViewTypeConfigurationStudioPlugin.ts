import ViewTypeSelectorForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/ViewTypeSelectorForm";
import GetSurroundingContainerPlugin from "@coremedia-labs/studio-client.ext.viewtype-configuration-studio-client/plugins/GetSurroundingContainerPlugin";
import ContentTypes_properties from "@coremedia/studio-client.cap-base-models/content/ContentTypes_properties";
import AddItemsPlugin from "@coremedia/studio-client.ext.ui-components/plugins/AddItemsPlugin";

import PageGridPropertyField
  from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PageGridPropertyField";
import CopyResourceBundleProperties
  from "@coremedia/studio-client.main.editor-components/configuration/CopyResourceBundleProperties";
import StudioPlugin from "@coremedia/studio-client.main.editor-components/configuration/StudioPlugin";

import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import resourceManager from "@jangaroo/runtime/l10n/resourceManager";
import ViewTypeConfiguration_properties from "./ViewTypeConfiguration_properties";
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
          Config(PageGridPropertyField, {
            plugins: [
              Config(GetSurroundingContainerPlugin, {
                items: [
                  Config(StoriesSliderOptionsForm),
                  Config(TetrisBlockOptionsForm),
                ],
              }),
            ],
          }),
        ],
        configuration: [
          new CopyResourceBundleProperties({
            destination: resourceManager.getResourceBundle(null, ContentTypes_properties),
            source: resourceManager.getResourceBundle(null, ViewTypeConfiguration_properties),
          }),
        ],
      }), config);
    })());
  }
}

export default ViewTypeConfigurationStudioPlugin;
