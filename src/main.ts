/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {registerLicense} from '@syncfusion/ej2-base';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}
registerLicense("Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQl5hQX5XdEJnUH1Zd3Q=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSX1RfkVnW3haeXZcR2A=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5QdE1jXX1ZdH1WRmRc;MTQ5MzcxNUAzMjMxMmUzMTJlMzMzNUlnTW52a3JtSkZueDFkUGlQc01MK2xDZFFjQUJzWWx6cWQra2Y0d2FPSEU9;MTQ5MzcxNkAzMjMxMmUzMTJlMzMzNUxkWjJ4cnBEdFdJZzNMZWlWRzNSVEpVKzRpbEdjSjVXZGRvbW1QZzZoelE9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdUdrWXtcd3BcRWdYUQ==;MTQ5MzcxOEAzMjMxMmUzMTJlMzMzNWllUVRnY05ERjU1bGN0QnloaSt4TFA1ekdCRzBDQTVMOXJSdVlISThONUk9;MTQ5MzcxOUAzMjMxMmUzMTJlMzMzNVhjWDlYQ2ZlbFA0NEVFU25lVTRRdzBHcG9jM1RqSzBoRVFldWZXNXVwRGc9;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5QdE1jXX1ZdH1RQmRc;MTQ5MzcyMUAzMjMxMmUzMTJlMzMzNVhPVGtkZ3VkRithRDI3VEJoK3hoN3g0K0g4TUUvUExITlgrekNuSXlZR009;MTQ5MzcyMkAzMjMxMmUzMTJlMzMzNUNDeVRsUUxaUEpwT0VqZTVSQ2JQNFNHeHRVL2RNYVlPN1hsQXhLSTI5ZmM9;MTQ5MzcyM0AzMjMxMmUzMTJlMzMzNWllUVRnY05ERjU1bGN0QnloaSt4TFA1ekdCRzBDQTVMOXJSdVlISThONUk9")
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));