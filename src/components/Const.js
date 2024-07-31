export const Const = ({ rule, rules, setRules, value, valueIndex }) => {
  const changeValue = e => {
    value[1] = e.target.value
    setRules([...rules])
  }

  const deleteValue = e => {
    // +1 is to offset the actual first value being the comparator
    rule.splice(valueIndex + 1, 1)
    setRules([...rules])
  }

  return (
    <div className='const'>
      Const:
      <input
        onChange={changeValue}
        placeholder='value'
        type='text'
        value={value[1] || ''}
      />
      <div className='button' onClick={deleteValue}>
        Delete Const
      </div>
    </div>
  )
}
