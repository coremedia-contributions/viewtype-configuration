import NestedRulesPlugin from "@coremedia/studio-client.ext.ui-components/plugins/NestedRulesPlugin";
import PageGridPropertyField
  from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PageGridPropertyField";
import PlacementLinkListPropertyField
  from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PlacementLinkListPropertyField";

import { cast } from "@jangaroo/runtime";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import ViewTypeConfigurationForm from "../editors/ViewTypeConfigurationForm";
import AddAdditionalConfigItemsPlugin from "./AddAdditionalConfigItemsPlugin";

interface GetSurroundingContainerPluginConfig extends Config<NestedRulesPlugin>, Partial<Pick<GetSurroundingContainerPlugin,
        "items"
        >> {
}

class GetSurroundingContainerPlugin extends NestedRulesPlugin {
  declare Config: GetSurroundingContainerPluginConfig;

  constructor(config: Config<GetSurroundingContainerPlugin> = null) {
    const componentConfig: PageGridPropertyField = cast(PageGridPropertyField, config.cmp);
    super(ConfigUtils.apply(Config(GetSurroundingContainerPlugin, {

      rules: [
        Config(PlacementLinkListPropertyField, {
          plugins: [
            Config(AddAdditionalConfigItemsPlugin, {
              recursive: true,
              bindTo: componentConfig.bindTo,
              viewtypeConfigurationItems: config.items,
            }),
          ],
        }),
      ],
    }), config));
  }

  items: Array<Config<ViewTypeConfigurationForm>> = null;
}

export default GetSurroundingContainerPlugin;
