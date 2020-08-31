# Select
Select something!
## Demo
```demo
basic
size
multiple
events
filterable
tag
remote
remote-multiple
clearable
scroll-event
group
many-options
custom-option
action
fallback-option
```
## V-model
|prop|event|
|-|-|
|value|change|

## Props
|Name|Type|Default|Description|
|-|-|-|-|
|clearable|`boolean`|`false`||
|debug|`boolean`|`false`|If set to `true`, the `blur` event won't cause closing of the select menu. It may help you to inspect the DOM of the select menu. It only works when `process.env.NODE_ENV` is `'development'`.|
|disabled|`boolean`|`false`||
|fallback-option|`false \| (value: string \| number) => SelectOption`|`value => ({ label: '' + value, value })`|The option to be created according the value which has no corresponding option in the options of the component. If set to `false`, the fallback option won't be created and displayed and the value has no corresponding option will be viewed as a invalid value and it will be removed in the operations of the component.|
|filter|`(pattern: string, option: Object) => boolean`|A basic string based search method.||
|filterable|`boolean`|`false`|Whether it can filter options.|
|loading|`boolean`|`false`||
|multiple|`boolean`|`false`||
|on-create|`(label: string) => SelectOption`|`label => ({ label, value: label })`|How to create a option when you input a string to create a option. Note that `filter` will be applied to the created option too. And make sure the value of the created option is not the same as any other option.|
|options|`Array<SelectOption \| SelectOptionGroup>`|`[]`||
|placeholder|`string`|`'Please Select'`||
|remote|`boolean`|`false`|If you want to async get options. Note that if remote is set, `filter` & `tag` won't work on `options`. At that time, you are taking all control of `options`.|
|size|`'small' \| 'medium' \| 'large'`|`'medium'`||
|tag|`boolean`|`false`|Whether it can create new option, should be used with `filterable`.|
|theme|`'light' \| 'dark' \| null`|`null`||
|value|`Array<string \| number> \| string \| number`|`false`||
|autofocus|`boolean`|`false`||

### SelectOption Properties
|Name|Type|Description|
|-|-|-|
|class|`string`||
|disabled|`boolean`||
|label|`string`||
|render|`Function`||
|style|`string`||
|value|`string \| number`|Should be unique in options.|

### SelectOptionGroup Properties
|Name|Type|Description|
|-|-|-|
|children|`Array<SelectOption>`||
|name|`string`||
|type|`'group'`||

## Slots
|Name|Parameters|Description|
|-|-|-|
|action|`()`||

## Event
|Name|Parameters|Description|
|-|-|-|
|blur|`()`|When picker of select blur|
|change|`(value: Array \| string \| number \| null)`||
|scroll|`(e: Event)`|When select menu scrolls|
|search|`(value: string)`||

