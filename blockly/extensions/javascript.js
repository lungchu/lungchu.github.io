//GuangGuang ESP32
Blockly.Arduino['ggESP32vTaskDelay']=function(block) {
  var Ticks = Blockly.Arduino.valueToCode(block, 'Ticks', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'vTaskDelay('+Ticks+');\n';
  return code;
};
Blockly.Arduino['ggESP32vTaskDelayMs']=function(block) {
  var MicroSecond = Blockly.Arduino.valueToCode(block, 'MicroSecond', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'vTaskDelay(pdMS_TO_TICKS('+MicroSecond+'));\n';
  return code;
};
//GuangGuang MiniCar
Blockly.Arduino['ggMiniCarInit']=function(block) {
  var L1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
  var L2 = Blockly.Arduino.valueToCode(block, 'L2', Blockly.Arduino.ORDER_ATOMIC);
  var LeftReverse = block.getFieldValue('LeftReverse') === 'TRUE';
  var R1 = Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
  var R2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
  var RightReverse = block.getFieldValue('RightReverse') === 'TRUE';
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include <GG_MiniCar.h>';
  Blockly.Arduino.definitions_['ggMiniCarInit'] = 'DC_Car ggCar(-1,-1,false,-1,-1,false,'+ L1 +','+ L2 +','+ LeftReverse +','+ R1 +','+ R2 +','+ RightReverse +',true);';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInit4WD']=function(block) {
  var LF1 = block.getFieldValue('LF1');
  var LF2 = block.getFieldValue('LF2');
  var LeftFrontReverse = block.getFieldValue('LeftFrontReverse') === 'TRUE';
  var RF1 = block.getFieldValue('RF1');
  var RF2 = block.getFieldValue('RF2');
  var RightFrontReverse = block.getFieldValue('RightFrontReverse') === 'TRUE';
  var LR1 = block.getFieldValue('LR1');
  var LR2 = block.getFieldValue('LR2');
  var LeftRearReverse = block.getFieldValue('LeftRearReverse') === 'TRUE';
  var RR1 = block.getFieldValue('RR1');
  var RR2 = block.getFieldValue('RR2');
  var RightRearReverse = block.getFieldValue('RightRearReverse') === 'TRUE';
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include <GG_MiniCar.h>';
  Blockly.Arduino.definitions_['ggMiniCarInit'] = 'DC_Car ggCar('+ LF1 +','+ LF2 +','+ LeftFrontReverse +','+ RF1 +','+ RF2 +','+ RightFrontReverse +','+ LR1 +','+ LR2 +','+ LeftRearReverse +','+ RR1 +','+ RR2 +','+ RightRearReverse +',true);';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitUS']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var USTrigPin = Blockly.Arduino.valueToCode(block, 'USTrigPin', Blockly.Arduino.ORDER_ATOMIC);
  var USEchoPin = Blockly.Arduino.valueToCode(block, 'USEchoPin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitUSInclude'] = '#include <GG_US.h>';
  Blockly.Arduino.definitions_['ggMiniCarInitUS'+SensorPos] = 'Ultrasonic ggUS_'+ SensorPos +'('+ USTrigPin +','+ USEchoPin +');';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitIR']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var Pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include <GG_MiniCar.h>';
  Blockly.Arduino.definitions_['ggMiniCarInitTrace'+SensorPos] = 'Trace ggTrace_'+ SensorPos +'('+ Pin +');';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitVL53L0X']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var I2CAddr = block.getFieldValue('I2CAddr');
  var Pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  if (I2CAddr==-1) Pin=-1;
  Blockly.Arduino.definitions_['ggMiniCarInitVL53L0XInclude'] = '#include <VL53L0X.h>\n#include <GG_VL53L0X.h>';
  Blockly.Arduino.definitions_['ggMiniCarInitVL53L0X'+SensorPos] = 'VL53L0X ggVL53L0X_'+ SensorPos +';';
  Blockly.Arduino.setups_['ggMiniCarInitVL53L0X'+SensorPos]='VL53L0X_SetSHUT('+ Pin +', LOW);';
  var code = 'VL53L0X_Init(&ggVL53L0X_'+ SensorPos +','+ I2CAddr +','+ Pin +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarInitSharpIR']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var SharpModel = block.getFieldValue('SharpModel');
  var Pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitSharpIRInclude'] = '#include <SharpIR.h>';
  Blockly.Arduino.definitions_['ggMiniCarInitSharpIR'+SensorPos] = 'SharpIR ggSharpIR_'+ SensorPos +'('+ SharpModel +','+ Pin +');';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitAvoidIR']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var Pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include <GG_MiniCar.h>';
  Blockly.Arduino.definitions_['ggMiniCarInitAvoid'+SensorPos] = 'Avoid ggAvoid_'+ SensorPos +'('+ Pin +');';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarLineAdjust']=function(block) {
  var Adjust = Blockly.Arduino.valueToCode(block, 'LineAdjust', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.SetStraightAdj('+ Adjust +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarSetSpeed']=function(block) {
  var Speed = Blockly.Arduino.valueToCode(block, 'Speed', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.SetSpeed('+ Speed +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarMove']=function(block) {
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

Blockly.Arduino['ggMiniCarMecanumMove']=function(block) {
  var Move = block.getFieldValue('MoveType');
  var code = 'ggCar.'+ Move +'();\n';
  return code;
};

Blockly.Arduino['ggMiniCarUSSetUnit']=function(block) {
  var USUnit = block.getFieldValue('USUnit');
  var code = 'Set_US_Measure_Unit('+ USUnit +');\n';
  return code;
};

Blockly.Arduino['ggMiniCar_US_GetDistance']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'ggUS_'+ SensorPos +'.Measure()';
  return code;
};

Blockly.Arduino['ggMiniCar_TraceIR_DetectWhite']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'ggTrace_'+ SensorPos +'.isDetectWhite()';
  return code;
};

Blockly.Arduino['ggMiniCar_VL53L0X_GetDistance']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'ggVL53L0X_'+ SensorPos +'.readRangeSingleMillimeters()';
  return code;
};

Blockly.Arduino['ggMiniCar_SharpIR_GetDistance']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'ggSharpIR_'+ SensorPos +'.Measure()';
  return code;
};

Blockly.Arduino['ggMiniCar_AvoidIR_DetectBlack']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'ggAvoid_'+ SensorPos +'.isDetectAvoid()';
  return code;
};

Blockly.Arduino['ggMiniCarStickOrigin']=function(block) {
  var X=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC),
      Y=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC),
      Radius=Blockly.Arduino.valueToCode(this,"Radius",Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.SetJoystickMiddle('+ X +','+ Y +','+ Radius +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarStickDrive']=function(block) {
  var SitckX=Blockly.Arduino.valueToCode(this,"SitckX",Blockly.Arduino.ORDER_ATOMIC),
      SitckY=Blockly.Arduino.valueToCode(this,"SitckY",Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.JoystickDrive('+ SitckX +','+ SitckY +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarStickMecanumDrive']=function(block) {
  var SitckX=Blockly.Arduino.valueToCode(this,"SitckX",Blockly.Arduino.ORDER_ATOMIC),
      SitckY=Blockly.Arduino.valueToCode(this,"SitckY",Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ggCar.JoystickMecanumDrive('+ SitckX +','+ SitckY +');\n';
  return code;
};
//ggMiniCar Servo
Blockly.Arduino['ggMiniCar_servo_custom_attach']=function() {
  var a=Blockly.Arduino.valueToCode(this,"PIN",Blockly.Arduino.ORDER_ATOMIC),
      b=Blockly.Arduino.valueToCode(this,"MAX",Blockly.Arduino.ORDER_ATOMIC),
      c=Blockly.Arduino.valueToCode(this,"MIN",Blockly.Arduino.ORDER_ATOMIC),
      d="";
  Blockly.Arduino.definitions_.define_servo="#if defined(ESP32)\n  #include <ESP32Servo.h>\n#else\n  #include <Servo.h>\n#endif";
  Blockly.Arduino.definitions_["define_class_ggMiniCarServo_"+a]="Servo _ggMiniCarServo"+a+";";
  void 0===Blockly.Arduino.setups_["ggMiniCarServo_"+a]?Blockly.Arduino.setups_["ggMiniCarServo_"+a]="_ggMiniCarServo"+a+".attach("+a+","+c+","+b+");":d="_ggMiniCarServo"+a+".attach("+a+","+c+","+b+");\n";
  return d;
};

Blockly.Arduino['ggMiniCar_servo_write']=function() {
  var a=Blockly.Arduino.valueToCode(this,"PIN",Blockly.Arduino.ORDER_ATOMIC),
      b=Blockly.Arduino.valueToCode(this,"ANGLE",Blockly.Arduino.ORDER_ATOMIC)||"90";
  Blockly.Arduino.definitions_.define_servo="#if defined(ESP32)\n  #include <ESP32Servo.h>\n#else\n  #include <Servo.h>\n#endif";
  Blockly.Arduino.definitions_["define_class_ggMiniCarServo_"+a]="Servo _ggMiniCarServo"+a+";";
  Blockly.Arduino.setups_["ggMiniCarServo_"+a]||(Blockly.Arduino.setups_["ggMiniCarServo_"+a]="_ggMiniCarServo"+a+".attach("+a+");");
  return "_ggMiniCarServo"+a+".write("+b+");\n";
};

Blockly.Arduino['ggMiniCar_servo_writeus']=function() {
  var a=Blockly.Arduino.valueToCode(this,"PIN",Blockly.Arduino.ORDER_ATOMIC),
      b=Blockly.Arduino.valueToCode(this,"ANGLE_US",Blockly.Arduino.ORDER_ATOMIC)||"1500";
  Blockly.Arduino.definitions_.define_servo="#if defined(ESP32)\n  #include <ESP32Servo.h>\n#else\n  #include <Servo.h>\n#endif";
  Blockly.Arduino.definitions_["define_class_ggMiniCarServo_"+a]="Servo _ggMiniCarServo"+a+";";
  void 0===Blockly.Arduino.setups_["ggMiniCarServo_"+a]&&(Blockly.Arduino.setups_["ggMiniCarServo_"+a]="_ggMiniCarServo"+a+".attach("+a+");");
  return "_ggMiniCarServo"+a+".writeMicroseconds("+b+");\n";
};

Blockly.Arduino['ggMiniCar_servo_read']=function() {
  var a=Blockly.Arduino.valueToCode(this,"PIN",Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_.define_servo="#if defined(ESP32)\n  #include <ESP32Servo.h>\n#else\n  #include <Servo.h>\n#endif";
  Blockly.Arduino.definitions_["define_class_ggMiniCarServo_"+a]="Servo _ggMiniCarServo"+a+";";
  return ["_ggMiniCarServo"+a+".read()",Blockly.Arduino.ORDER_ATOMIC];
};

// PS2 Controller
Blockly.Arduino['ggPS2Init']=function(block) {
  var Data = Blockly.Arduino.valueToCode(block, 'Data', Blockly.Arduino.ORDER_ATOMIC);
  var Command = Blockly.Arduino.valueToCode(block, 'Command', Blockly.Arduino.ORDER_ATOMIC);
  var ChipSelect = Blockly.Arduino.valueToCode(block, 'ChipSelect', Blockly.Arduino.ORDER_ATOMIC);
  var Clock = Blockly.Arduino.valueToCode(block, 'Clock', Blockly.Arduino.ORDER_ATOMIC);
  var Pressures = block.getFieldValue('Pressures') === 'TRUE';
  var Rumble = block.getFieldValue('Rumble') === 'TRUE';
  Blockly.Arduino.definitions_['ggPS2Init'] = '#include <PS2X_lib.h>\nPS2X ggPs2x;';
  if (Pressures || Rumble) {
    Blockly.Arduino.setups_['ggPS2Init'] = 'ggPs2x.config_gamepad('+ Clock +','+ Command +','+ ChipSelect +','+ Data +','+ Pressures +','+ Rumble +');\n';
  } else {
    Blockly.Arduino.setups_['ggPS2Init'] = 'ggPs2x.config_gamepad('+ Clock +','+ Command +','+ ChipSelect +','+ Data +');\n';
  }
  var code = '';
  return code;
};

Blockly.Arduino['ggPS2_ReadGamePad']=function(block) {
  var Rumble = block.getFieldValue('Rumble') === 'TRUE';;
  var Strength = Blockly.Arduino.valueToCode(block, 'Strength', Blockly.Arduino.ORDER_ATOMIC);
  if (!Rumble) {
    Strength = '0x00';
  }
  var code = 'ggPs2x.read_gamepad('+ Rumble +','+ Strength +');\n';
  return code;
};

Blockly.Arduino['ggPS2_Button_NewState']=function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'ggPs2x.NewButtonState('+ Button +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Button_Event']=function(block) {
  var Action = block.getFieldValue('Action');
  var Button = block.getFieldValue('Button');
  var code = 'ggPs2x.Button' + Action +'('+ Button +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Analog_State']=function(block) {
  var Analog = block.getFieldValue('Analog');
  var code = 'ggPs2x.Analog('+ Analog +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Button_IsPressed']=function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'ggPs2x.Button('+ Button +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS2_Enable_Pressures']=function(block) {
  return 'ggPs2x.enablePressures();\n';
};

Blockly.Arduino['ggPS2_Enable_Rumble']=function(block) {
  return 'ggPs2x.enableRumble();\n';
};
// PS3 Controller
Blockly.Arduino['ggPS3Init']=function(block) {
  var MacType = block.getFieldValue('MacType');
  var mac = Blockly.Arduino.valueToCode(block, 'Mac', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggPS3Init'] = '#include <Ps3Controller.h>';
  if (MacType=="OnChip") {
    Blockly.Arduino.setups_['ggPS3Init'] = ''+'Ps3.begin();\n';
  } else if (MacType=="Custom") {
    Blockly.Arduino.setups_['ggPS3Init'] = ''+'Ps3.begin(' + mac + ');\n';
  }
  return '';
};

Blockly.Arduino['ggPS3IsConnect']=function(block) {
  var code = 'Ps3.isConnected()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Button_Event']=function(block) {
  var Action = block.getFieldValue('Action');
  var Button = block.getFieldValue('Button');
  var code = 'Ps3.event.button_' + Action + '.' + Button;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Analog_Event']=function(block) {
  var Analog = block.getFieldValue('Analog');
  var code = 'Ps3.event.analog_changed.' + Analog;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Button_State']=function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'Ps3.data.button.' + Button;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Analog_State']=function(block) {
  var Analog = block.getFieldValue('Analog');
  var code = 'Ps3.data.analog.' + Analog;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Button_IsPressed']=function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'Ps3.data.button.' + Button;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggPS3_Event_Callback']=function(block) {
  var FuncName=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      FuncStatement=Blockly.Arduino.statementToCode(this,"STATEMENT");
  FuncName=FuncName.replace(/\"/g,"");
  Blockly.Arduino.definitions_["ggPS3_event_callback"]='void '+FuncName+'(){\n'+FuncStatement+'}\n';
  Blockly.Arduino.setups_['ggPS3_event_callback'] = ''+'Ps3.attach(' + FuncName + ');';
  return '';
};

Blockly.Arduino['ggPS3_OnConnect_Callback']=function(block) {
  var FuncName=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      FuncStatement=Blockly.Arduino.statementToCode(this,"STATEMENT");
  FuncName=FuncName.replace(/\"/g,"");
  Blockly.Arduino.definitions_['ggPS3_OnConnect']='void '+FuncName+'(){\n'+FuncStatement+'}\n';
  Blockly.Arduino.setups_['ggPS3_OnConnect'] = ''+'Ps3.attachOnConnect(' + FuncName + ');';
  return '';
};

Blockly.Arduino['ggPS3_DisConnect_Callback']=function(block) {
  var FuncName=Blockly.Arduino.valueToCode(this,"Func_Name",Blockly.Arduino.ORDER_ATOMIC)||"",
      FuncStatement=Blockly.Arduino.statementToCode(this,"STATEMENT");
  FuncName=FuncName.replace(/\"/g,"");
  Blockly.Arduino.definitions_['ggPS3_OnDisConnect']='void '+FuncName+'(){\n'+FuncStatement+'}\n';
  Blockly.Arduino.setups_['ggPS3_OnDisConnect'] = ''+'Ps3.attachOnDisconnect(' + FuncName + ');';
  return '';
};

Blockly.Arduino['ggPS3_GGPS3_MAC']=function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};

Blockly.Arduino['ggPS3_GHPS3_MAC']=function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};

Blockly.Arduino['ggPS3_TSPS3_MAC']=function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};

Blockly.Arduino['ggPS3_YPPS3_MAC']=function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};

Blockly.Arduino['ggPS3_FFPS3_MAC']=function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};
// PS4 Controller採用Bluepad32
Blockly.Arduino['ggBP32Init']=function(block) {
//  Blockly.Arduino.definitions_['ggBP32Init'] = '#include <Bluepad32.h>\n\nGamepadPtr ggGamepadBP32;\n\nvoid onConnectedBluepad32(GamepadPtr gp) {\n  if (ggGamepadBP32 == nullptr) {\n    Serial.println("CALLBACK: Gamepad is connected");\n    GamepadProperties properties = gp->getProperties();\n    Serial.printf("Gamepad model: %s, VID=0x%04x, PID=0x%04x\\n", gp->getModelName().c_str(), properties.vendor_id,properties.product_id);\n    ggGamepadBP32 = gp;\n  } else {\n    Serial.println("CALLBACK: Another Gamepad connected, but another one is used");\n  }\n}\n\nvoid onDisconnectedBluepad32(GamepadPtr gp) {\n  if (ggGamepadBP32 == gp) {\n    Serial.println("CALLBACK: Gamepad is disconnected.");\n    ggGamepadBP32 = nullptr;\n  } else {\n    Serial.println("CALLBACK: Gamepad disconnected, but not useed");\n  }\n}\n';
  Blockly.Arduino.definitions_['ggBP32Init'] = '#include <Bluepad32.h>\n#include <GG_Bluepad32.h>\n';
  Blockly.Arduino.setups_['ggBP32Init'] = 'BP32.setup(&onConnectedBluepad32, &onDisconnectedBluepad32);\n  BP32.forgetBluetoothKeys();';
  return '';
};

Blockly.Arduino['ggBP32Update']=function(block) {
  var code = 'BP32.update();\n';
  return code;
};

Blockly.Arduino['ggBP32IsConnect']=function(block) {
  var code = 'ggGamepadBP32 && ggGamepadBP32->isConnected()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggBP32_PS4Button_Pressed']=function(block) {
  var Button = block.getFieldValue('Button');
  var code;
  if ((Button>=0) && (Button<=3)) {
    code = 'ggBP32dpadButton('+Button+')';
  } else {
    code = 'ggGamepadBP32->' + Button;
  }
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggBP32_PS4Button_Value']=function(block) {
  var Button = block.getFieldValue('Button');
  var code;
  if ((Button>=0) && (Button<=3)) {
    code = 'ggBP32dpadButton('+Button+')';
  } else {
    code = 'ggGamepadBP32->' + Button;
  }
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggBP32_PS4_6Axis_Value']=function(block) {
  var Value = block.getFieldValue('Value');
  var code;
  code = 'ggGamepadBP32->' + Value;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggBP32_Battery']=function(block) {
  var code = 'ggGamepadBP32->battery()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggBP32SetPlayerLEDs']=function(block) {
  var LED=Blockly.Arduino.valueToCode(block,'LED', Blockly.Arduino.ORDER_ATOMIC);
  var code='ggGamepadBP32->setPlayerLEDs('+LED+');\n';
  return code;
};

Blockly.Arduino['ggBP32SetColorLED']=function(block) {
	var RED=Blockly.Arduino.valueToCode(block,"RED",Blockly.Arduino.ORDER_ATOMIC),
      GREEN=Blockly.Arduino.valueToCode(block,"GREEN",Blockly.Arduino.ORDER_ATOMIC),
      BLUE=Blockly.Arduino.valueToCode(block,"BLUE",Blockly.Arduino.ORDER_ATOMIC);
  var code='ggGamepadBP32->setColorLED('+RED+','+GREEN+','+BLUE+');\n';
  return code;
};

Blockly.Arduino['ggBP32SetRumble']=function(block) {
	var FORCE=Blockly.Arduino.valueToCode(block,"FORCE",Blockly.Arduino.ORDER_ATOMIC),
      DURATION=Blockly.Arduino.valueToCode(block,"DURATION",Blockly.Arduino.ORDER_ATOMIC);
  var code='ggGamepadBP32->setRumble('+FORCE+','+DURATION+');\n';
  return code;
};

// Dabble
Blockly.Arduino['ggDabble_Begin']=function(block) {
  var BleMode = block.getFieldValue('BleMode');
  if (BleMode=="ESP32") {
    var BleName = Blockly.Arduino.valueToCode(block, 'BleName', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["ggDabble_Begin"]='#define CUSTOM_SETTINGS\n#define INCLUDE_GAMEPAD_MODULE\n#include <DabbleESP32.h>';
    Blockly.Arduino.setups_['ggDabble_Begin'] = 'Dabble.begin("'+ BleName.replace(/"/g,"") +'");\n';
  } else if (BleMode=="Serial") {
    Blockly.Arduino.definitions_["ggDabble_Begin"]='#define CUSTOM_SETTINGS\n#define INCLUDE_GAMEPAD_MODULE\n#include <Dabble.h>';
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

Blockly.Arduino['ggDabble_GamePad_ProcessData']=function(block) {
  return 'Dabble.processInput();\n';
};

Blockly.Arduino['ggDabble_GamePad_KeyIsPressed']=function(block) {
  var Button = block.getFieldValue('Button');
  var code = 'GamePad.is'+ Button +'Pressed()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggDabble_GamePad_KeyState']=function(block) {
  var ButtonState = block.getFieldValue('ButtonState');
  var code = 'GamePad.isPressed('+ ButtonState +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggDabble_GamePad_getJoystickData']=function(block) {
  var getJoystickData = block.getFieldValue('getJoystickData');
  var code = 'GamePad.getJoystickData('+ getJoystickData +')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ggDabble_GamePad_getJoystick']=function(block) {
  var getJoystick = block.getFieldValue('getJoystick');
  var code = 'GamePad.get'+ getJoystick +'()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

//光光 Linkit Remote
Blockly.Arduino['ggLinkit_Remote']=function(){
	var a=this.getFieldValue("ORIENTATION"),
			b=Blockly.Arduino.valueToCode(this,"DEVICEID",Blockly.Arduino.ORDER_ATOMIC)||"",
			c=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
			d=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"";
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
	  b=b.replace(/"/g,"");
	}
	c=c.replace(/"/g,"");
	d=d.replace(/"/g,"");
	Blockly.Arduino.definitions_['ggLinkit_Remote_include']="#include <LRemote.h>";
	var e=Blockly.Arduino.statementToCode(this,"CONTENT");
	e=e.replace(/(^\s+)|(\s+$)/g,"");
	a='LRemote.setName('+b+'); \nLRemote.setOrientation('+a+"); \nLRemote.setGrid("+d+", "+c+"); \n";a=a+"  "+e+"\n";
	return a+="LRemote.begin(); \n"
};

Blockly.Arduino['ggLinkit_Remote_settext']=function(){
  var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
      b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
      c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
      d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
      e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
      f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
      g=this.getFieldValue("COLOUR");
  a=a.replace(/"/g,"");
  d=d.replace(/"/g,"");
  c=c.replace(/"/g,"");
  e=e.replace(/"/g,"");
  f=f.replace(/"/g,"");
  Blockly.Arduino.definitions_["ggLinkit_Remote_setText_"+a]="LRemoteLabel "+a+"; ";
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
		b=b.replace(/"/g,"");
	}
  b="\n"+a+".setPos("+c+", "+d+"); \n"+a+'.setText('+b+'); \n'+a+".setSize("+e+", "+f+"); \n";
	b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
  return b=b+"LRemote.addControl("+a+"); \n\n"
};

Blockly.Arduino['ggLinkit_Remote_setbuttonsquare']=function(){
	var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
			b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
			c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
			d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
			e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
			f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
			g=this.getFieldValue("COLOUR");
	a=a.replace(/"/g,"");
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
		b=b.replace(/"/g,"");
	}
	d=d.replace(/"/g,"");
	c=c.replace(/"/g,"");
	e=e.replace(/"/g,"");
	f=f.replace(/"/g,"");
	Blockly.Arduino.definitions_["ggLinkit_Remote_setButtonSquare_"+a]="LRemoteButton "+a+"; ";
	b="\n"+a+".setPos("+c+", "+d+"); \n"+a+'.setText('+b+'); \n'+a+".setSize("+e+", "+f+"); \n";
	b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
  return b=b+"LRemote.addControl("+a+"); \n\n"
};

Blockly.Arduino['ggLinkit_Remote_setbuttoncircle']=function(){
	var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
			b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
			c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
			d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
			e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
			f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
			g=this.getFieldValue("COLOUR");
	a=a.replace(/"/g,"");
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
		b=b.replace(/"/g,"");
	}
	d=d.replace(/"/g,"");
	c=c.replace(/"/g,"");
	e=e.replace(/"/g,"");
	f=f.replace(/"/g,"");
	Blockly.Arduino.definitions_["ggLinkit_Remote_setButtonCircle_"+a]="LRemoteCircleButton "+a+"; ";
	b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText('+b+'); \n';b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
	return b=b+"LRemote.addControl("+a+"); \n\n"
};

Blockly.Arduino['ggLinkit_Remote_setswitch']=function(){
	var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
			b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
			c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
			d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
			e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
			f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
			g=this.getFieldValue("COLOUR");
	a=a.replace(/"/g,"");
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
		b=b.replace(/"/g,"");
	}
	d=d.replace(/"/g,"");
	c=c.replace(/"/g,"");
	e=e.replace(/"/g,"");
	f=f.replace(/"/g,"");
	Blockly.Arduino.definitions_["ggLinkit_Remote_setSwitch_"+a]="LRemoteSwitch "+a+"; ";
	b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText('+b+'); \n';
	b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
	return b=b+"LRemote.addControl("+a+"); \n\n"
};

Blockly.Arduino['ggLinkit_Remote_setslider']=function(){
	var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
			b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
			c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
			d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
			e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
			f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
			g=Blockly.Arduino.valueToCode(this,"MINIMUM",Blockly.Arduino.ORDER_ATOMIC)||"",
			h=Blockly.Arduino.valueToCode(this,"MAXIMUM",Blockly.Arduino.ORDER_ATOMIC)||"",
			l=Blockly.Arduino.valueToCode(this,"INITIAL",Blockly.Arduino.ORDER_ATOMIC)||"",
			k=this.getFieldValue("COLOUR");
	a=a.replace(/"/g,"");
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
		b=b.replace(/"/g,"");
	}
	d=d.replace(/"/g,"");
	c=c.replace(/"/g,"");
	e=e.replace(/"/g,"");
	f=f.replace(/"/g,"");
	g=g.replace(/"/g,"");
	h=h.replace(/"/g,"");
	l=l.replace(/"/g,"");
	Blockly.Arduino.definitions_["ggLinkit_Remote_setSlider_"+a]="LRemoteSlider "+a+"; ";
	b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText('+b+'); \n';
	b=b+a+".setValueRange("+g+", "+h+", "+l+"); \n";b=b+a+".setColor("+("orange"==k?"RC_ORANGE":"blue"==k?"RC_BLUE":"green"==k?"RC_GREEN":"pink"==k?"RC_PINK":"gray"==k?"RC_GREY":"yellow"==k?"RC_YELLOW":"")+"); \n";
	return b=b+"LRemote.addControl("+a+"); \n\n"
};

Blockly.Arduino['ggLinkit_Remote_setjoystick']=function(){
	var a=Blockly.Arduino.valueToCode(this,"NAME",Blockly.Arduino.ORDER_ATOMIC)||"",
			b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"",
			c=Blockly.Arduino.valueToCode(this,"COLUMN",Blockly.Arduino.ORDER_ATOMIC)||"",
			d=Blockly.Arduino.valueToCode(this,"ROW",Blockly.Arduino.ORDER_ATOMIC)||"",
			e=Blockly.Arduino.valueToCode(this,"WIDTH",Blockly.Arduino.ORDER_ATOMIC)||"",
			f=Blockly.Arduino.valueToCode(this,"HEIGHT",Blockly.Arduino.ORDER_ATOMIC)||"",
			g=this.getFieldValue("COLOUR");
	a=a.replace(/"/g,"");
	var isVar=this.workspace.getVariableMap().getVariable(b) === null;
	if (!isVar) {
		b=b.replace(/"/g,"");
	}
	d=d.replace(/"/g,"");
	c=c.replace(/"/g,"");
	e=e.replace(/"/g,"");
	f=f.replace(/"/g,"");
	Blockly.Arduino.definitions_["ggLinkit_Remote_setJoystick_"+a]="LRemoteJoyStick "+a+"; ";
	b="\n"+a+".setPos("+c+", "+d+"); \n"+a+".setSize("+e+", "+f+"); \n"+a+'.setText('+b+'); \n';
	b=b+a+".setColor("+("orange"==g?"RC_ORANGE":"blue"==g?"RC_BLUE":"green"==g?"RC_GREEN":"pink"==g?"RC_PINK":"gray"==g?"RC_GREY":"yellow"==g?"RC_YELLOW":"")+"); \n";
	return b=b+"LRemote.addControl("+a+"); \n\n"
};

Blockly.Arduino['ggLinkit_Remote_connect_status']=function(){
	return["LRemote.connected()",Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino['ggLinkit_Remote_process']=function(){
	return"LRemote.process();\n"
};

Blockly.Arduino['ggLinkit_Remote_is_written']=function(){
	var a=this.getFieldValue("NAME");
	a=a.replace(/"/g,"");
  return[a+".isValueChanged()",Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino['ggLinkit_Remote_read_value']=function(){
	var a=this.getFieldValue("NAME");
	a=a.replace(/"/g,"");
	a=a.split(" ");
	var b=a[0]+".getValue()";
	1<a.length&&(b=b+"."+a[1].toLowerCase());
  return[b,Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino['ggLinkit_Remote_update_textlabel']=function(){
  var a=this.getFieldValue("NAME"),
  b=Blockly.Arduino.valueToCode(this,"CONTENT",Blockly.Arduino.ORDER_ATOMIC)||"";
  a=a.replace(/"/g,"");
  return a+".updateText(String("+b+"));\n"
};
//GuangGuang INA226
Blockly.Arduino['ggINA226Begin']=function(block) {
  //include內容(變數名字尾加上Include)，這一個一定要在define的前面
  Blockly.Arduino.definitions_['ggINA226InitInclude'] = '#include <Wire.h>\n#include <INA226_WE.h>\n';
  //define內容
  Blockly.Arduino.definitions_['ggINA226Init'] = '#define I2C_ADDRESS 0x40\n\n/* There are several ways to create your INA226 object:\n * INA226_WE ina226 = INA226_WE(); -> uses I2C Address = 0x40 / Wire\n * INA226_WE ina226 = INA226_WE(I2C_ADDRESS);\n * INA226_WE ina226 = INA226_WE(&Wire); -> uses I2C_ADDRESS = 0x40, pass any Wire Object\n * INA226_WE ina226 = INA226_WE(&Wire, I2C_ADDRESS);\n */\nINA226_WE ina226 = INA226_WE(I2C_ADDRESS);\n';
  //設定區塊程式碼(產生在setup()區塊內)
  Blockly.Arduino.setups_['ggINA226Init']='Wire.begin();\n  if(!ina226.init()){\n    Serial.println("Failed to init INA226. Check your wiring.");\n    while(1){}\n  }\n  ina226.waitUntilConversionCompleted(); //if you comment this line the first data might be zero\n';

  var code = '';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226Init']=function(block) {
  //include內容(變數名字尾加上Include)，這一個一定要在define的前面
  Blockly.Arduino.definitions_['ggINA226InitInclude'] = '#include <Wire.h>\n#include <INA226_WE.h>\n';
  //define內容
  Blockly.Arduino.definitions_['ggINA226Init'] = '#define I2C_ADDRESS 0x40\n\n/* There are several ways to create your INA226 object:\n * INA226_WE ina226 = INA226_WE(); -> uses I2C Address = 0x40 / Wire\n * INA226_WE ina226 = INA226_WE(I2C_ADDRESS);\n * INA226_WE ina226 = INA226_WE(&Wire); -> uses I2C_ADDRESS = 0x40, pass any Wire Object\n * INA226_WE ina226 = INA226_WE(&Wire, I2C_ADDRESS);\n */\nINA226_WE ina226 = INA226_WE(I2C_ADDRESS);\n';
  //設定區塊程式碼(產生在setup()區塊內)
  //Blockly.Arduino.setups_['ggINA226Init']='  Wire.begin();\n  if(!ina226.init()){\n    Serial.println("Failed to init INA226. Check your wiring.");\n    while(1){}\n  }\n  ina226.waitUntilConversionCompleted(); //if you comment this line the first data might be zero\n';

  var code = 'ina226.init()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226resetINA226']=function(block) {
  var code = 'ina226.reset_INA226();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setCorrectionFactor']=function(block) {
  var Corr = Blockly.Arduino.valueToCode(block, 'Corr', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ina226.setCorrectionFactor('+Corr+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setAverage']=function(block) {
  var Averages = block.getFieldValue('Averages');
  var code = 'ina226.setAverage('+Averages+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setConversionTimeA']=function(block) {
  var ConvTimes = block.getFieldValue('ConvTimes');
  var code = 'ina226.setConversionTime('+ConvTimes+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setConversionTimeB']=function(block) {
  var ShuntConvTime = block.getFieldValue('ShuntConvTime');
  var BusConvTime = block.getFieldValue('BusConvTime');
  var code = 'ina226.setConversionTime('+ShuntConvTime+','+BusConvTime+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setMeasureMode']=function(block) {
  var Mode = block.getFieldValue('Mode');
  var code = 'ina226.setMeasureMode('+Mode+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setCurrentRange']=function(block) {
  var Range = block.getFieldValue('Range');
  //include內容(變數名字尾加上Include)，這一個一定要在define的前面
  Blockly.Arduino.definitions_[''] = '';
  //define內容
  Blockly.Arduino.definitions_[''] = '';
  //設定區塊程式碼(產生在setup()區塊內)
  Blockly.Arduino.setups_['']='';

  var code = 'ina226.setCurrentRange('+Range+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setResistorRange']=function(block) {
  var Resistor = Blockly.Arduino.valueToCode(block, 'Resistor', Blockly.Arduino.ORDER_ATOMIC);
  var Range = Blockly.Arduino.valueToCode(block, 'Range', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ina226.setResistorRange('+Resistor+','+Range+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getShuntVoltage_mV']=function(block) {
  var code = 'ina226.getShuntVoltage_mV()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getShuntVoltage_V']=function(block) {
  var code = 'ina226.getShuntVoltage_V()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getBusVoltage_V']=function(block) {
  var code = 'ina226.getBusVoltage_V()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getCurrent_mA']=function(block) {
  var code = 'ina226.getCurrent_mA()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getCurrent_A']=function(block) {
  var code = 'ina226.getCurrent_A()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getBusPower']=function(block) {
  var code = 'ina226.getBusPower()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226startSingleMeasurement']=function(block) {
  var code = 'ina226.startSingleMeasurement();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226startSingleMeasurementNoWait']=function(block) {
  var code = 'ina226.startSingleMeasurementNoWait();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226isBusy']=function(block) {
  var code = 'ina226.isBusy()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226powerDown']=function(block) {
  var code = 'ina226.powerDown();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226powerUp']=function(block) {
  var code = 'ina226.powerUp();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226waitUntilConversionCompleted']=function(block) {
  var code = 'ina226.waitUntilConversionCompleted();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setAlertPinActiveHigh']=function(block) {
  var code = 'ina226.setAlertPinActiveHigh();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226enableAlertLatch']=function(block) {
  var code = 'ina226.enableAlertLatch();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226enableConvReadyAlert']=function(block) {
  var code = 'ina226.enableConvReadyAlert();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226setAlertType']=function(block) {
  var Type = block.getFieldValue('Type');
  var Limit = Blockly.Arduino.valueToCode(block, 'Limit', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ina226.setAlertType('+Type+','+Limit+');\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226readAndClearFlags']=function(block) {
  var code = 'ina226.readAndClearFlags();\n';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226getI2cErrorCode']=function(block) {
  var code = 'ina226.getI2cErrorCode()';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226overflow']=function(block) {
  var code = 'ina226.overflow';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226convAlert']=function(block) {
  var code = 'ina226.convAlert';//積木所在位置的程式碼
  return code;
};

Blockly.Arduino['ggINA226limitAlert']=function(block) {
  var code = 'ina226.limitAlert';//積木所在位置的程式碼
  return code;
};
