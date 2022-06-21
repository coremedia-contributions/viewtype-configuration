import ContentPropertyNames from "@coremedia/studio-client.cap-rest-client/content/ContentPropertyNames";
import ValueExpression from "@coremedia/studio-client.client-core/data/ValueExpression";
import ValueExpressionFactory from "@coremedia/studio-client.client-core/data/ValueExpressionFactory";
import PropertyFieldGroup from "@coremedia/studio-client.main.editor-components/sdk/premular/PropertyFieldGroup";
import { bind } from "@jangaroo/runtime";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import ViewTypeConfiguration_properties from "../ViewTypeConfiguration_properties";

interface ViewTypeConfigurationFormConfig extends Config<PropertyFieldGroup>, Partial<Pick<ViewTypeConfigurationForm,
        "appliesTo" |
        "pathSuffix" |
        "viewtypeVE"
>> {}

class ViewTypeConfigurationForm extends PropertyFieldGroup {

  declare Config: ViewTypeConfigurationFormConfig;

  constructor(config: Config<ViewTypeConfigurationForm> = null) {
    super(ConfigUtils.apply(Config(ViewTypeConfigurationForm, {
      title: ViewTypeConfiguration_properties.ViewTypeConfigurationTitle,
      collapsed: true,
      cls: "cm-viewtype-options",
      bodyPadding: "0 0 0 24px",
    }), config));

    this.appliesTo = config.appliesTo;
  }

  private static DEFAULT_PATH: Array<string> = ["localSettings", "viewtypeConfiguration"];

  public static calculatePath = (value: string, prefix?: string): Array<string> =>{
    return prefix ? ViewTypeConfigurationForm.DEFAULT_PATH.concat(prefix, value) : ViewTypeConfigurationForm.DEFAULT_PATH.concat(value);
  };

  protected override afterRender() {
    super.afterRender();

    this.selectedViewTypeExpression = this.viewtypeVE || this.bindTo.extendBy(ContentPropertyNames.PROPERTIES, "viewtype", "0");
    this.selectedViewTypeExpression.addChangeListener(bind(this, this.#handleViewTypeChange));

    // Initial load
    this.#handleViewTypeChange();
  }

  /** List of viewtype names the form items apply to, options are hidden otherwise. */
  appliesTo: Array<String> = [];

  selectedViewTypeExpression: ValueExpression;

  viewtypeVE: ValueExpression = null;

  pathSuffix: string = null;

  #handleViewTypeChange() {
    const selectedViewType = this.selectedViewTypeExpression.getValue();
    if (selectedViewType) {
      ValueExpressionFactory.create(ContentPropertyNames.NAME, selectedViewType).loadValue((viewTypeName: string) => {
        this.#updateVisibility(viewTypeName);
      });
    } else {
      this.#updateVisibility(null);
    }
  }

  #updateVisibility(viewType: string): void {
    let isVisible = true;

    if (this.appliesTo && this.appliesTo.length > 0) {
      // viewtype needs to match one of the configured viewtypes
      isVisible = this.appliesTo.indexOf(viewType) >= 0;
    }

    if (isVisible) {
      this.show();
    } else {
      this.hide();
    }

  }

}

export default ViewTypeConfigurationForm;
