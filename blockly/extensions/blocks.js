// GuangGuang Mini Car
Blockly.Blocks['InitggMiniCar'] = {
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

Blockly.Blocks['InitggMiniCarIR'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_MINICAR_IR)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_MINICAR_IR_FRONTLEFT,"fLeft"],[Blockly.Msg.GG_MINICAR_IR_FRONTCENTER,"fCenter"],[Blockly.Msg.GG_MINICAR_IR_FRONTRIGHT,"fRight"],[Blockly.Msg.GG_MINICAR_IR_REARLEFT,"rLeft"],[Blockly.Msg.GG_MINICAR_IR_REARCENTER,"rCenter"],[Blockly.Msg.GG_MINICAR_IR_REARRIGHT,"rRight"],[Blockly.Msg.GG_MINICAR_IR_LEFT,"Left"],[Blockly.Msg.GG_MINICAR_IR_CENTER,"Center"],[Blockly.Msg.GG_MINICAR_IR_RIGHT,"Right"]]), "IrPos")
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
// PS3 Controller
Blockly.Blocks['InitPS3Controller'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GG_PS3_INIT_SHOW)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_INIT_CUSTOM_SHOW,"Custom"], [Blockly.Msg.GG_PS3_INIT_ONCHIP_SHOW,"OnChip"]], this.validate), "MacType");
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
    }
    else {
      block.getInput("Mac").setVisible(true);
    }  
  }
};

