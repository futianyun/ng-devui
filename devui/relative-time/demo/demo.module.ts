import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'ng-devui/data-table';
import { I18nModule } from 'ng-devui/i18n';
import { RelativeTimeModule } from 'ng-devui/relative-time';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslateModule } from '@ngx-translate/core';
import { BasicComponent } from './basic/basic.component';
import { CustomTimeComponent } from './custom-time/custom-time.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent, BasicComponent, CustomTimeComponent],
  imports: [
    TranslateModule,
    CommonModule,
    DataTableModule,
    RelativeTimeModule,
    I18nModule,
    DevUICodeboxModule,
    DevUIApiModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'demo', component: DemoComponent },

      {
        path: 'api',
        component: DevUIApiComponent,
        data: {
          'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
          'en-us': require('!html-loader!markdown-loader!../doc/api-en.md'),
        },
      },
    ]),
  ],
})
export class DemoModule {}
