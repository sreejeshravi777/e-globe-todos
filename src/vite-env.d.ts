/// <reference types="vite/client" />

interface ImportMetaEnv {
    BASE_URL: string;
    readonly VITE_API_BASE_URL: string;
    // add more env variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  