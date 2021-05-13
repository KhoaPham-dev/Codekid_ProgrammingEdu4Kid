// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blokkasp\u00E6l</span><span id="Games_puzzle">Putlisp\u00E6l</span><span id="Games_maze">Villiniborg</span><span id="Games_bird">Fuglur</span><span id="Games_turtle">Skjaldb\u00F8ka</span><span id="Games_movie">Filmur</span><span id="Games_music">T\u00F3nleikur</span><span id="Games_pondTutor">Tj\u00F8rn Veglei\u00F0ari</span><span id="Games_pond">Tj\u00F8rn</span><span id="Games_genetics">\u00CDlegur</span><span id="Games_linesOfCode1">T\u00FA loysti hetta stigi\u00F0 vi\u00F0 einari linju av JavaScript:</span><span id="Games_linesOfCode2">T\u00FA loysti hetta stigi\u00F0 vi\u00F0 %1 linjum av JavaScript:</span><span id="Games_nextLevel">Er t\u00FA kl\u00E1r/ur til %1. stig?</span><span id="Games_finalLevel">Er t\u00FA kl\u00E1r/ur til n\u00E6stu avbj\u00F3\u00F0ing?</span><span id="Games_submitTitle">Heiti:</span><span id="Games_linkTooltip">Goym og leinkja til blokkar.</span><span id="Games_runTooltip">Koyr forriti\u00F0, sum t\u00FA skriva\u00F0i.</span><span id="Games_runProgram">Koyr forriti\u00F0</span><span id="Games_resetTooltip">Ste\u00F0ga forritinum og nullstilla stigi\u00F0.</span><span id="Games_resetProgram">Nullstilla</span><span id="Games_help">Hj\u00E1lp</span><span id="Games_dialogOk">\u00CD lagi</span><span id="Games_dialogCancel">Angra</span><span id="Games_catLogic">Logikkur</span><span id="Games_catLoops">Lykkjur</span><span id="Games_catMath">St\u00F8ddfr\u00F8\u00F0i</span><span id="Games_catText">Tekstur</span><span id="Games_catLists">Listar</span><span id="Games_catColour">Litur</span><span id="Games_catVariables">Variablar</span><span id="Games_catProcedures">Funkti\u00F3nir</span><span id="Games_httpRequestError">Har var ein trupulleiki vi\u00F0 umb\u00F8nini.</span><span id="Games_linkAlert">Deil blokkarnar hj\u00E1 t\u00E6r vi\u00F0 hesi leinkuni:\n\n%1</span><span id="Games_hashError">Orsaka \'%1\' samsvarar ikki vi\u00F0 naka\u00F0 goymt forrit.</span><span id="Games_xmlError">F\u00E1i ikki innlisi\u00F0 t\u00EDna goymdu f\u00EDlu. M\u00F8guliga var hon gj\u00F8rd vi\u00F0 eini a\u00F0rari \u00FAtg\u00E1vu av Blockly?</span><span id="Games_submitted">Takk fyri hetta forriti\u00F0! Um okkara v\u00E6lvandu apur d\u00E1mar ta\u00F0, so fara tey at \u00FAtgeva ta\u00F0 \u00ED savninum um nakrar dagar.</span><span id="Games_listVariable">listi</span><span id="Games_textVariable">tekstur</span><span id="Games_breakLink">T\u00E1 t\u00FA byrjar at r\u00E6tta \u00ED forritinum vi\u00F0 JavaScript, so kanst t\u00FA ikki longur r\u00E6tta vi\u00F0 blokkum. Er hetta \u00ED lagi?</span><span id="Games_blocks">Blokkar</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="Goym og leinkja til blokkar."><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">Hj\u00E1lp</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blokkasp\u00E6l</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Til lukku!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Angra</button><button id="doneOk" class="secondary">\u00CD lagi</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Hetta stigi\u00F0 er \u00F3fatiliga torf\u00F8rt. Kundi t\u00FA hugsa\u00F0 t\u00E6r at lopi\u00F0 ta\u00F0 um og fari\u00F0 til n\u00E6sta sp\u00E6l? T\u00FA kanst alt\u00ED\u00F0 koma aftur seinni.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Angra</button><button id="abortOk" class="secondary">\u00CD lagi</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u00CD lagi</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
