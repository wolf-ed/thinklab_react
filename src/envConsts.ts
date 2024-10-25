export enum APP_ENVS_ENUM {
  VITE_API_PRODUCTION = 'VITE_API_PRODUCTION',
  VITE_GEMINI_API_KEY = 'VITE_GEMINI_API_KEY',
}

export const getEnv = (envKey: APP_ENVS_ENUM): string | undefined => {
  return import.meta.env[envKey];
};

/**
 * This Env is used to disable functionalities that must not work in Prod
 */
export const ENV_IS_PROD = import.meta.env.VITE_API_PRODUCTION === 'true';
