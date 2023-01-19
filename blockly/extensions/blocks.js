// GuangGuang Mini Car
Blockly.Blocks['ggMiniCarInit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_PIN);
    this.appendValueInput("L1")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_PIN_L1);
    this.appendValueInput("L2")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_PIN_L2);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_PIN_LR)
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'LeftReverse');
    this.appendValueInput("R1")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_PIN_R1);
    this.appendValueInput("R2")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_PIN_R2);
    this.appendDummyInput()            
        .appendField(Blockly.Msg.GG_MINICAR_PIN_RR)
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'RightReverse');
    this.setInputsInline(true);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarInitUS'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_INIT_SHOW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_US), "USPos")
        .appendField(Blockly.Msg.GG_MINICAR_US_SHOW);
    this.appendValueInput("USTrigPin")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_US_TRIGPIN);
    this.appendValueInput("USEchoPin")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_US_ECHOPIN);
    this.setInputsInline(true);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarInitIR'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_INIT_SHOW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_IR), "IrPos")
        .appendField(Blockly.Msg.GG_MINICAR_IR_SHOW);
    this.appendValueInput("IrPin")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_IR_PIN);
    this.setInputsInline(true);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarLineAdjust'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_LINEADJUST_SHOW);
    this.appendValueInput("LineAdjust")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarSetSpeed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_SETSPEED_SHOW);
    this.appendValueInput("Speed")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarMove'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_MOVE_SHOW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_MOVE, this.validate), "MoveType");
    this.appendDummyInput("TurnType")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_TURN, this.arcspeed), "MyTurn");
    this.appendValueInput("ArcSpeed")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_MINICAR_ARCSPEED);
    this.getInput("TurnType").setVisible(false);
    this.getInput("ArcSpeed").setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  },
  validate: function(newValue) {
    const block = this.sourceBlock_;
    if ((newValue=="TurnLeft")||(newValue=="TurnRight")) {
      block.getInput("TurnType").setVisible(true);
    } else {
      block.getInput("TurnType").setVisible(false);
    }  
    block.getInput("ArcSpeed").setVisible(false);
  },
  arcspeed: function(newValue) {
    const block = this.sourceBlock_;
    if (newValue=="Arc") {
      block.getInput("ArcSpeed").setVisible(true);
    } else {
      block.getInput("ArcSpeed").setVisible(false);
    }  
  }
};

Blockly.Blocks['ggMiniCarUSSetUnit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_US_UNIT_SHOW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_US_UNIT), "USUnit");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarUSGetDistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_US), "USPos")
        .appendField(Blockly.Msg.GG_MINICAR_US_GETDISTANCE);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};

Blockly.Blocks['ggMiniCarIrDetectWhite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_MINICAR_IR), "IrPos")
        .appendField(Blockly.Msg.GG_MINICAR_IR_DETECT);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_MiniCar"]);
  }
};
// PS2 Controller
Blockly.Blocks['ggPS2Init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS2_INIT_SHOW)
    this.appendValueInput("Data")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_PS2_INIT_DATPIN);
    this.appendValueInput("Command")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_PS2_INIT_CMDPIN);
    this.appendValueInput("ChipSelect")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_PS2_INIT_CSPIN);
    this.appendValueInput("Clock")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_PS2_INIT_CLKPIN);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS2_PRESSURES)
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'Pressures');
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS2_RUMBLE)
        .appendField(new Blockly.FieldCheckbox("TRUE"), 'Rumble');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS2_ReadGamePad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS2_READGAMEPAD)
        .appendField(Blockly.Msg.GG_PS2_RUMBLE)
        .appendField(new Blockly.FieldCheckbox("FALSE",this.validate), 'Rumble');
    this.appendValueInput("Strength")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_PS2_RUMBLE_STRENGTH);
    this.getInput("Strength").setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  validate: function(newValue) {
    const block = this.sourceBlock_;
    if (newValue=="FALSE") {
      block.getInput("Strength").setVisible(false);
    } else {
      block.getInput("Strength").setVisible(true);
    }  
  }
};

Blockly.Blocks['ggPS2_Button_NewState'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS2_BUTTON_NEWSTATE), "Button")
        .appendField(Blockly.Msg.GG_PS2_NEWSTATE);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS2_Button_Event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_JUST)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS2_ACTION), "Action")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS2_BUTTON), "Button")
        .appendField(Blockly.Msg.GG_BUTTON);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS2_Analog_State'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS2_ANALOG), "Analog")
        .appendField(Blockly.Msg.GG_BUTTON_ANALOG);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS2_Button_IsPressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS2_BUTTON), "Button")
        .appendField(Blockly.Msg.GG_ISPRESSED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS2_Enable_Pressures'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS2_ENABLE_PRESSURES);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS2_Enable_Rumble'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS2_ENABLE_RUMBLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_PS2"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
// PS3 Controller
Blockly.Blocks['ggPS3Init'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GG_PS3_INIT_SHOW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_INIT_ITEMONCHIP, this.validate), "MacType");
    this.appendValueInput("Mac")
        .setCheck("String")
        .appendField("MAC=");
    this.getInput("Mac").setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  validate: function(newValue) {
    const block = this.sourceBlock_;
    if (newValue=="OnChip") {
      block.getInput("Mac").setVisible(false);
    } else {
      block.getInput("Mac").setVisible(true);
    }  
  }
};

