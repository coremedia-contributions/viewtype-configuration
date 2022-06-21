import ValueExpression from "@coremedia/studio-client.client-core/data/ValueExpression";
import IconButton from "@coremedia/studio-client.ext.ui-components/components/IconButton";
import DisplayField from "@jangaroo/ext-ts/form/field/Display";
import Menu from "@jangaroo/ext-ts/menu/Menu";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import resourceManager from "@jangaroo/runtime/l10n/resourceManager";
import StoriesSliderOptionsForm from "../configuration/StoriesSliderOptionsForm";
import TetrisBlockOptionsForm from "../configuration/TetrisBlockOptionsForm";

interface ExtendedToolbarDesignIconButtonConfig extends Config<IconButton>, Partial<Pick<ExtendedToolbarDesignIconButton,
        "bindTo" |
        "viewtypeVE"
        >> {
}

class ExtendedToolbarDesignIconButton extends IconButton {
  declare Config: ExtendedToolbarDesignIconButtonConfig;

  static override readonly xtype: string = "com.coremedia.blueprint.studio.config.ExtendedToolbarDesignIconButton";

  constructor(config: Config<ExtendedToolbarDesignIconButton> = null) {
    super((ConfigUtils.apply(Config(ExtendedToolbarDesignIconButton, {
      iconCls: resourceManager.getString("com.coremedia.icons.CoreIcons", "create_rule"),
      tooltip: "Set additional stuff",
      text: "Stuff",
      menu: Config(Menu, {
        items: [
          Config(DisplayField, { value: config.viewtypeVE.getValue() }),
          Config(StoriesSliderOptionsForm),
          Config(TetrisBlockOptionsForm),
        ],
        defaults: {
          bindTo: config.bindTo,
          viewtypeVE: config.viewtypeVE,
        },
      }),
    }), config)
    ));
  }

  bindTo: ValueExpression = null;

  viewtypeVE: ValueExpression = null;

}

export default ExtendedToolbarDesignIconButton;
