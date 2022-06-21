import Content from "@coremedia/studio-client.cap-rest-client/content/Content";
import ValueExpression from "@coremedia/studio-client.client-core/data/ValueExpression";
import ValueExpressionFactory from "@coremedia/studio-client.client-core/data/ValueExpressionFactory";
import IconButton from "@coremedia/studio-client.ext.ui-components/components/IconButton";
import BindVisibilityPlugin from "@coremedia/studio-client.ext.ui-components/plugins/BindVisibilityPlugin";

import Menu from "@jangaroo/ext-ts/menu/Menu";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import resourceManager from "@jangaroo/runtime/l10n/resourceManager";
import ViewTypeConfiguration_properties from "../ViewTypeConfiguration_properties";
import ViewTypeConfigurationForm from "../editors/ViewTypeConfigurationForm";

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

  static getViewtypeName(content: Content): string {
    const properties = content.getProperties();
    if (!properties) {
      return undefined;
    }
    let name: string = properties.get("layout");
    if (!name || name.length == 0) {
      name = content.getName();
    }
    return name;
  }

  static getVisibilityVE(config: Config<ExtendedToolbarDesignIconButton>): ValueExpression {
    return ValueExpressionFactory.createFromFunction((): boolean => {
      if (config.viewtypeVE === undefined || !config.viewtypeVE.getValue()) {
        return undefined;
      }
      const viewtypeName = ExtendedToolbarDesignIconButton.getViewtypeName(config.viewtypeVE.getValue());
      if (viewtypeName === undefined) {
        return undefined;
      }
      return config.items.some(item=>{
        return item.appliesTo.indexOf(viewtypeName) >= 0;
      });
    });
  }

  constructor(config: Config<ExtendedToolbarDesignIconButton> = null) {
    super((ConfigUtils.apply(Config(ExtendedToolbarDesignIconButton, {
      iconCls: resourceManager.getString("com.coremedia.icons.CoreIcons", "create_rule"),
      tooltip: ViewTypeConfiguration_properties.ViewTypeConfigurationTooltip,
      text: ViewTypeConfiguration_properties.ViewTypeConfigurationTitle,
      plugins: [
        Config(BindVisibilityPlugin, { bindTo: ExtendedToolbarDesignIconButton.getVisibilityVE(config) }),
      ],
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

  items: Array<Config<ViewTypeConfigurationForm>> = null;

}

export default ExtendedToolbarDesignIconButton;
