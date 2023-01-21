//GuangGuang MiniCar
Blockly.Arduino['ggMiniCarInit']=function(block) {
  var L1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
  var L2 = Blockly.Arduino.valueToCode(block, 'L2', Blockly.Arduino.ORDER_ATOMIC);
  var LeftReverse = block.getFieldValue('LeftReverse') === 'TRUE';
  var R1 = Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
  var R2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
  var RightReverse = block.getFieldValue('RightReverse') === 'TRUE';
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include "GG_MiniCar.h"';
  Blockly.Arduino.definitions_['ggMiniCarInit'] = 'DC_Car ggCar('+ L1 +','+ L2 +','+ LeftReverse +','+ R1 +','+ R2 +','+ RightReverse +',true);';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitUS']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var USTrigPin = Blockly.Arduino.valueToCode(block, 'USTrigPin', Blockly.Arduino.ORDER_ATOMIC);
  var USEchoPin = Blockly.Arduino.valueToCode(block, 'USEchoPin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitUS'] = '#include "GG_US.h"';
  Blockly.Arduino.definitions_['ggMiniCarInitUS'+SensorPos] = 'Ultrasonic US_'+ SensorPos +'('+ USTrigPin +','+ USEchoPin +');';
  var code = '';
  return code;
};

Blockly.Arduino['ggMiniCarInitIR']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var IrPin = Blockly.Arduino.valueToCode(block, 'IrPin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['ggMiniCarInitInclude'] = '#include "GG_MiniCar.h"';
  Blockly.Arduino.definitions_['ggMiniCarInitIr'+SensorPos] = 'Trace Trace_'+ SensorPos +'('+ IrPin +');';
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

Blockly.Arduino['ggMiniCarUSSetUnit']=function(block) {
  var USUnit = block.getFieldValue('USUnit');
  var code = 'Set_US_Measure_Unit('+ USUnit +');\n';
  return code;
};

Blockly.Arduino['ggMiniCarUSGetDistance']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'US_'+ SensorPos +'.Measure()';
  return code;
};

Blockly.Arduino['ggMiniCarIrDetectWhite']=function(block) {
  var SensorPos = block.getFieldValue('SensorPos');
  var code = 'Trace_'+ SensorPos +'.isDetectWhite()';
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

Blockly.Arduino['ggPS3_YPPS3_MAC']=function(block) {
  var Mac= block.getFieldValue('MAC');
  Mac='"'+Mac+'"';
  return Mac;
};
// Dabble
Blockly.Arduino['ggDabble_Begin']=function(block) {
  var BleMode = block.getFieldValue('BleMode');
  if (BleMode=="ESP32") {
    var BleName = Blockly.Arduino.valueToCode(block, 'BleName', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["ggDabble_Begin"]='#define CUSTOM_SETTINGS\n#define INCLUDE_GAMEPAD_MODULE\n#include <DabbleESP32.h>';
    Blockly.Arduino.setups_['ggDabble_Begin'] = 'Dabble.begin("'+ BleName +'");\n';
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
