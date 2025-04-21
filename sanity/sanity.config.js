import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './deskStructure'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'Billigmaskinleje',

  projectId: 'abzdl0j3',
  dataset: 'production',

  plugins: [structureTool({structure}), table(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
