import { buildConfig } from "payload/config";
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import path from "path";
import { CollectionConfig } from 'payload/types';
const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'content',
        type: 'richText',
        required: true,
      },
      {
        name: 'createdAt',
        type: 'date',
        admin: {
          readOnly: true,
        },
      },
    ],
}

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [
        Posts
    ],
    routes: {
        admin: '/rastrear'
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- Rastret',
            favicon: '/favicon.ico',
        }
    },
    rateLimit: {
        max: 2000
    },
    editor: slateEditor({}),
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    }
})