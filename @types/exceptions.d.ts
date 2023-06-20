declare module '@gentifly/exceptions' {
  import { Exception } from '@gentifly/exceptions';

  export class EnvironmentFileNotFoundException extends Exception {
    constructor();
  }

  export class EnvironmentNotFoundException extends Exception {
    constructor(name: keyof NodeJS.ProcessEnv);
  }
}
