import { Connectives } from './Connectives.js'
import { Condition } from './Condition.js'
import { Conjunction } from './Conjunction.js'
import { Comparator } from './Comparator.js'

export const Rule = ({
  index,
  parentRule,
  parentRuleIndex,
  rules,
  rule,
  setRules
}) => {
  const deleteRule = () => {
    parentRule.splice(parentRuleIndex, 1)
    setRules([...rules])
  }

  const connective = Connectives.find(c => c.type === rule[0]) ?? null
  const ConnectiveComponent =
    connective === null
      ? null
      : connective.type2 === 'conjunction'
        ? Conjunction
        : Comparator

  return (
    <div className='border'>
      <div className='flex'>
        <Condition
          connective={connective}
          rule={rule}
          rules={rules}
          setRules={setRules}
        />
        <div className='button' onClick={deleteRule}>
          Delete Rule
        </div>
      </div>
      {ConnectiveComponent !== null && (
        <ConnectiveComponent
          connective={connective}
          index={index}
          rule={rule}
          rules={rules}
          setRules={setRules}
        />
      )}
    </div>
  )
}
