Blockly.Arduino['initminicar'] = function(block) {
  var number_lf_pin = block.getFieldValue('LF_Pin');
  var number_lb_pin = block.getFieldValue('LB_Pin');
  var checkbox_leftreverse = block.getFieldValue('LeftReverse') === 'TRUE';
  var number_rf_pin = block.getFieldValue('RF_Pin');
  var number_rb_pin = block.getFieldValue('RB_Pin');
  var checkbox_rightreverse = block.getFieldValue('RightReverse') === 'TRUE';
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};
