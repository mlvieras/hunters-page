"use strict";var STAGE_CARD_SELECTOR="[data-stage-card]";var STAGE_CARD_TEXT_SELECTOR="[data-stage-text]";var STAGE_CARD_SUBTITLE_SELECTOR="[data-stage-subtitle]";var main=function main(){var stageCards=document.querySelectorAll(STAGE_CARD_SELECTOR);stageCards.forEach(function(stageCard){stageCard.addEventListener("click",function(){var text=stageCard.querySelector(STAGE_CARD_TEXT_SELECTOR);var subtitle=stageCard.querySelector(STAGE_CARD_SUBTITLE_SELECTOR);if(text.style.display==="block"){text.style.display="none";subtitle.style.display="block"}else{subtitle.style.display="none";text.style.display="block"}})})};main();