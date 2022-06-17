
import ViewTypeConfigurationForm
  from "@coremedia-labs/studio-client.ext.viewtype-configuration-studio-client/editors/ViewTypeConfigurationForm";
import ContentPropertyNames from "@coremedia/studio-client.cap-rest-client/content/ContentPropertyNames";
import BoundRadioGroup from "@coremedia/studio-client.ext.ui-components/components/BoundRadioGroup";
import StatefulRadio from "@coremedia/studio-client.ext.ui-components/components/StatefulRadio";
import BindDisablePlugin
  from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/plugins/BindDisablePlugin";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import ViewTypeConfiguration_properties from "../ViewTypeConfiguration_properties";

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
          bindTo: config.bindTo.extendBy(ContentPropertyNames.PROPERTIES, "localSettings", ViewTypeConfigurationForm.VT_BASE_PATH, "tetrisShape"),
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
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_i1,
              cls: "tetris-shape tetris-shape--i1",
            }),
            Config(StatefulRadio, {
              inputValue: "i2",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_i2,
              cls: "tetris-shape tetris-shape--i2",
            }),
            Config(StatefulRadio, {
              inputValue: "j",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_j,
              cls: "tetris-shape tetris-shape--j",
            }),
            Config(StatefulRadio, {
              inputValue: "l",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_l,
              cls: "tetris-shape tetris-shape--l",
            }),
            Config(StatefulRadio, {
              inputValue: "o",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_o,
              cls: "tetris-shape tetris-shape--o",
              checked: true,
            }),
            Config(StatefulRadio, {
              inputValue: "s",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_s,
              cls: "tetris-shape tetris-shape--s",
            }),
            Config(StatefulRadio, {
              inputValue: "t1",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_t1,
              cls: "tetris-shape tetris-shape--t1",
            }),
            Config(StatefulRadio, {
              inputValue: "t2",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_t2,
              cls: "tetris-shape tetris-shape--t2",
            }),
            Config(StatefulRadio, {
              inputValue: "z",
              boxLabel: ViewTypeConfiguration_properties.TetrisBlock_z,
              cls: "tetris-shape tetris-shape--z",
            }),
          ],
        }),
      ],
    }), config));
  }

}

export default TetrisBlockOptionsForm;
