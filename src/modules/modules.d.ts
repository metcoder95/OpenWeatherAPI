import { Router } from 'express';

interface IModule {
  basePath: string;
  routes: Router;
}

interface IModules {
  [name: string]: IModule;
}
