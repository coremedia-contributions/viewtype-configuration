
import ViewTypeConfigurationForm
  from "@coremedia-labs/studio-client.ext.viewtype-configuration-studio-client/editors/ViewTypeConfigurationForm";
import ContentPropertyNames from "@coremedia/studio-client.cap-rest-client/content/ContentPropertyNames";
import BoundRadioGroup from "@coremedia/studio-client.ext.ui-components/components/BoundRadioGroup";
import StatefulRadio from "@coremedia/studio-client.ext.ui-components/components/StatefulRadio";
import BindDisablePlugin
  from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/plugins/BindDisablePlugin";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";

interface TetrisBlockOptionsFormConfig extends Config<ViewTypeConfigurationForm> {}

class TetrisBlockOptionsForm extends ViewTypeConfigurationForm {

  declare Config: TetrisBlockOptionsFormConfig;

  constructor(config: Config<TetrisBlockOptionsForm> = null) {
    super(ConfigUtils.apply(Config(TetrisBlockOptionsForm, {
      itemId: "tetrisBlockViewtypeOptions",
      appliesTo: ["tetris"],
      items: [
        Config(BoundRadioGroup, {
          fieldLabel: "Block Shape",
          hideLabel: false,
          flex: 1,
          itemId: "blockShapeOptions",
          bindTo: config.bindTo.extendBy(ContentPropertyNames.PROPERTIES, "localSettings", "tetrisShape"),
          columns: 3,
          ...ConfigUtils.append({
            plugins: [
              Config(BindDisablePlugin, {
                bindTo: config.bindTo,
                forceReadOnlyValueExpression: config.forceReadOnlyValueExpression,
              }),
            ],
          }),
          items: [
            Config(StatefulRadio, {
              inputValue: "i1",
              boxLabel: "Shape I (left)",
              cls: "tetris-shape tetris-shape--i1",
            }),
            Config(StatefulRadio, {
              inputValue: "i2",
              boxLabel: "Shape I (right)",
              cls: "tetris-shape tetris-shape--i2",
            }),
            Config(StatefulRadio, {
              inputValue: "j",
              boxLabel: "Shape J",
              cls: "tetris-shape tetris-shape--j",
            }),
            Config(StatefulRadio, {
              inputValue: "l",
              boxLabel: "Shape L",
              cls: "tetris-shape tetris-shape--l",
            }),
            Config(StatefulRadio, {
              inputValue: "o",
              boxLabel: "Shape O",
              cls: "tetris-shape tetris-shape--o",
              checked: true,
            }),
            Config(StatefulRadio, {
              inputValue: "s",
              boxLabel: "Shape S",
              cls: "tetris-shape tetris-shape--s",
            }),
            Config(StatefulRadio, {
              inputValue: "t1",
              boxLabel: "Shape T (left)",
              cls: "tetris-shape tetris-shape--t1",
            }),
            Config(StatefulRadio, {
              inputValue: "t2",
              boxLabel: "Shape T (right)",
              cls: "tetris-shape tetris-shape--t2",
            }),
            Config(StatefulRadio, {
              inputValue: "z",
              boxLabel: "Shape Z",
              cls: "tetris-shape tetris-shape--z",
            }),
          ],
        }),
      ],
    }), config));
  }

}

export default TetrisBlockOptionsForm;
