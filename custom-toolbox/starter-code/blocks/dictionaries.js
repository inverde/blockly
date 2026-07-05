// dictionaries.create_with
Blockly.Blocks['dictionaries.create_with'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create dictionary with");
    this.appendValueInput("KEYS")
        .setCheck("Array")
        .appendField("keys");
    this.appendValueInput("VALUES")
        .setCheck("Array")
        .appendField("values");
    this.setOutput(true, "Dictionary");
    this.setColour(230);
    this.setTooltip("Create a dictionary from keys and values arrays.");
    this.setHelpUrl("");
  }
};

// dictionaries.length
Blockly.Blocks['dictionaries.length'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("length of dictionary");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Returns the number of keys in the dictionary.");
    this.setHelpUrl("");
  }
};

// dictionaries.isEmpty
Blockly.Blocks['dictionaries.isEmpty'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("is dictionary empty?");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Checks if a dictionary has no keys.");
    this.setHelpUrl("");
  }
};

// dictionaries.getValue
Blockly.Blocks['dictionaries.getValue'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("get value from dictionary");
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField("key");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Gets the value for a given key.");
    this.setHelpUrl("");
  }
};

// dictionaries.setValue
Blockly.Blocks['dictionaries.setValue'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("set value in dictionary");
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField("key");
    this.appendValueInput("VALUE")
        .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the value for a given key.");
    this.setHelpUrl("");
  }
};

// dictionaries.getKeys
Blockly.Blocks['dictionaries.getKeys'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("get keys of dictionary");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Returns all keys of the dictionary.");
    this.setHelpUrl("");
  }
};

// dictionaries.getValues
Blockly.Blocks['dictionaries.getValues'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("get values of dictionary");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Returns all values of the dictionary.");
    this.setHelpUrl("");
  }
};

// dictionaries.hasKey
Blockly.Blocks['dictionaries.hasKey'] = {
  init: function() {
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField("dictionary has key");
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField("key");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Checks if the dictionary contains the given key.");
    this.setHelpUrl("");
  }
};
