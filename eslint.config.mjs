import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default antfu(
	{
		nextjs: true,
		react: true,
		typescript: true,
		stylistic: false,
		rules: {
			'no-console': 'off',
			'ts/consistent-type-definitions': 'off',
		},
		ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'pnpm-lock.yaml', '*.md'],
	},
	eslintConfigPrettier,
)
