export const Connectives = [
	{
		type: 'and',
		isComparator: false,
		isConjunction: true,
		isValue: false,
		js: '&&',
	},
	{
		type: 'or',
		isComparator: false,
		isConjunction: true,
		isValue: false,
		js: '||',
	},
	{
		type: 'lt',
		isComparator: true,
		isConjunction: false,
		isValue: false,
		js: '<',
	},
	{
		type: 'gt',
		isComparator: true,
		isConjunction: false,
		isValue: false,
		js: '>',
	},
	{
		type: 'lt',
		isComparator: true,
		isConjunction: false,
		isValue: false,
		js: '<=',
	},
	{
		type: 'gte',
		isComparator: true,
		isConjunction: false,
		isValue: false,
		js: '>=',
	},
	{
		type: 'eq',
		isComparator: true,
		isConjunction: false,
		isValue: false,
		js: '==',
	},
	{
		type: 'const',
		isComparator: false,
		isConjunction: false,
		isValue: true,
		js: 'const',
	},
	{
		type: 'lookup',
		isComparator: false,
		isConjunction: false,
		isValue: true,
		js: 'lookup',
	}
];

export const ConnectiveValues = Connectives.filter(c => c.isValue === true);
