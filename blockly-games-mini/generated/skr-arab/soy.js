// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide("BlocklyGames.soy");

goog.require("soy");
goog.require("soydata");

BlocklyGames.soy.messages = function (opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">\u0628\u062C\u06BE\u0627\u0631\u062A</span><span id="Games_maze">\u0645\u06A9\u0626\u06CC</span><span id="Games_bird">\u067E\u06A9\u06BE\u064F\u0648</span><span id="Games_turtle">\u06A9\u064F\u0645\u0627\u06BA</span><span id="Games_movie">\u0641\u0644\u0645</span><span id="Games_music">\u0645\u0648\u0633\u06CC\u0642\u06CC</span><span id="Games_pondTutor">\u062A\u0644\u0627\u0628 \u0679\u06CC\u0648\u0679\u0631</span><span id="Games_pond">\u067E\u0627\u0646\u0688</span><span id="Games_genetics">\u062C\u06CC\u0646\u06CC\u0627\u062A\u06CC\u0627\u062A</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">\u0639\u0646\u0648\u0627\u0646:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">\u0648\u0644\u062F\u0627 \u0679\u06BE\u06CC\u06A9 \u06A9\u0631\u0648</span><span id="Games_help">\u0645\u062F\u062F</span><span id="Games_dialogOk">\u0679\u06BE\u06CC\u06A9 \u06C1\u06D2</span><span id="Games_dialogCancel">\u0645\u0646\u0633\u0648\u062E</span><span id="Games_catLogic">\u0645\u0646\u0637\u0642</span><span id="Games_catLoops">\u0644\u0648\u067E\u0627\u06BA</span><span id="Games_catMath">\u0631\u06CC\u0627\u0636\u06CC</span><span id="Games_catText">\u0679\u06CC\u06A9\u0633\u0679</span><span id="Games_catLists">\u0641\u06C1\u0631\u0633\u062A\u0627\u06BA</span><span id="Games_catColour">\u0631\u0646\u06AF</span><span id="Games_catVariables">\u0645\u062A\u063A\u06CC\u0631\u0627\u062A</span><span id="Games_catProcedures">\u0641\u0646\u06A9\u0634\u0646</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u0641\u06C1\u0631\u0633\u062A</span><span id="Games_textVariable">\u0679\u06CC\u06A9\u0633\u0679</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div>';
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
      ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
      : "") +
    (opt_data.hasHelpButton
      ? '&nbsp;<button id="helpButton">\u0645\u062F\u062F</button>'
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
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u0645\u0628\u0627\u0631\u06A9\u0627\u06BA!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u0645\u0646\u0633\u0648\u062E</button><button id="doneOk" class="secondary">\u0679\u06BE\u06CC\u06A9 \u06C1\u06D2</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = "BlocklyGames.soy.doneDialog";
}

BlocklyGames.soy.abortDialog = function (opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u0645\u0646\u0633\u0648\u062E</button><button id="abortOk" class="secondary">\u0679\u06BE\u06CC\u06A9 \u06C1\u06D2</button></div></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u0679\u06BE\u06CC\u06A9 \u06C1\u06D2</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = "BlocklyGames.soy.ok";
}
