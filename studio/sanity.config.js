import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'Reducare',
  projectId: 'e0ubzmbm',
  dataset: 'production',
  plugins: withDocumentI18nPlugin(
    [
      // ... other plugins
      deskTool(),
      visionTool()
    ],
    {
      // .. your i18n config
      base: 'en',

      languages: [
        {
          title: 'English (US)',
          id: 'en'
        },
        {
          title: 'Danish (DA)',
          id: 'dk'
        }
      ],

      fieldNames: {
        lang: '__i18n_lang',
        references: '__i18n_refs',
        baseReference: '__i18n_base'
      }
    }
  ),
  tools: prev => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter(tool => tool.name !== 'vision')
  },

  schema: {
    types: schemas
  }
})
