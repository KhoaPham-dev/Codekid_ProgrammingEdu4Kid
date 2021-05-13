// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Uraren n Blocky</span><span id="Games_puzzle">Apuzzel</span><span id="Games_maze">Aslellay</span><span id="Games_bird">Ag\u1E0Di\u1E0D</span><span id="Games_turtle">Tifkert</span><span id="Games_movie">Asaru</span><span id="Games_music">A\u1E93awan</span><span id="Games_pondTutor">Tamsirt n Pond</span><span id="Games_pond">Pond</span><span id="Games_genetics">Acta</span><span id="Games_linesOfCode1">Tufi\u1E0D-d aswir-a s 1 n yizerrig n JavaScript:</span><span id="Games_linesOfCode2">Tufi\u1E0D-d aswir-a s %1 n yizerrigen n JavaScript:</span><span id="Games_nextLevel">Theyya\u1E0D i uswir %1?</span><span id="Games_finalLevel">Theyya\u1E0D i wayen i d-itteddun ?</span><span id="Games_submitTitle">Azwel:</span><span id="Games_linkTooltip">Sekles teqqne\u1E0D akk i\u1E25edran i yellan.</span><span id="Games_runTooltip">Selkem ahil i turi\u1E0D.</span><span id="Games_runProgram">Selkem ahil</span><span id="Games_resetTooltip">Se\u1E25bes ahil t\u025Biwde\u1E0D-d s wadda i uswir.</span><span id="Games_resetProgram">\u0190iwed-d s wadda</span><span id="Games_help">Tallelt</span><span id="Games_dialogOk">IH</span><span id="Games_dialogCancel">Sefsex</span><span id="Games_catLogic">Tame\u1E93la</span><span id="Games_catLoops">Tiyerrisin</span><span id="Games_catMath">Tusnakt</span><span id="Games_catText">A\u1E0Dris</span><span id="Games_catLists">Tibdarin</span><span id="Games_catColour">Ini</span><span id="Games_catVariables">Imuttiyen</span><span id="Games_catProcedures">Tiwuriwin</span><span id="Games_httpRequestError">Yella-d wugur deg tuttra.</span><span id="Games_linkAlert">B\u1E0Du i\u1E25edran-ik/im s use\u0263wen-a:\n\n\n%1</span><span id="Games_hashError">Suref-a\u0263, \u00AB\u202F%1\u202F\u00BB ur yettak ara anzi ula \u0263er yiwen n wahil yettwaskelsen.</span><span id="Games_xmlError">Azdam n ufaylu-yik/yim i teskelse\u1E0D yugi. Ahat yettwasnulfa-d s lqem yemgaraden n Blockly ?</span><span id="Games_submitted">Tanemmirt \u0263ef wahil-a! Ma ye\u025B\u01E7eb-as i terba\u025Bt-nne\u0263 n yibkan, ad t-id-ssuf\u0263en seg sya \u0263er sin n wussan.</span><span id="Games_listVariable">tabdart</span><span id="Games_textVariable">a\u1E0Dris</span><span id="Games_breakLink">Segmi ara tebdu\u1E0D asnifel n JavaScript, ur tettizmire\u1E0D ara akk ad tu\u0263ale\u1E0D \u0263er usnifel n yi\u1E25edran. Yelha?</span><span id="Games_blocks">I\u1E25edran</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="Sekles teqqne\u1E0D akk i\u1E25edran i yellan."><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">Tallelt</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Uraren n Blocky</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit215 = opt_ijData.maxLevel + 1;
  for (var i215 = 1; i215 < iLimit215; i215++) {
    var url__soy216 = '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i215) + ((opt_data.suffix) ? '&' + soy.$$escapeHtml(opt_data.suffix) : '');
    output += ' ' + ((i215 == opt_ijData.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i215) + '">' + soy.$$escapeHtml(i215) + '</span>' : (i215 == opt_ijData.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i215) + '" href="' + soy.$$escapeHtml(url__soy216) + '">' + soy.$$escapeHtml(i215) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i215) + '" href="' + soy.$$escapeHtml(url__soy216) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Ayyuz!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Sefsex</button><button id="doneOk" class="secondary">IH</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Aswir-a yu\u025Be\u1E5B a\u1E6Das a\u1E6Das. Teb\u0263i\u1E0D ad t\u01E7ellbe\u1E0D ad t\u025Beddi\u1E0D \u0263er wurar i d-itteddun? Ad tizmire\u1E0D ad tu\u0263ale\u1E0D alma d da umbe\u025Bd.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Sefsex</button><button id="abortOk" class="secondary">IH</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">IH</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
