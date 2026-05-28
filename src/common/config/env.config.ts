import * as v from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class EnvironmentVariables {
  @v.IsNotEmpty()
  @v.IsString()
  DATABASE_URL: string;
}

export function validateConfig(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = v.validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    console.error('Invalid environment variables');
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
