declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      API_KEY: string;
      SECRET_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
