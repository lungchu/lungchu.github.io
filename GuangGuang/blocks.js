Blockly.Blocks['initminicar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init MiniCar")
        .appendField("Left Whell")
        .appendField("PIN1")
        .appendField(new Blockly.FieldNumber(0), "LF_Pin")
        .appendField("PIN2")
        .appendField(new Blockly.FieldNumber(0), "LB_Pin")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "LeftReverse");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Right Whell")
        .appendField("PIN1")
        .appendField(new Blockly.FieldNumber(0), "RF_Pin")
        .appendField("PIN2")
        .appendField(new Blockly.FieldNumber(0), "RB_Pin")
        .appendField("Reverse")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "RightReverse");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};