import ValueExpression from "@coremedia/studio-client.client-core/data/ValueExpression";
import AddItemsPlugin from "@coremedia/studio-client.ext.ui-components/plugins/AddItemsPlugin";
import PageGridConstants
  from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PageGridConstants";
import PageGridUtil from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PageGridUtil";
import PlacementField from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PlacementField";
import PlacementLinkListPropertyField
  from "@coremedia/studio-client.main.bpbase-pagegrid-studio-plugin/pagegrid/PlacementLinkListPropertyField";
import LinkListUtil from "@coremedia/studio-client.main.editor-components/sdk/util/LinkListUtil";
import Component from "@jangaroo/ext-ts/Component";
import { cast } from "@jangaroo/runtime";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import ViewTypeConfigurationForm from "../editors/ViewTypeConfigurationForm";
import ExtendedToolbarDesignIconButton from "./ExtendedToolbarDesignIconButton";

interface AddAdditionalConfigItemsPluginConfig extends Config<AddItemsPlugin>, Partial<Pick<AddAdditionalConfigItemsPlugin,
        "bindTo" |
        "viewtypeConfigurationItems"
        >> {
}

class AddAdditionalConfigItemsPlugin extends AddItemsPlugin {
  declare Config: AddAdditionalConfigItemsPluginConfig;

  constructor(config: Config<AddAdditionalConfigItemsPlugin> = null) {
    const componentConfig: PlacementLinkListPropertyField = cast(PlacementLinkListPropertyField, config.cmp);
    super(ConfigUtils.apply(Config(AddAdditionalConfigItemsPlugin, {
      items: [
        Config(ExtendedToolbarDesignIconButton, {
          bindTo: config.bindTo,
          sectionName: componentConfig.section.getName(),
          viewtypeVE: LinkListUtil.createLinkValueExpression(config.bindTo, [PageGridUtil.getPlacementPropertyPath("placement", componentConfig.section), PageGridConstants.VIEWTYPE_PROPERTY_NAME].join("."), "CMViewtype"),
          items: config.viewtypeConfigurationItems,
        }),
      ],
      after: [
        Config(Component, { itemId: PlacementField.VIEWTYPE_SELECTOR_ITEM_ID }),
      ],

    }), config));
  }

  bindTo: ValueExpression = null;

  viewtypeConfigurationItems: Array<Config<ViewTypeConfigurationForm>> = null;

}

export default AddAdditionalConfigItemsPlugin;
