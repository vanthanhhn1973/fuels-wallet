/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTRACT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
