/* eslint-disable */
export default {
	displayName: "@nonlux/fetcher",
	preset: "../../jest.preset.js",
	testEnvironment: "node",
	transform: {
		"^.+\\.[tj]s$": [
			"@swc/jest",
			{
				//tsconfig: '<rootDir>/tsconfig.spec.json',
				exclude: [],
			},
		],
	},
	moduleFileExtensions: ["ts", "js", "html"],
	coverageDirectory: "../../coverage/@nonlux/fetcher",
};

//"exclude": ["jest.config.ts",".*\\.spec.tsx?$",".*\\.test.tsx?$","./src/jest-setup.ts$","./**/jest-setup.ts$",".*.js$"]
