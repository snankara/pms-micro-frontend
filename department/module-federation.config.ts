import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'department',
  exposes: {
    './Module': 'department/src/app/app.module.ts',
  },

};

export default config;
