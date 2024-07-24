import { Rule } from './Rule.js';

export const Conjunction = ({ index, rules, rule, setRules }) => {
	const [_connective, ..._rules] = rule;
	
	const addRule = () => {
		rule.push([]);
		setRules([...rules]);
	};

	return (<div style={{'padding': '.5em', border: '1px solid #999' }}>

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

		<div style={{ padding: '.5em 0' }}>
			<p style={{padding: '1em'}} onClick={addRule}>Add Rule</p>
		</div>
	</div>);
};
