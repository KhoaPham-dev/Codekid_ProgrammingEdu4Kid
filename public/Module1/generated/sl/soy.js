// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly igre</span><span id="Games_puzzle">Sestavljanka</span><span id="Games_maze">Labirint</span><span id="Games_bird">Pti\u010D</span><span id="Games_turtle">\u017Delva</span><span id="Games_movie">Film</span><span id="Games_music">Glasba</span><span id="Games_pondTutor">Ribnik Mentor</span><span id="Games_pond">Ribnik</span><span id="Games_genetics">Genetika</span><span id="Games_linesOfCode1">Stopnjo si re\u0161il/-a z 1 vrstico JavaScript-a:</span><span id="Games_linesOfCode2">To stopnjo si re\u0161il z %1 vrsticami JavaScript-a.</span><span id="Games_nextLevel">Si pripravljen(-a) na stopnjo %1?</span><span id="Games_finalLevel">Si pripravljen(-a) na naslednji izziv?</span><span id="Games_submitTitle">Naslov:</span><span id="Games_linkTooltip">Shrani in pove\u017Ei do del\u010Dkov.</span><span id="Games_runTooltip">Po\u017Eeni program, ki si ga napisal/-a.</span><span id="Games_runProgram">Po\u017Eeni program</span><span id="Games_resetTooltip">Ustavi program in ponastavi stopnjo.</span><span id="Games_resetProgram">Ponastavi</span><span id="Games_help">Pomo\u010D</span><span id="Games_dialogOk">V redu</span><span id="Games_dialogCancel">Prekli\u010Di</span><span id="Games_catLogic">Logika</span><span id="Games_catLoops">Zanke</span><span id="Games_catMath">Matematika</span><span id="Games_catText">Besedilo</span><span id="Games_catLists">Tabele</span><span id="Games_catColour">Barva</span><span id="Games_catVariables">Spremenljivke</span><span id="Games_catProcedures">Funkcije</span><span id="Games_httpRequestError">Pri\u0161lo je do te\u017Eave z zahtevo.</span><span id="Games_linkAlert">Deli svoje del\u010Dke s povezavo: %1</span><span id="Games_hashError">Oprosti, \'%1\' se ne ujema z nobenim shranjenim programom.</span><span id="Games_xmlError">Ne morem nalo\u017Eiti shranjene datoteke. Mogo\u010De je bila ustvarjena z drugo razli\u010Dico Blocklyja?</span><span id="Games_submitted">Hvala za ta program! \u010Ce bo na\u0161emu osebju usposobljenih opic v\u0161e\u010D, ga bomo v nekaj dneh objavili v galeriji.</span><span id="Games_listVariable">tabela</span><span id="Games_textVariable">besedilo</span><span id="Games_breakLink">Ko za\u010Dne\u0161 urejati JavaScript, se ne more\u0161 vrniti nazaj na urejanje del\u010Dkov. Je to v redu?</span><span id="Games_blocks">Del\u010Dki</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="Shrani in pove\u017Ei do del\u010Dkov."><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">Pomo\u010D</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly igre</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u010Cestitke!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Prekli\u010Di</button><button id="doneOk" class="secondary">V redu</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ta stopnja je zelo te\u017Eka. Jo \u017Eeli\u0161 presko\u010Diti in za\u010Deti z naslednjo igro? Vedno se lahko kasneje vrne\u0161.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Prekli\u010Di</button><button id="abortOk" class="secondary">V redu</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">V redu</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
