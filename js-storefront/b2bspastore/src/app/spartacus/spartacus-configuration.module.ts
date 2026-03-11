import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  provideConfigFactory,
  SiteContextConfig,
} from '@spartacus/core';
import { defaultB2bOccConfig } from '@spartacus/setup';
import {
  defaultCmsContentProviders,
  layoutConfigFactory,
  mediaConfig,
} from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfigFactory(layoutConfigFactory),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          //baseUrl: 'OCC_BACKEND_BASE_URL_VALUE', prefix: '/occ/v2/'
           baseUrl: 'https://api.czoc5dfcf0-novalneta2-d1-public.model-t.cc.commerce.ondemand.com', prefix: '/occ/v2/'
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
	baseSite: ['powertools-spa'],
	currency: ['USD', 'GBP',]
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: translationsEn },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '221121.7',
      },
    }),
    provideConfig(defaultB2bOccConfig),
  ],
})
export class SpartacusConfigurationModule {}
