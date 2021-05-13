// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide("BlocklyGames.soy");

goog.require("soy");
goog.require("soydata");

BlocklyGames.soy.messages = function (opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Rompecabeces</span><span id="Games_maze">Llaberintu</span><span id="Games_bird">P\u00E1xaru</span><span id="Games_turtle">Tortuga</span><span id="Games_movie">Pel\u00EDcula</span><span id="Games_music">M\u00FAsica</span><span id="Games_pondTutor">Tutor del estanque</span><span id="Games_pond">Estanque</span><span id="Games_genetics">Xen\u00E9tica</span><span id="Games_linesOfCode1">Resolvisti esti nivel con 1 llinia de JavaScript:</span><span id="Games_linesOfCode2">Resollvisti esti nivel con %1 llinies de JavaScript</span><span id="Games_nextLevel">\u00BFTas llistu/a pal nivel %1?</span><span id="Games_finalLevel">\u00BFTas llistu/a pal viniente nivel?</span><span id="Games_submitTitle">T\u00EDtulu:</span><span id="Games_linkTooltip">Guardar y enllazar a los bloques.</span><span id="Games_runTooltip">Executar el programa qu\'escribisti.</span><span id="Games_runProgram">Executar el programa</span><span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span><span id="Games_resetProgram">Reaniciar</span><span id="Games_help">Ayuda</span><span id="Games_dialogOk">Aceutar</span><span id="Games_dialogCancel">Encaboxar</span><span id="Games_catLogic">L\u00F3xica</span><span id="Games_catLoops">Bucles</span><span id="Games_catMath">Matem\u00E1tiques</span><span id="Games_catText">Testu</span><span id="Games_catLists">Llistes</span><span id="Games_catColour">Color</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Funciones</span><span id="Games_httpRequestError">Hubo un problema col pidimientu.</span><span id="Games_linkAlert">Comparti los tos bloques con esti enllaz:\n\n%1</span><span id="Games_hashError">Sent\u00EDmoslo, \'%1\' nun correspuende con neng\u00FAn programa guard\u00E1u.</span><span id="Games_xmlError">Nun pudo cargase\'l ficheru guard\u00E1u.\n\u00BFQuiciabes foi cre\u00E1u con otra versi\u00F3n de Blockly?</span><span id="Games_submitted">\u00A1Gracies por esti programa! Si gusta al nuesu grupu espertu de monos entrenaos, van espublizalu na galer\u00EDa nun par de d\u00EDes.</span><span id="Games_listVariable">Llista</span><span id="Games_textVariable">Testu</span><span id="Games_breakLink">En principiando la edici\u00F3n de JavaScript, nun vas poder volver a la edici\u00F3n de bloques. \u00BFAceutes esto?</span><span id="Games_blocks">Bloques</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = "BlocklyGames.soy.messages";
}

BlocklyGames.soy.headerBar = function (opt_data, opt_ignored, opt_ijData) {
  return (
    '<table width="100%"><tr><td><h1>' +
    BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) +
    (opt_ijData.level
      ? BlocklyGames.soy.levelLinks(
          {
            suffix:
              "" +
              (opt_data.levelLinkSuffix
                ? soy.$$escapeHtml(opt_data.levelLinkSuffix)
                : ""),
          },
          null,
          opt_ijData
        )
      : "") +
    '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
    (opt_data.hasLinkButton
      ? '&nbsp;<button id="linkButton" title="Guardar y enllazar a los bloques."><img src="common/1x1.gif" class="link icon21"></button>'
      : "") +
    (opt_data.hasHelpButton
      ? '&nbsp;<button id="helpButton">Ayuda</button>'
      : "") +
    (opt_data.farLeftHtml
      ? "&nbsp;" + soy.$$filterNoAutoescape(opt_data.farLeftHtml)
      : "") +
    "</td></tr></table>"
  );
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = "BlocklyGames.soy.headerBar";
}

BlocklyGames.soy.titleSpan = function (opt_data, opt_ignored, opt_ijData) {
  return (
    '<span id="title">' +
    (opt_ijData.html
      ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">'
      : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') +
    "Codekid</a> : " +
    soy.$$escapeHtml(opt_data.appName) +
    "</span>"
  );
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = "BlocklyGames.soy.titleSpan";
}

BlocklyGames.soy.levelLinks = function (opt_data, opt_ignored, opt_ijData) {
  var output = " &nbsp; ";
  var iLimit215 = opt_ijData.maxLevel + 1;
  for (var i215 = 1; i215 < iLimit215; i215++) {
    var url__soy216 =
      "?lang=" +
      soy.$$escapeHtml(opt_ijData.lang) +
      "&level=" +
      soy.$$escapeHtml(i215) +
      (opt_data.suffix ? "&" + soy.$$escapeHtml(opt_data.suffix) : "");
    output +=
      " " +
      (i215 == opt_ijData.level
        ? '<span class="level_number level_done" id="level' +
          soy.$$escapeHtml(i215) +
          '">' +
          soy.$$escapeHtml(i215) +
          "</span>"
        : i215 == opt_ijData.maxLevel
        ? '<a class="level_number" id="level' +
          soy.$$escapeHtml(i215) +
          '" href="' +
          soy.$$escapeHtml(url__soy216) +
          '">' +
          soy.$$escapeHtml(i215) +
          "</a>"
        : '<a class="level_dot" id="level' +
          soy.$$escapeHtml(i215) +
          '" href="' +
          soy.$$escapeHtml(url__soy216) +
          '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = "BlocklyGames.soy.levelLinks";
}

BlocklyGames.soy.dialog = function (opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = "BlocklyGames.soy.dialog";
}

BlocklyGames.soy.doneDialog = function (opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u00A1Norabona!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Encaboxar</button><button id="doneOk" class="secondary">Aceutar</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = "BlocklyGames.soy.doneDialog";
}

BlocklyGames.soy.abortDialog = function (opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Esti nivel ye desaxeradamente dif\u00EDcil. \u00BFDeseyes saltealu y dir al siguiente nivel? Siempres puedes tornar m\u00E1s palantre.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Encaboxar</button><button id="abortOk" class="secondary">Aceutar</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = "BlocklyGames.soy.abortDialog";
}

BlocklyGames.soy.storageDialog = function (opt_data, opt_ignored, opt_ijData) {
  return (
    '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
    BlocklyGames.soy.ok(null, null, opt_ijData) +
    "</div>"
  );
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName =
    "BlocklyGames.soy.storageDialog";
}

BlocklyGames.soy.ok = function (opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">Aceutar</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = "BlocklyGames.soy.ok";
}
