import { Connectives } from "./Connectives.js";
import { Condition } from "./Condition.js";
import { Conjunction } from "./Conjunction.js";
import { Comparator } from "./Comparator.js";

export const Rule = ({ index, parentRule, parentRuleIndex, rules, rule, setRules }) => {
	const deleteRule = () => {
		parentRule.splice(parentRuleIndex, 1);
		setRules([...rules]);
	};

	const connective = Connectives.find(c => c.type === rule[0]) ?? null;
	const Component = (connective === null) ? null
		: (connective.type2 === 'conjunction') ? Conjunction : Comparator;

	return (<div style={{margin: '1em', padding: '1em', border: '1px solid white' }}>
		<div>
			<Condition
				connective={connective}
				index={index}
				rule={rule}
				rules={rules}
				setRules={setRules}
			/>
			<p style={{ float: 'right' }} onClick={deleteRule}>Delete Rule</p>
		</div>
		{(Component !== null) && <Component
				connective={connective}
				index={index}
				rule={rule}
				rules={rules}
				setRules={setRules}
			/>}
	</div>);
};
