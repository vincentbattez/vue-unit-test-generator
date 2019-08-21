### Commit convention
We follow [Emoji-Log](https://github.com/ahmadawais/Emoji-Log/#philosophy) convension for commit message 
- E.g. `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `✅ TEST`
### Todo

- Tests
  - [ ] Props
    - Default
    - Required
    - All types
  - [ ] Data
  - [ ] Computed
- [ ] Make API:

```js
// Generate props tests
Vtg.generate('prop', configComponentTest.props)

// Generate props tests with options
Vtg.generate('prop', configComponentTest.props, {
  foo: true
})

// Generate props data
Vtg.generate('data', configComponentTest.data)

// Generate props computed
Vtg.generate('computed', configComponentTest.computed)
```

```
// default values
{
  defaultValue: {
    string: 'mock string'
    boolean: true
    number: 123
    object: {
      mockString:'my string',
      mockBoolean: true
    }
    array: [
      'mock array 1',
      'mock array 2'
    ]
    default: null
  }
  
  // helpers
  // props
  requiredPropCollection: [{}],
  defaultPropCollection: [{}],

  stringPropCollection: [{}],
  booleanPropCollection: [{}],
  numberPropCollection: [{}],
  objectPropCollection: [{}],
  arrayPropCollection: [{}],
}
```
