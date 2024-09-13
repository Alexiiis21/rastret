import { buildConfig } from "payload/config";
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
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
            connectionString: process.env.POSTGRES_URL,
        }
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    }
})