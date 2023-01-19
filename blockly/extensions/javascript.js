//GuangGuang MiniCar
Blockly.Arduino['ggMiniCarInit'] = function(block) {
  var L1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
  var L2 = Blockly.Arduino.valueToCode(block, 'L2', Blockly.Arduino.ORDER_ATOMIC);
  var LeftReverse = block.getFieldValue('LeftReverse') === 'TRUE';
  var R1 = Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
  var R2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
  var RightReverse = block.getFieldValue('RightReverse') === 'TRUE';
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include "GG_MiniCar.h"\n';
  Blockly.Arduino.definitions_['ggMiniCarInit'] = 'DC_Car ggCar('+ L1 +','+ L2 +','+ LeftReverse +','+ R1 +','+ R2 +','+ RightReverse +',true);\n';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitUS'] = function(block) {
  var USPos = block.getFieldValue('USPos');
  var USTrigPin = Blockly.Arduino.valueToCode(block, 'USTrigPin', Blockly.Arduino.ORDER_ATOMIC);
  var USEchoPin = Blockly.Arduino.valueToCode(block, 'USEchoPin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitUS'] = '#include "GG_US.h"\n';
  Blockly.Arduino.definitions_['ggMiniCarInitUS'+USPos] = 'Ultrasonic US_'+ USPos +'('+ USTrigPin +','+ USEchoPin +');\n';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitIR'] = function(block) {
  var IrPos = block.getFieldValue('IrPos');
  var IrPin = Blockly.Arduino.valueToCode(block, 'IrPin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include "GG_MiniCar.h"\n';
  Blockly.Arduino.definitions_['ggMiniCarInitIr'+IrPos] = 'Trace Trace_'+ IrPos +'('+ IrPin +');\n';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarLineAdjust'] = function(block) {
  var Adjust = Blockly.Arduino.valueToCode(block, 'LineAdjust', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.SetStraightAdj('+ Adjust +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarSetSpeed'] = function(block) {
  var Speed = Blockly.Arduino.valueToCode(block, 'Speed', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.SetSpeed('+ Speed +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarMove'] = function(block) {
  var Move = block.getFieldValue('MoveType');
  var MyTurn = block.getFieldValue('MyTurn');
  if ((Move=="TurnLeft")||(Move=="TurnRight")) {
    if (MyTurn=="Arc") {
      var ArcSpeed = Blockly.Arduino.valueToCode(block, 'ArcSpeed', Blockly.Arduino.ORDER_ATOMIC)
      var code = 'ggCar.pwm'+ Move + MyTurn +'('+ ArcSpeed +');\n';
    } else {
      var code = 'ggCar.pwm'+ Move + MyTurn +'();\n';
    }
  } else {
    var code = 'ggCar.pwm'+ Move +'();\n';
  }
  return code;
};

Blockly.Arduino['ggMiniCarUSSetUnit'] = function(block) {
  var USUnit = block.getFieldValue('USUnit');
  var code = 'Set_US_Measure_Unit('+ USUnit +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarUSGetDistance'] = function(block) {
  var USPos = block.getFieldValue('USPos');
  var code = 'US_'+ USPos +'.Measure()';
  return code;
};

Blockly.Arduino['ggMiniCarIrDetectWhite'] = function(block) {
  var IrPos = block.getFieldValue('IrPos');
  var code = 'Trace_'+ IrPos +'.isDetectWhite()';
  return code;
};
// PS2 Controller
Blockly.Arduino['ggPS2Init'] = function(block) {
  var Data = Blockly.Arduino.valueToCode(block, 'Data', Blockly.Arduino.ORDER_ATOMIC);
  var Command = Blockly.Arduino.valueToCode(block, 'Command', Blockly.Arduino.ORDER_ATOMIC);
  var ChipSelect = Blockly.Arduino.valueToCode(block, 'ChipSelect', Blockly.Arduino.ORDER_ATOMIC);
  var Clock = Blockly.Arduino.valueToCode(block, 'Clock', Blockly.Arduino.ORDER_ATOMIC);
  var Pressures = block.getFieldValue('Pressures') === 'TRUE';
  var Rumble = block.getFieldValue('Rumble') === 'TRUE';
  Blockly.Arduino.definitions_['ggPS2Init'] = '#include <PS2X_lib.h>\nPS2X ggPs2x;\n';
  if (Pressures || Rumble) {
    Blockly.Arduino.setups_['ggPS2Init'] = 'ggPs2x.config_gamepad('+ Clock +','+ Command +','+ ChipSelect +','+ Data +','+ Pressures +','+ Rumble +');\n';
  } else {
    Blockly.Arduino.setups_['ggPS2Init'] = 'ggPs2x.config_gamepad('+ Clock +','+ Command +','+ ChipSelect +','+ Data +');\n';
  }
  var code = '';
  return code;
};

Blockly.Arduino['ggPS2_ReadGamePad'] = function(block) {
  var Rumble = block.getFieldValue('Rumble') === 'TRUE';;
  var Strength = Blockly.Arduino.valueToCode(block, 'Strength', Blockly.Arduino.ORDER_ATOMIC);
  if (!Rumble) {
    Strength = '0x00';
  }
  var code = 'ggPs2x.read_gamepad('+ Rumble +','+ Strength +');\n';
  return code;
};

Blockly.Arduino['ggPS2_Button_NewState'] = function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'ggPs2x.NewButtonState('+ Button +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Button_Event'] = function(block) {
  var Action = block.getFieldValue('Action');
  var Button = block.getFieldValue('Button');
  var code = 'ggPs2x.Button' + Action +'('+ Button +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Analog_State'] = function(block) {
  var Analog = block.getFieldValue('Analog');
  var code = 'ggPs2x.Analog('+ Analog +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Button_IsPressed'] = function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'ggPs2x.Button('+ Button +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Enable_Pressures'] = function(block) {
  return 'ggPs2x.enablePressures();\n';
};

Blockly.Arduino['ggPS2_Enable_Rumble'] = function(block) {
  return 'ggPs2x.enableRumble();\n';
};
// PS3 Controller
Blockly.Arduino['ggPS3Init'] = function(block) {
  var MacType = block.getFieldValue('MacType');
  var mac = Blockly.Arduino.valueToCode(block, 'Mac', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggPS3Init'] = '#include <Ps3Controller.h>\n';
  if (MacType=="OnChip") {
    Blockly.Arduino.setups_['ggPS3Init'] = ''+'Ps3.begin();\n';
  } else if (MacType=="Custom") {
    Blockly.Arduino.setups_['ggPS3Init'] = ''+'Ps3.begin(' + mac + ');\n';
  }
  return '';
};

Blockly.Arduino['ggPS3IsConnect'] = function(block) {
  var code = 'Ps3.isConnected()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Button_Event'] = function(block) {
  var Action = block.getFieldValue('Action');
  var Button = block.getFieldValue('Button');
  var code = 'Ps3.event.button_' + Action + '.' + Button;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Analog_Event'] = function(block) {
  var Button = block.getFieldValue('Analog');
  var code = 'Ps3.event.analog_changed.' + Analog;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Button_State'] = function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'Ps3.data.button.' + Button;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Analog_State'] = function(block) {
  var Analog = block.getFieldValue('Analog');
  var code = 'Ps3.data.analog.' + Analog;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Button_IsPressed'] = function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'Ps3.data.button.' + Button;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Event_Callback'] = function(block) {
  var FuncCode=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      FuncStatement=Blockly.Arduino.statementToCode(this,"STATEMENT");
  FuncCode=FuncCode.replace(/\"/g,"");
  Blockly.Arduino.definitions_["ggPS3_event_callback"]='void '+FuncCode+'(){\n'+FuncStatement+'}\n';
  return '';
};

Blockly.Arduino['ggPS3_OnConnect_Callback'] = function(block) {
  var a=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      b=Blockly.Arduino.statementToCode(this,"STATEMENT");
  a=a.replace(/\"/g,"");
  Blockly.Arduino.definitions_["ggPS3_OnConnect_Callback"]='void '+a+'(){\n'+b+'}\n';
  return '';
};

Blockly.Arduino['ggPS3_DisConnect_Callback'] = function(block) {
  var a=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      b=Blockly.Arduino.statementToCode(this,"STATEMENT");
  a=a.replace(/\"/g,"");
  Blockly.Arduino.definitions_["ggPS3_DisConnect_Callback"]='void '+a+'(){\n'+b+'}\n';
  return '';
};

Blockly.Arduino['ggPS3_GGPS3_MAC'] = function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};

Blockly.Arduino['ggPS3_YPPS3_MAC'] = function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};
// Dabble
Blockly.Arduino['ggDabble_Begin'] = function(block) {
  var BleMode = block.getFieldValue('BleMode');
  if (BleMode=="ESP32") {
    var BleName = Blockly.Arduino.valueToCode(block, 'BleName', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["ggDabble_Begin"]='#define CUSTOM_SETTINGS\n#define INCLUDE_GAMEPAD_MODULE\n#include <DabbleESP32.h>\n';
    Blockly.Arduino.setups_['ggDabble_Begin'] = 'Dabble.begin("'+ BleName +'");\n';
  } else if (BleMode=="Serial") {
    Blockly.Arduino.definitions_["ggDabble_Begin"]='#define CUSTOM_SETTINGS\n#define INCLUDE_GAMEPAD_MODULE\n#include <Dabble.h>\n';
    var SerialMode = block.getFieldValue('SerialMode');
    if (SerialMode=="Serial") {
      Blockly.Arduino.setups_['ggDabble_Begin'] = 'Dabble.begin();\n';
    } else if (SerialMode=="Custom") {
      var Baud = Blockly.Arduino.valueToCode(block, 'Baud', Blockly.Arduino.ORDER_ATOMIC);
      var RX = Blockly.Arduino.valueToCode(block, 'RX', Blockly.Arduino.ORDER_ATOMIC);
      var TX = Blockly.Arduino.valueToCode(block, 'TX', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.setups_['ggDabble_Begin'] = 'Dabble.begin('+ Baud +','+ RX +','+ TX +');\n';
    }
  }
  return '';
};

Blockly.Arduino['ggDabble_GamePad_ProcessData'] = function(block) {
  return 'Dabble.processInput();\n';
};

Blockly.Arduino['ggDabble_GamePad_KeyIsPressed'] = function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'GamePad.is'+ Button +'Pressed()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggDabble_GamePad_KeyState'] = function(block) {
  var ButtonState = block.getFieldValue('ButtonState');
  var code = 'GamePad.isPressed('+ ButtonState +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggDabble_GamePad_getJoystickData'] = function(block) {
  var getJoystickData = block.getFieldValue('getJoystickData');
  var code = 'GamePad.getJoystickData('+ getJoystickData +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggDabble_GamePad_getJoystick'] = function(block) {
  var getJoystick = block.getFieldValue('getJoystick');
  var code = 'GamePad.get'+ getJoystick +'()';
  return [code, Blockly.Arduino.ORDER_NONE];
};