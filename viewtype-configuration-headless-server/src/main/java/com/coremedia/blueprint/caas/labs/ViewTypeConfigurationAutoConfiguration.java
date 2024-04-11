package com.coremedia.blueprint.caas.labs;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import java.io.IOException;
import java.util.Arrays;

@AutoConfiguration
public class ViewTypeConfigurationAutoConfiguration {

  @Bean
  @Qualifier("graphqlSchemaResource")
  public Resource viewtypeConfigurationSchemaResource() throws IOException {
    PathMatchingResourcePatternResolver loader = new PathMatchingResourcePatternResolver();
    return Arrays.stream(loader.getResources("classpath*:viewtype-configuration-schema.graphql"))
            .findFirst()
            .orElseThrow(() -> new IOException("GraphQl schema resource 'viewtype-configuration-schema.graphql' not found."));
  }
}
