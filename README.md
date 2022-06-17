![Status: Active](https://documentation.coremedia.com/badges/badge_status_active.png "Status: Active")
![For CoreMedia CMS](https://documentation.coremedia.com/badges/badge_coremedia_cms.png "For CoreMedia CMS")

# Viewtype Configuration

This extension allows you to configure and define additional property editors for dedicated viewtypes. Let me give you some examples:
* You have a list of items that you break after a different definable amount of items on mobile and desktop
* A viewtype requires an additional setting like a look and feel or a background color

### Examples

#### Tetris

![Tetris](docs/images/Tetris.png)

#### Slider

![Slider](docs/images/Slider.png)

### Documentation & Tutorial

Read the [documentation](docs/README.md) or on [GitHub Pages](https://github.com/coremedia-contributions/viewtype-configuration/docs) for more information.

### Installation

- From the project's root folder, clone this repository as a submodule of the extensions folder. Make sure to use the branch name that matches your workspace version. 
```
git submodule add https://github.com/coremedia-contributions/viewtype-configuration modules/extensions/viewtype-configuration
```

- Use the extension tool in the root folder of the project to link the modules to your workspace.
 ```
mvn -f workspace-configuration/extensions com.coremedia.maven:extensions-maven-plugin:LATEST:sync -Denable=viewtype-configuration
```
