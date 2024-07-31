import { useState } from 'react'
import { Rule } from './Rule.js'

export const CaesarRuleBuilder = () => {
  const [rules, setRules] = useState([])

  const addRule = () => {
    setRules([...rules, []])
  }

  return (
    <div>
      <h2>Caesar Rule Builder</h2>
      <div className='border'>
        {rules.map((rule, index) => {
          return (
            <Rule
              key={index}
              index={index}
              parentRule={rules}
              parentRuleIndex={index}
              rule={rule}
              rules={rules}
              setRules={setRules}
            />
          )
        })}
        <div className='button' onClick={addRule}>
          Add Rule
        </div>
      </div>
      <div>
        <h3>Output:</h3>
        <pre>{JSON.stringify(rules)}</pre>
      </div>
    </div>
  )
}
