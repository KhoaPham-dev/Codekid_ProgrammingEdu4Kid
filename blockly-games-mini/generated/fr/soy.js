// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Jeux Blockly</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Labyrinthe</span><span id="Games_bird">Oiseau</span><span id="Games_turtle">Tortue</span><span id="Games_movie">Film</span><span id="Games_music">Musique</span><span id="Games_pondTutor">Tutoriel de Pond</span><span id="Games_pond">Pond</span><span id="Games_genetics">G\u00E9n\u00E9tique</span><span id="Games_linesOfCode1">Vous avez r\u00E9solu ce niveau avec 1 ligne de JavaScript\u00A0:</span><span id="Games_linesOfCode2">Vous avez r\u00E9solu ce niveau avec %1 lignes de JavaScript\u00A0:</span><span id="Games_nextLevel">\u00CAtes-vous pr\u00EAt pour le niveau %1\u00A0?</span><span id="Games_finalLevel">\u00CAtes-vous pr\u00EAt pour le prochain d\u00E9fi\u00A0?</span><span id="Games_submitTitle">Titre\u00A0:</span><span id="Games_linkTooltip">Sauvegarder et lier aux blocs. </span><span id="Games_runTooltip">Lancer le programme que vous avez \u00E9crit.</span><span id="Games_runProgram">Ex\u00E9cuter le programme</span><span id="Games_resetTooltip">Arr\u00EAter le programme et r\u00E9initialiser le niveau.</span><span id="Games_resetProgram">R\u00E9initialiser</span><span id="Games_help">Aide</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annuler</span><span id="Games_catLogic">Logique</span><span id="Games_catLoops">Boucles</span><span id="Games_catMath">Math\u00E9matiques</span><span id="Games_catText">Texte</span><span id="Games_catLists">Listes</span><span id="Games_catColour">Couleur</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Fonctions</span><span id="Games_httpRequestError">Un probl\u00E8me est survenu avec la requ\u00EAte.</span><span id="Games_linkAlert">Partagez vos blocs gr\u00E2ce \u00E0 ce lien\u00A0:\n\n%1</span><span id="Games_hashError">D\u00E9sol\u00E9, \u00AB\u00A0%1\u00A0\u00BB ne correspond \u00E0 aucun programme sauvegard\u00E9.</span><span id="Games_xmlError">Impossible de charger votre fichier enregistr\u00E9.  Peut \u00EAtre a-t-il \u00E9t\u00E9 cr\u00E9\u00E9 avec une autre version de Blockly\u00A0?</span><span id="Games_submitted">Merci pour ce programme\u00A0! Si notre \u00E9quipe de singes dress\u00E9s l\u2019aime, elle le publiera sur la galerie dans les deux jours.</span><span id="Games_listVariable">liste</span><span id="Games_textVariable">texte</span><span id="Games_breakLink">Une fois que vous aurez commenc\u00E9 \u00E0 modifier le JavaScript, vous ne pourrez pas revenir \u00E0 la modification des blocs. Est-ce bon pour vous\u00A0?</span><span id="Games_blocks">Blocs</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="Sauvegarder et lier aux blocs. "><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">Aide</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Jeux Blockly</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">F\u00E9licitations\u00A0!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annuler</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Ce niveau est tr\u00E8s difficile. Voulez-vous le sauter et passer au jeu suivant\u00A0? Vous pourrez toujours y revenir plus tard.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annuler</button><button id="abortOk" class="secondary">OK</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
