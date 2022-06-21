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
import Separator from "@jangaroo/ext-ts/toolbar/Separator";
import { cast } from "@jangaroo/runtime";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import ExtendedToolbarDesignIconButton from "../components/ExtendedToolbarDesignIconButton";

interface AddAdditinalConfigItemsPluginConfig extends Config<AddItemsPlugin>, Partial<Pick<AddAdditinalConfigItemsPlugin,
        "bindTo"
        >> {
}

class AddAdditinalConfigItemsPlugin extends AddItemsPlugin {
  declare Config: AddAdditinalConfigItemsPluginConfig;

  constructor(config: Config<AddAdditinalConfigItemsPlugin> = null) {
    const componentConfig: PlacementLinkListPropertyField = cast(PlacementLinkListPropertyField, config.cmp);
    super(ConfigUtils.apply(Config(AddAdditinalConfigItemsPlugin, {
      items: [
        Config(Separator),
        Config(ExtendedToolbarDesignIconButton, {
          bindTo: config.bindTo,
          sectionName: componentConfig.section.getName(),
          viewtypeVE: LinkListUtil.createLinkValueExpression(config.bindTo, [PageGridUtil.getPlacementPropertyPath("placement", componentConfig.section), PageGridConstants.VIEWTYPE_PROPERTY_NAME].join("."), "CMViewtype"),
        }),
      ],
      after: [
        Config(Component, { itemId: PlacementField.VIEWTYPE_SELECTOR_ITEM_ID }),
      ],

    }), config));
  }

  bindTo: ValueExpression = null;

}

export default AddAdditinalConfigItemsPlugin;
