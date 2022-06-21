import ValueExpression from "@coremedia/studio-client.client-core/data/ValueExpression";
import IconButton from "@coremedia/studio-client.ext.ui-components/components/IconButton";
import Menu from "@jangaroo/ext-ts/menu/Menu";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import resourceManager from "@jangaroo/runtime/l10n/resourceManager";
import ViewTypeConfiguration_properties from "../ViewTypeConfiguration_properties";

interface ExtendedToolbarDesignIconButtonConfig extends Config<IconButton>, Partial<Pick<ExtendedToolbarDesignIconButton,
        "bindTo" |
        "sectionName" |
        "items" |
        "viewtypeVE"
        >> {
}

class ExtendedToolbarDesignIconButton extends IconButton {
  declare Config: ExtendedToolbarDesignIconButtonConfig;

  static override readonly xtype: string = "com.coremedia.blueprint.studio.config.ExtendedToolbarDesignIconButton";

  constructor(config: Config<ExtendedToolbarDesignIconButton> = null) {
    super((ConfigUtils.apply(Config(ExtendedToolbarDesignIconButton, {
      iconCls: resourceManager.getString("com.coremedia.icons.CoreIcons", "create_rule"),
      tooltip: ViewTypeConfiguration_properties.ViewTypeConfigurationTooltip,
      text: ViewTypeConfiguration_properties.ViewTypeConfigurationTitle,
      menu: Config(Menu, {
        items: config.items,
        defaults: {
          bindTo: config.bindTo,
          viewtypeVE: config.viewtypeVE,
          pathSuffix: config.sectionName,
        },
      }),
    }), config)
    ));
  }

  bindTo: ValueExpression = null;

  viewtypeVE: ValueExpression = null;

  sectionName: string = null;

  items: Array<any> = null;

}

export default ExtendedToolbarDesignIconButton;
