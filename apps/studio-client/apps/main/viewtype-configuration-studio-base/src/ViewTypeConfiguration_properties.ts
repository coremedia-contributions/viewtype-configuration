import { SvgIconUtil } from "@coremedia/studio-client.base-models";
import { createRule } from "@coremedia/studio-client.common-icons";

/**
 * Interface values for ResourceBundle "ViewTypeConfiguration".
 * @see ViewTypeConfiguration_properties#INSTANCE
 */
interface ViewTypeConfiguration_properties {
  ViewTypeConfigurationTitle: string
  ViewTypeConfigurationIcon: string
  ViewTypeConfigurationTooltip: string
}

/**
 * Singleton for the current user Locale's instance of ResourceBundle "ViewTypeConfiguration".
 * @see ViewTypeConfiguration_properties
 */
const ViewTypeConfiguration_properties: ViewTypeConfiguration_properties = {
  ViewTypeConfigurationTitle: "Layout Options",
  ViewTypeConfigurationIcon: SvgIconUtil.getIconStyleClassForSvgIcon(createRule),
  ViewTypeConfigurationTooltip: "Configure additional Layout Options",
};

export default ViewTypeConfiguration_properties;