Blockly.Blocks['PS3IsConnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GG_PS3_IS_CONNECTED_SHOW);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PS3_Button_Event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_ACTION_RELEASE_SHOW,"up"], [Blockly.Msg.GG_PS3_ACTION_PRESS_SHOW,"down"]]), "Action")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_BUTTON_UP_SHOW,"up"],[Blockly.Msg.GG_PS3_BUTTON_RIGHT_SHOW,"right"],[Blockly.Msg.GG_PS3_BUTTON_DOWN_SHOW,"down"],[Blockly.Msg.GG_PS3_BUTTON_LEFT_SHOW,"left"],[Blockly.Msg.GG_PS3_BUTTON_TRIANGL_SHOW,"triangle"],[Blockly.Msg.GG_PS3_BUTTON_CIRCLE_SHOW,"circle"],[Blockly.Msg.GG_PS3_BUTTON_CROSS_SHOW,"cross"],[Blockly.Msg.GG_PS3_BUTTON_SQUARE_SHOW,"square"],[Blockly.Msg.GG_PS3_BUTTON_L1_SHOW,"l1"],[Blockly.Msg.GG_PS3_BUTTON_L2_SHOW,"l2"],[Blockly.Msg.GG_PS3_BUTTON_L3_SHOW,"l3"],[Blockly.Msg.GG_PS3_BUTTON_R1_SHOW,"r1"],[Blockly.Msg.GG_PS3_BUTTON_R2_SHOW,"r2"],[Blockly.Msg.GG_PS3_BUTTON_R3_SHOW,"r3"],[Blockly.Msg.GG_PS3_BUTTON_SELECT_SHOW,"select"],[Blockly.Msg.GG_PS3_BUTTON_START_SHOW,"start"],[Blockly.Msg.GG_PS3_BUTTON_PS_SHOW,"ps"]]), "Button")
        .appendField(Blockly.Msg.GG_PS3_BUTTON_SHOW);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_GG_PS3_EVENT"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PS3_Analog_Event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_BUTTON_STICK_LEFTX_SHOW,"stick.lx"],[Blockly.Msg.GG_PS3_BUTTON_STICK_LEFTY_SHOW,"stick.ly"],[Blockly.Msg.GG_PS3_BUTTON_STICK_RIGHTX_SHOW,"stick.rx"],[Blockly.Msg.GG_PS3_BUTTON_STICK_RIGHTY_SHOW,"stick.ry"],[Blockly.Msg.GG_PS3_BUTTON_UP_SHOW,"up"],[Blockly.Msg.GG_PS3_BUTTON_RIGHT_SHOW,"right"],[Blockly.Msg.GG_PS3_BUTTON_DOWN_SHOW,"down"],[Blockly.Msg.GG_PS3_BUTTON_LEFT_SHOW,"left"],[Blockly.Msg.GG_PS3_BUTTON_TRIANGL_SHOW,"triangle"],[Blockly.Msg.GG_PS3_BUTTON_CIRCLE_SHOW,"circle"],[Blockly.Msg.GG_PS3_BUTTON_CROSS_SHOW,"cross"],[Blockly.Msg.GG_PS3_BUTTON_SQUARE_SHOW,"square"],[Blockly.Msg.GG_PS3_BUTTON_L1_SHOW,"l1"],[Blockly.Msg.GG_PS3_BUTTON_L2_SHOW,"l2"],[Blockly.Msg.GG_PS3_BUTTON_R1_SHOW,"r1"],[Blockly.Msg.GG_PS3_BUTTON_R2_SHOW,"r2"]]), "Analog")
        .appendField(Blockly.Msg.GG_PS3_ANALOGCHANGE_SHOW);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_GG_PS3_EVENT"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PS3_Button_State'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_BUTTON_UP_SHOW,"up"],[Blockly.Msg.GG_PS3_BUTTON_RIGHT_SHOW,"right"],[Blockly.Msg.GG_PS3_BUTTON_DOWN_SHOW,"down"],[Blockly.Msg.GG_PS3_BUTTON_LEFT_SHOW,"left"],[Blockly.Msg.GG_PS3_BUTTON_TRIANGL_SHOW,"triangle"],[Blockly.Msg.GG_PS3_BUTTON_CIRCLE_SHOW,"circle"],[Blockly.Msg.GG_PS3_BUTTON_CROSS_SHOW,"cross"],[Blockly.Msg.GG_PS3_BUTTON_SQUARE_SHOW,"square"],[Blockly.Msg.GG_PS3_BUTTON_L1_SHOW,"l1"],[Blockly.Msg.GG_PS3_BUTTON_L2_SHOW,"l2"],[Blockly.Msg.GG_PS3_BUTTON_L3_SHOW,"l3"],[Blockly.Msg.GG_PS3_BUTTON_R1_SHOW,"r1"],[Blockly.Msg.GG_PS3_BUTTON_R2_SHOW,"r2"],[Blockly.Msg.GG_PS3_BUTTON_R3_SHOW,"r3"],[Blockly.Msg.GG_PS3_BUTTON_SELECT_SHOW,"select"],[Blockly.Msg.GG_PS3_BUTTON_START_SHOW,"start"],[Blockly.Msg.GG_PS3_BUTTON_PS_SHOW,"ps"]]), "Button")
        .appendField(Blockly.Msg.GG_PS3_BUTTON_STATE_SHOW);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PS3_Analog_State'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_BUTTON_STICK_LEFTX_SHOW,"stick.lx"],[Blockly.Msg.GG_PS3_BUTTON_STICK_LEFTY_SHOW,"stick.ly"],[Blockly.Msg.GG_PS3_BUTTON_STICK_RIGHTX_SHOW,"stick.rx"],[Blockly.Msg.GG_PS3_BUTTON_STICK_RIGHTY_SHOW,"stick.ry"],[Blockly.Msg.GG_PS3_BUTTON_UP_SHOW,"up"],[Blockly.Msg.GG_PS3_BUTTON_RIGHT_SHOW,"right"],[Blockly.Msg.GG_PS3_BUTTON_DOWN_SHOW,"down"],[Blockly.Msg.GG_PS3_BUTTON_LEFT_SHOW,"left"],[Blockly.Msg.GG_PS3_BUTTON_TRIANGL_SHOW,"triangle"],[Blockly.Msg.GG_PS3_BUTTON_CIRCLE_SHOW,"circle"],[Blockly.Msg.GG_PS3_BUTTON_CROSS_SHOW,"cross"],[Blockly.Msg.GG_PS3_BUTTON_SQUARE_SHOW,"square"],[Blockly.Msg.GG_PS3_BUTTON_L1_SHOW,"l1"],[Blockly.Msg.GG_PS3_BUTTON_L2_SHOW,"l2"],[Blockly.Msg.GG_PS3_BUTTON_R1_SHOW,"r1"],[Blockly.Msg.GG_PS3_BUTTON_R2_SHOW,"r2"]]), "Analog")
        .appendField(Blockly.Msg.GG_PS3_BUTTON_ANALOG_SHOW);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PS3_Button_IsPressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GG_PS3_BUTTON_UP_SHOW,"up"],[Blockly.Msg.GG_PS3_BUTTON_RIGHT_SHOW,"right"],[Blockly.Msg.GG_PS3_BUTTON_DOWN_SHOW,"down"],[Blockly.Msg.GG_PS3_BUTTON_LEFT_SHOW,"left"],[Blockly.Msg.GG_PS3_BUTTON_TRIANGL_SHOW,"triangle"],[Blockly.Msg.GG_PS3_BUTTON_CIRCLE_SHOW,"circle"],[Blockly.Msg.GG_PS3_BUTTON_CROSS_SHOW,"cross"],[Blockly.Msg.GG_PS3_BUTTON_SQUARE_SHOW,"square"],[Blockly.Msg.GG_PS3_BUTTON_L1_SHOW,"l1"],[Blockly.Msg.GG_PS3_BUTTON_L2_SHOW,"l2"],[Blockly.Msg.GG_PS3_BUTTON_L3_SHOW,"l3"],[Blockly.Msg.GG_PS3_BUTTON_R1_SHOW,"r1"],[Blockly.Msg.GG_PS3_BUTTON_R2_SHOW,"r2"],[Blockly.Msg.GG_PS3_BUTTON_R3_SHOW,"r3"],[Blockly.Msg.GG_PS3_BUTTON_SELECT_SHOW,"select"],[Blockly.Msg.GG_PS3_BUTTON_START_SHOW,"start"],[Blockly.Msg.GG_PS3_BUTTON_PS_SHOW,"ps"]]), "Button")
        .appendField(Blockly.Msg.GG_PS3_BUTTON_ISPRESSED_SHOW);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Msg["HUE_GG_PS3"]);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PS3_Event_Callback'] = {
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

Blockly.Blocks['PS3_OnConnect_Callback'] = {
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

Blockly.Blocks['PS3_DisConnect_Callback'] = {
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