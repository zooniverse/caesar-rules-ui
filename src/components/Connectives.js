export const Connectives = [
	{
		type: 'and',
		type2: 'conjunction',
		js: '&&',
	},
	{
		type: 'or',
		type2: 'conjunction',
		js: '||',
	},
	{
		type: 'lt',
		type2: 'comparator',
		js: '<',
	},
	{
		type: 'gt',
		type2: 'comparator',
		js: '>',
	},
	{
		type: 'lt',
		type2: 'comparator',
		js: '<=',
	},
	{
		type: 'gte',
		type2: 'comparator',
		js: '>=',
	},
	{
		type: 'eq',
		type2: 'comparator',
		js: '==',
	},
	{
		type: 'const',
		type2: 'value',
		js: 'const',
	},
	{
		type: 'lookup',
		type2: 'value',
		js: 'lookup',
	}
];

export const ConnectiveValues = Connectives.filter(c => c.type2 === 'value');
