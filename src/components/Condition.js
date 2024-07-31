import { Connectives } from './Connectives.js'

const dropdownItems = Connectives.filter(
  item => item.type2 === 'comparator' || item.type2 === 'conjunction'
)

export const Condition = ({ connective, rule, rules, setRules }) => {
  const condition = rule[0]

  const changeCondition = e => {
    const connectiveValue = e.target.value
    const _connective =
      Connectives.find(c => c.type === connectiveValue) ?? null

    if (
      connective?.type2 === 'comparator' &&
      _connective.type2 === 'conjunction'
    ) {
      // converting from comparator to conjunction
      rule.length = 0
      rule.push(connectiveValue)
    } else if (
      connective?.type2 === 'conjunction' &&
      _connective.type2 === 'comparator'
    ) {
      // converting from conjunction to comparator
      rule.length = 0
      rule.push(connectiveValue)
    } else {
      // no conversion needed
      console.log('rule', rule)
      rule[0] = connectiveValue
    }

    setRules([...rules])
  }

  return (
    <select value={condition} onChange={changeCondition}>
      <option value=''>Select Condition</option>
      {dropdownItems.map((rule, index) => {
        return (
          <option key={index} value={rule.type}>
            {rule.js}
          </option>
        )
      })}
    </select>
  )
}
