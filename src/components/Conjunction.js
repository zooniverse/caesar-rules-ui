import { Rule } from './Rule.js';

export const Conjunction = ({ index, rules, rule, setRules }) => {
	const [_connective, ..._rules] = rule;
	
	const addRule = () => {
		rule.push([]);
		setRules([...rules]);
	};

	return (<div className="border">
		{_rules?.map((_rule, ruleIndex) => {
			return (<Rule
				key={ruleIndex}
				index={index}
				parentRule={rule}
				parentRuleIndex={ruleIndex+1}
				rules={rules}
				rule={_rule}
				ruleIndex={ruleIndex}
				setRules={setRules}
			/>)
		})}
		<p className="button" onClick={addRule}>Add Rule</p>
	</div>);
};
