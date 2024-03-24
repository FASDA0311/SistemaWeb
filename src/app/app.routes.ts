import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path : '',
        children: [
            {
                path: "",
                loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule),
            },
            {
                path: "",
                loadChildren: () => import('./components/private/private.module').then(m => m.PrivateModule),
            }
        ]
    }
];
