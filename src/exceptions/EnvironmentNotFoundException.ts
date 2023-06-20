import { Exception } from '@gentifly/exceptions';

export class EnvironmentNotFoundException extends Exception {
  constructor(name: keyof NodeJS.ProcessEnv) {
    super('EnvironmentNotFound', `environment ${name} not found`, 404);
  }
}
