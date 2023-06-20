import { Exception } from '@gentifly/exceptions';

export class EnvironmentFileNotFoundException extends Exception {
  constructor() {
    super('EnvironmentFileNotFound', 'environment file not found', 404);
  }
}
