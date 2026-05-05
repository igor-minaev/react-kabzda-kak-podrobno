// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        // Где искать тестовые файлы
        include: ['src/**/*.{test,spec}.{ts,tsx}'],

        // Окружение (jsdom для React, node для бэкенда)
        environment: 'node',

        // Включить глобальные функции (describe, it, test, expect)
        globals: true,
    },
})