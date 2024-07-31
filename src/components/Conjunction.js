import { Rule } from './Rule.js'

export const Conjunction = ({ index, rule, rules, setRules }) => {
  const [_connective, ..._rules] = rule

  const addRule = () => {
    rule.push([])
    setRules([...rules])
  }

  return (
    <div className='border'>
      {_rules?.map((_rule, ruleIndex) => {
        return (
          <Rule
            key={ruleIndex}
            index={index}
            parentRule={rule}
            parentRuleIndex={ruleIndex + 1}
            rule={_rule}
            ruleIndex={ruleIndex}
            rules={rules}
            setRules={setRules}
          />
        )
      })}
      <p className='button' onClick={addRule}>
        Add Rule
      </p>
    </div>
  )
}
