//length
Blockly.Python['dictionaries.length'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var code = 'len(' + dict + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// create_with
Blockly.Python['dictionaries.create_with'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, 'KEYS', Blockly.Python.ORDER_ATOMIC) || '[]';
  var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC) || '[]';
  var code = 'dict(zip(' + keys + ', ' + values + '))';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// isEmpty
Blockly.Python['dictionaries.isEmpty'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var code = 'len(' + dict + ') == 0';
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

// getValue
Blockly.Python['dictionaries.getValue'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '""';
  var code = dict + '[' + key + ']';
  return [code, Blockly.Python.ORDER_MEMBER];
};

// setValue
Blockly.Python['dictionaries.setValue'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '""';
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || 'None';
  var code = dict + '[' + key + '] = ' + value + '\n';
  return code;
};

// getKeys
Blockly.Python['dictionaries.getKeys'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var code = list(dict.keys());
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// getValues
Blockly.Python['dictionaries.getValues'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var code = 'list(' + dict + '.values())';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// hasKey
Blockly.Python['dictionaries.hasKey'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
  var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '""';
  var code = key + ' in ' + dict;
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

