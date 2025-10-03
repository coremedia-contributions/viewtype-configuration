
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

interface MultiColumnOptionsFormConfig extends Config<ViewTypeConfigurationForm> {}

class ColumnCountOptionsForm extends ViewTypeConfigurationForm {

  declare Config: MultiColumnOptionsFormConfig;

  constructor(config: Config<ColumnCountOptionsForm> = null) {
    super(ConfigUtils.apply(Config(ColumnCountOptionsForm, {
      itemId: "MultiColumnViewtypeOptions",
      collapsible: false,
      items: [
        Config(BoundRadioGroup, {
          fieldLabel: "Column Count",
          hideLabel: false,
          flex: 1,
          itemId: "columnCountOptions",
          bindTo: config.bindTo.extendBy(ContentPropertyNames.PROPERTIES).extendBy(ViewTypeConfigurationForm.calculatePath("columnCount", config.pathSuffix)),
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
              inputValue: "1",
              boxLabel: "1 Column",
              cls: "columnCount columns--1",
            }),
            Config(StatefulRadio, {
              inputValue: "2",
              boxLabel: "2 Columns",
              cls: "columnCount columns--2",
            }),
            Config(StatefulRadio, {
              inputValue: "3",
              boxLabel: "3 Columns",
              cls: "columnCount columns--3",
            }),
            Config(StatefulRadio, {
              inputValue: "4",
              boxLabel: "4 Columns",
              cls: "columnCount columns--4",
            }),
          ],
        }),
      ],
    }), config));
  }

}

export default ColumnCountOptionsForm;
