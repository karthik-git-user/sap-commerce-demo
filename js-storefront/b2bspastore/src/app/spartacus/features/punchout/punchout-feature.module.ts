import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import {
  punchoutTranslationChunksConfig,
  punchoutTranslationsEn,
} from '@spartacus/punchout/assets';
import { PUNCHOUT_FEATURE, PunchoutRootModule } from '@spartacus/punchout/root';

@NgModule({
  declarations: [],
  imports: [PunchoutRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [PUNCHOUT_FEATURE]: {
          module: () => import('@spartacus/punchout').then((m) => m.PunchoutModule),
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: punchoutTranslationsEn },
        chunks: punchoutTranslationChunksConfig,
      },
    }),
  ],
})
export class PunchoutFeatureModule {}
