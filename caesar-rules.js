// Caesar Rule Builder — zero dependencies, full re-render on mutation

const CONNECTIVES = [
  { type: 'and',  type2: 'conjunction',  js: '&&' },
  { type: 'or',   type2: 'conjunction',  js: '||' },
  { type: 'lt',   type2: 'comparator',   js: '<' },
  { type: 'gt',   type2: 'comparator',   js: '>' },
  { type: 'lte',  type2: 'comparator',   js: '<=' },
  { type: 'gte',  type2: 'comparator',   js: '>=' },
  { type: 'eq',   type2: 'comparator',   js: '==' },
]

const DROPDOWN_ITEMS = CONNECTIVES.filter(c => c.type2 === 'comparator' || c.type2 === 'conjunction')

let rules = []

// --- DOM helpers ---

function el(tag, attrs, ...children) {
  const e = document.createElement(tag)
  if (typeof attrs === 'string') { e.textContent = attrs; return e }
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v)
    else e.setAttribute(k, v)
  }
  for (const c of children) {
    if (typeof c === 'string') e.append(document.createTextNode(c))
    else if (c) e.append(c)
  }
  return e
}

function button(text, onclick) {
  return el('div', { class: 'button', onclick }, text)
}

// --- Render functions ---

function render() {
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(
    el('h2', 'Caesar Rule Builder'),
    renderRules(),
    renderOutput()
  )
}

function renderOutput() {
  const div = el('div')
  div.append(el('h3', 'Output:'), el('pre', JSON.stringify(rules)))
  return div
}

function renderOutputOnly() {
  const pre = document.querySelector('#app pre')
  if (pre) pre.textContent = JSON.stringify(rules)
}

function renderRules() {
  const container = el('div', { class: 'border' })
  rules.forEach((rule, i) => container.append(renderRule(rule, rules, i)))
  container.append(button('Add Rule', () => { rules.push([]); render() }))
  return container
}

function renderRule(rule, parent, parentIndex) {
  const connective = CONNECTIVES.find(c => c.type === rule[0]) ?? null

  const container = el('div', { class: 'border' })

  // Condition dropdown + delete button row
  const row = el('div', { class: 'flex' })
  row.append(renderCondition(connective, rule))
  row.append(button('Delete Rule', () => { parent.splice(parentIndex, 1); render() }))
  container.append(row)

  // Sub-component based on connective type
  if (connective?.type2 === 'conjunction') {
    container.append(renderConjunction(rule))
  } else if (connective?.type2 === 'comparator') {
    container.append(renderComparator(connective, rule))
  }

  return container
}

function renderCondition(connective, rule) {
  const select = el('select', {
    onchange: (e) => {
      const val = e.target.value
      const newConn = CONNECTIVES.find(c => c.type === val) ?? null
      if (connective?.type2 !== newConn?.type2) {
        rule.length = 0
        rule.push(val)
      } else {
        rule[0] = val
      }
      render()
    }
  })

  select.append(el('option', { value: '' }, 'Select Condition'))
  for (const item of DROPDOWN_ITEMS) {
    const opt = el('option', { value: item.type }, item.js)
    if (item.type === rule[0]) opt.selected = true
    select.append(opt)
  }
  return select
}

function renderComparator(connective, rule) {
  const values = rule.slice(1)
  const container = el('div', { class: 'border' })
  container.append(el('p', `VALUE is ${connective.js}`))

  values.forEach((value, i) => {
    if (value[0] === 'lookup') {
      container.append(renderLookup(value, rule, i))
    } else {
      container.append(renderConst(value, rule, i))
    }
  })

  const select = el('select', {
    onchange: (e) => {
      if (!e.target.value) return
      rule.push([e.target.value])
      render()
    }
  })
  select.append(
    el('option', { value: '' }, 'Add Value Condition'),
    el('option', { value: 'lookup' }, 'lookup'),
    el('option', { value: 'const' }, 'const')
  )
  container.append(select)
  return container
}

function renderConst(value, rule, valueIndex) {
  const div = el('div', { class: 'const' })
  div.append(
    document.createTextNode('Const:'),
    el('input', {
      type: 'text', placeholder: 'value', value: value[1] || '',
      oninput: (e) => { value[1] = e.target.value; renderOutputOnly() }
    }),
    button('Delete Const', () => { rule.splice(valueIndex + 1, 1); render() })
  )
  return div
}

function renderLookup(value, rule, valueIndex) {
  const div = el('div', { class: 'lookup' })
  div.append(
    document.createTextNode('Lookup:'),
    el('input', {
      type: 'text', placeholder: 'lookup.variable.thing', value: value[1] || '',
      oninput: (e) => { value[1] = e.target.value; renderOutputOnly() }
    }),
    el('input', {
      type: 'text', placeholder: 'default value', value: value[2] || '',
      oninput: (e) => { value[2] = e.target.value; renderOutputOnly() }
    }),
    button('Delete Lookup', () => { rule.splice(valueIndex + 1, 1); render() })
  )
  return div
}

function renderConjunction(rule) {
  const childRules = rule.slice(1)
  const container = el('div', { class: 'border' })
  childRules.forEach((childRule, i) => {
    container.append(renderRule(childRule, rule, i + 1))
  })
  container.append(button('Add Rule', () => { rule.push([]); render() }))
  return container
}

// --- Boot ---
render()
