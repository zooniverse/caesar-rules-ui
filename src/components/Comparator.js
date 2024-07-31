import { Const } from './Const.js'
import { Lookup } from './Lookup.js'

export const Comparator = ({ connective, rule, rules, setRules }) => {
  const [_connective, ...values] = rule

  const addValue = e => {
    if (e.target.value === '') return
    const { value } = e.target

    rule.push([value])
    setRules([...rules])
    e.target.value = ''
  }

  return (
    <div className='border'>
      <p>VALUE is {connective.js}</p>

      {values?.map((value, index) => {
        const Component = value[0] === 'lookup' ? Lookup : Const
        return (
          <Component
            key={index}
            rule={rule}
            rules={rules}
            setRules={setRules}
            value={value}
            valueIndex={index}
          />
        )
      })}

      <select onChange={addValue}>
        <option value=''>Add Value Condition</option>
        <option>lookup</option>
        <option>const</option>
      </select>
    </div>
  )
}
