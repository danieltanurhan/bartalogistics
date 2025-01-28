import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '../src/cms/node_modules/@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BartaLogistics',
  projectId: 'ctf80kdy',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})