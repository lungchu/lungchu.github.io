//GuangGuang MiniCar
Blockly.Arduino['InitggMiniCar'] = function(block) {
  var L1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
  var L2 = Blockly.Arduino.valueToCode(block, 'L2', Blockly.Arduino.ORDER_ATOMIC);
  var LeftReverse = block.getFieldValue('LeftReverse');
  var R1 = Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
  var R2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
  var RightReverse = block.getFieldValue('RightReverse');
  Blockly.Arduino.definitions_['InitggMiniCarInclude'] = '#include "GG_MiniCar.h"\n';
  Blockly.Arduino.definitions_['InitggMiniCar'] = 'DC_Car ggCar('+ L1 +','+ L2 +','+ LeftReverse +','+ R1 +','+ R2 +','+ RightReverse +',true);\n';
  var code = '';
  return code;
};

Blockly.Arduino['InitggMiniCarIR'] = function(block) {
  var IrPos = block.getFieldValue('IrPos');
  var IrPin = Blockly.Arduino.valueToCode(block, 'IrPin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['InitggMiniCarInclude'] = '#include "GG_MiniCar.h"\n';
  Blockly.Arduino.definitions_['InitggMiniCarIr'+IrPos] = 'Trace Trace_'+ IrPos +'('+ IrPin +');\n';
  var code = '';
  return code;
};

// PS3 Controller
Blockly.Arduino['InitPS3Controller'] = function(block) {
  var dropdown_mactype = block.getFieldValue('MacType');
  var mac = Blockly.Arduino.valueToCode(block, 'Mac', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['initps3controller'] = '#include <Ps3Controller.h>\n';
  if (dropdown_mactype=="OnChip") {
    Blockly.Arduino.setups_['initps3controller'] = ''+'Ps3.begin();\n';
  } else if (dropdown_mactype=="Custom") {
    Blockly.Arduino.setups_['initps3controller'] = ''+'Ps3.begin(' + mac + ');\n';
  }
  var code = '';
  return code;
};

Blockly.Arduino['PS3IsConnect'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'Ps3.isConnected()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['PS3_Button_Event'] = function(block) {
  var Action = block.getFieldValue('Action');
  var Button = block.getFieldValue('Button');
  // TODO: Assemble Arduino into code variable.
  var code = 'Ps3.event.button_' + Action + '.' + Button;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['PS3_Analog_Event'] = function(block) {
  var Button = block.getFieldValue('Analog');
  // TODO: Assemble Arduino into code variable.
  var code = 'Ps3.event.analog_changed.' + Analog;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['PS3_Button_State'] = function(block) {
  var Button = block.getFieldValue('Button');
  // TODO: Assemble Arduino into code variable.
  var code = 'Ps3.data.button.' + Button;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['PS3_Analog_Button'] = function(block) {
  var Analog = block.getFieldValue('Button');
  // TODO: Assemble Arduino into code variable.
  var code = 'Ps3.data.analog.' + Analog;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['PS3_Button_IsPressed'] = function(block) {
  var Button = block.getFieldValue('Button');
  // TODO: Assemble Arduino into code variable.
  var code = 'Ps3.data.button.' + Button;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['PS3_Event_Callback'] = function(block) {
  var FuncCode=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      FuncStatement=Blockly.Arduino.statementToCode(this,"STATEMENT");
  FuncCode=FuncCode.replace(/\"/g,"");
  Blockly.Arduino.definitions_["ps3_event_callback"]='void '+FuncCode+'(){\n'+FuncStatement+'}\n';
  return'';
};

Blockly.Arduino['PS3_OnConnect_Callback'] = function(block) {
  var a=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      b=Blockly.Arduino.statementToCode(this,"STATEMENT");
  a=a.replace(/\"/g,"");
  Blockly.Arduino.definitions_["PS3_OnConnect_Callback"]='void '+a+'(){\n'+b+'}\n';
  return'';
};

Blockly.Arduino['PS3_DisConnect_Callback'] = function(block) {
  var a=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      b=Blockly.Arduino.statementToCode(this,"STATEMENT");
  a=a.replace(/\"/g,"");
  Blockly.Arduino.definitions_["PS3_DisConnect_Callback"]='void '+a+'(){\n'+b+'}\n';
  return'';
};