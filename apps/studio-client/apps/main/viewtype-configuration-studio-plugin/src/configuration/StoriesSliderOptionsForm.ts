import ColorPickerPropertyField
  from "@coremedia-labs/studio-client.ext.color-picker-studio-client/components/ColorPickerPropertyField";
import ViewTypeConfigurationForm
  from "@coremedia-labs/studio-client.ext.viewtype-configuration-studio-client/editors/ViewTypeConfigurationForm";
import AdvancedFieldContainer from "@coremedia/studio-client.ext.ui-components/components/AdvancedFieldContainer";
import IntegerPropertyField
  from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/IntegerPropertyField";
import HBoxLayout from "@jangaroo/ext-ts/layout/container/HBox";
import Spacer from "@jangaroo/ext-ts/toolbar/Spacer";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";

interface StoriesSliderOptionsFormConfig extends Config<ViewTypeConfigurationForm> {}

class StoriesSliderOptionsForm extends ViewTypeConfigurationForm {

  declare Config: StoriesSliderOptionsFormConfig;

  constructor(config: Config<StoriesSliderOptionsForm> = null) {
    super(ConfigUtils.apply(Config(StoriesSliderOptionsForm, {
      itemId: "storiesSliderViewtypeOptions",
      appliesTo: ["stories-slider"],
      items: [
        Config(AdvancedFieldContainer, {
          labelSeparator: "",
          labelAlign: "top",
          items: [
            Config(IntegerPropertyField, {
              labelSeparator: "",
              labelAlign: "top",
              bindTo: config.bindTo,
              propertyName: ViewTypeConfigurationForm.calculatePath("itemsToShowOnDesktop", config.pathSuffix).join("."),
              flex: 1,
            }),
            Config(Spacer, { width: 20 }),
            Config(IntegerPropertyField, {
              labelSeparator: "",
              labelAlign: "top",
              bindTo: config.bindTo,
              propertyName: ViewTypeConfigurationForm.calculatePath("itemsToShowOnMobile", config.pathSuffix).join("."),
              flex: 1,
            }),
          ],
          layout: Config(HBoxLayout, { align: "stretch" }),
        }),

        Config(Spacer, { height: 5 }),

        Config(ColorPickerPropertyField, {
          propertyName: ViewTypeConfigurationForm.calculatePath("containerBackgroundColor", config.pathSuffix).join("."),
          initialColor: "#ffffff",
        }),
        Config(ColorPickerPropertyField, { propertyName: ViewTypeConfigurationForm.calculatePath("textColor", config.pathSuffix).join(".") }),
      ],
    }), config));
  }

}

export default StoriesSliderOptionsForm;
