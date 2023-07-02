declare module '@gentifly/environment' {
  import { Exception } from '@gentifly/exceptions';

  export class EnvironmentNotFoundException extends Exception {
    constructor(name: keyof NodeJS.ProcessEnv);
  }
}