Blockly.Blocks['ggPS3IsConnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS3_IS_CONNECTED_SHOW);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_Button_Event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_ACTION), "Action")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_BUTTON), "Button")
        .appendField(Blockly.Msg.GG_BUTTON);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_GG_PS3_EVENT"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_Analog_Event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_ANALOG), "Analog")
        .appendField(Blockly.Msg.GG_PS3_ANALOGCHANGE_SHOW);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_GG_PS3_EVENT"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_Button_State'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_BUTTON), "Button")
        .appendField(Blockly.Msg.GG_PS3_BUTTON_STATE_SHOW);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_Analog_State'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_ANALOG), "Analog")
        .appendField(Blockly.Msg.GG_BUTTON_ANALOG);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_Button_IsPressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_BUTTON), "Button")
        .appendField(Blockly.Msg.GG_ISPRESSED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_Event_Callback'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS3_CALLBACK_EVENT_FUNCTION_SHOW)
        .appendField(Blockly.Msg.GG_PS3_CALLBACK_FUNCTION_SHOW);
    this.appendValueInput("Func_Name")
        .setCheck("String")
        .appendField(Blockly.Msg.GG_PS3_FUNCTION_NAME_SHOW);
    this.appendStatementInput("STATEMENT")
        .setCheck(null);
    this.setInputsInline(true);    
    this.setColour(Blockly.Msg["HUE_GG_PS3_EVENT"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_OnConnect_Callback'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS3_CALLBACK_CONNECT_FUNCTION_SHOW)
        .appendField(Blockly.Msg.GG_PS3_CALLBACK_FUNCTION_SHOW);
    this.appendValueInput("Func_Name")
        .setCheck("String")
        .appendField(Blockly.Msg.GG_PS3_FUNCTION_NAME_SHOW);
    this.appendStatementInput("STATEMENT")
        .setCheck(null);
    this.setInputsInline(true);    
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_DisConnect_Callback'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS3_CALLBACK_DISCONNECT_FUNCTION_SHOW)
        .appendField(Blockly.Msg.GG_PS3_CALLBACK_FUNCTION_SHOW);
    this.appendValueInput("Func_Name")
        .setCheck("String")
        .appendField(Blockly.Msg.GG_PS3_FUNCTION_NAME_SHOW);
    this.appendStatementInput("STATEMENT")
        .setCheck(null);
    this.setInputsInline(true);    
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_GGPS3_MAC'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_GG_MACADDR), "MAC");
    this.setOutput(true, "");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggPS3_YPPS3_MAC'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_PS3_YP_MACADDR), "MAC");
    this.setOutput(true, "");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Dabble
Blockly.Blocks['ggDabble_Begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_DABBLE_BEGIN)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_DABBLE_BLEMODE, this.validate), "BleMode");
    this.appendValueInput("BleName")
        .setCheck("String")
        .appendField("NAME=");
    this.appendDummyInput("BleSerial")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_DABBLE_BLESERIAL, this.bleserial), "SerialMode");
    this.appendValueInput("Baud")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_DABBLE_BAUD);
    this.appendValueInput("RX")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_DABBLE_RX_PIN);
    this.appendValueInput("TX")
        .setCheck("Number")
        .appendField(Blockly.Msg.GG_DABBLE_TX_PIN);
    this.getInput("BleName").setVisible(true);
    this.getInput("BleSerial").setVisible(false);
    this.getInput("Baud").setVisible(false);
    this.getInput("RX").setVisible(false);
    this.getInput("TX").setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_DABBLE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  validate: function(newValue) {
    const block = this.sourceBlock_;
    if (newValue=="ESP32") {
      block.getInput("BleName").setVisible(true);
      block.getInput("BleSerial").setVisible(false);
      block.getInput("Baud").setVisible(false);
      block.getInput("RX").setVisible(false);
      block.getInput("TX").setVisible(false);
    } else {
      block.getInput("BleName").setVisible(false);
      block.getInput("BleSerial").setVisible(true);
      if (block.getField("BleSerial")) block.getField("BleSerial").setValue("Serial");
      block.getInput("Baud").setVisible(false);
      block.getInput("RX").setVisible(false);
      block.getInput("TX").setVisible(false);
    }  
  },
  bleserial: function(newValue) {
    const block = this.sourceBlock_;
    if (newValue=="Serial") {
      block.getInput("Baud").setVisible(false);
      block.getInput("RX").setVisible(false);
      block.getInput("TX").setVisible(false);
    } else {
      block.getInput("Baud").setVisible(true);
      block.getInput("RX").setVisible(true);
      block.getInput("TX").setVisible(true);
    }  
  }
};

Blockly.Blocks['ggDabble_GamePad_ProcessData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_DABBLE_PROCESSDATA);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(Blockly.Msg["HUE_GG_DABBLE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggDabble_GamePad_KeyIsPressed'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_DABBLE_GAMEPAD_BUTTONPRESS), "Button")
    .appendField(Blockly.Msg.GG_ISPRESSED);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_DABBLE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggDabble_GamePad_KeyState'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_DABBLE_GAMEPAD_BUTTONSTATE), "ButtonState")
        .appendField(Blockly.Msg.GG_DABBLE_GAMEPAD_STATE);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_DABBLE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggDabble_GamePad_getJoystickData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_DABBLE_GAMEPAD_GETJOYSTICKDATA), "getJoystickData")
        .appendField(Blockly.Msg.GG_DABBLE_GAMEPAD_GETSTICKNO);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_DABBLE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ggDabble_GamePad_getJoystick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GG_DABBLE_GAMEPAD_GETJOYSTICK), "getJoystick")
        .appendField(Blockly.Msg.GG_DABBLE_GAMEPAD_GETSTICKNAME);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_DABBLE"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
