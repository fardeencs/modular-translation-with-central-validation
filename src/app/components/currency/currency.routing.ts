import { Routes } from '@angular/router';
import { AuthGuard } from '../../services/auth_guard.service';
import * as Constant from '../../modules/constants';
import { PermissionResolver } from '../../services/permission-resolver.service';
import { PermissionGuard } from '../../services/permission_guard.service';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CurrencyRatesComponent } from './currency-rates/add/add.component'
import { ViewComponent } from './view/view.component';

export const CurrencyRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
    canActivate: [AuthGuard,PermissionGuard],
    data: {
      title: 'COMMON.TITLES.CURRENCY_LIST',
      moduleID: Constant.MODULE_ID.CURRENCY,
      action: Constant.MODULE_ACTIONS.CURRENCY.VIEW
    },
    resolve: { permission: PermissionResolver }
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuard,PermissionGuard],
    data: {
      title: 'COMMON.TITLES.CURRENCY_ADD',
      moduleID: Constant.MODULE_ID.CURRENCY,
      action: Constant.MODULE_ACTIONS.CURRENCY.ADD
    },
    resolve: { permission: PermissionResolver }
  },
  {
    path: 'view',
    component: ListComponent,
    canActivate: [AuthGuard,PermissionGuard],
    data: {
      title: 'COMMON.TITLES.CURRENCY_LIST',
      moduleID: Constant.MODULE_ID.CURRENCY,
      action: Constant.MODULE_ACTIONS.CURRENCY.VIEW
    },
    resolve: { permission: PermissionResolver }
  },
  {
    path: 'edit/:id',
    component: AddComponent,
    canActivate: [AuthGuard,PermissionGuard],
    data: {
      title: 'COMMON.TITLES.CURRENCY_EDIT',
      moduleID: Constant.MODULE_ID.CURRENCY,
      action: Constant.MODULE_ACTIONS.CURRENCY.EDIT
    },
    resolve: { permission: PermissionResolver }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    canActivate: [AuthGuard,PermissionGuard],
    data: {
      title: 'COMMON.TITLES.CURRENCY_VIEW',
      moduleID: Constant.MODULE_ID.CURRENCY,
      action: Constant.MODULE_ACTIONS.CURRENCY.VIEW
    },
    resolve: { permission: PermissionResolver }
  },
  {
    path: 'rate',
    component: CurrencyRatesComponent,
    canActivate: [AuthGuard,PermissionGuard],
    data: {
      title: 'COMMON.TITLES.CURRENCY_RATES',
      moduleID: Constant.MODULE_ID.CURRENCY,
      action: Constant.MODULE_ACTIONS.CURRENCY_RATES.ADD
    },
    resolve: { permission: PermissionResolver }
  }
];
