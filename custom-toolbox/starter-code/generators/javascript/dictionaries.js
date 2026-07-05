// dictionaries.length
Blockly.JavaScript['dictionaries.length'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var code = 'Object.keys(' + dict + ').length';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

// create_with
Blockly.JavaScript['dictionaries.create_with'] = function(block) {
  var keys = Blockly.JavaScript.valueToCode(block, 'KEYS', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var values = Blockly.JavaScript.valueToCode(block, 'VALUES', Blockly.JavaScript.ORDER_ATOMIC) || '[]';
  var code = 'Object.fromEntries(' + keys + '.map((k,i)=>[k,' + values + '[i]]))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// isEmpty
Blockly.JavaScript['dictionaries.isEmpty'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var code = 'Object.keys(' + dict + ').length === 0';
  return [code, Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

// getValue
Blockly.JavaScript['dictionaries.getValue'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  var code = dict + '[' + key + ']';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

// setValue
Blockly.JavaScript['dictionaries.setValue'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  var code = dict + '[' + key + '] = ' + value + ';\n';
  return code;
};

// getKeys
Blockly.JavaScript['dictionaries.getKeys'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var code = 'Object.keys(' + dict + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// getValues
Blockly.JavaScript['dictionaries.getValues'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var code = 'Object.values(' + dict + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// hasKey
Blockly.JavaScript['dictionaries.hasKey'] = function(block) {
  var dict = Blockly.JavaScript.valueToCode(block, 'DICT', Blockly.JavaScript.ORDER_ATOMIC) || '{}';
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  var code = '(' + key + ' in ' + dict + ')';
  return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};



