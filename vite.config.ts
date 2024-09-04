import ViteYaml from '@modyfi/vite-plugin-yaml';
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [tsconfigPaths(),  ViteYaml()],
})
