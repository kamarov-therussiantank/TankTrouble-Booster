// ==UserScript==
// @name TankTrouble Booster
// @namespace http://tampermonkey.net/
// @version      3.0.1
// @license      GPL-3.0
// @description Boost performance for better experience by lowering in game quality and its values.
// @author kamarov
// @match https://tanktrouble.com/*
// @grant none
// @downloadURL https://update.greasyfork.org/scripts/492792/TankTrouble%20Booster.user.js
// @updateURL https://update.greasyfork.org/scripts/492792/TankTrouble%20Booster.meta.js
// ==/UserScript==

//Disable camera shake
UIConstants.MAX_CAMERA_SHAKE = 0;
UIConstants.CAMERA_SHAKE_FADE = 0;
UIConstants.MINE_EXPLOSION_CAMERA_SHAKE = 0

//Lower the amount of feather particle spawning
UIConstants.TANK_FEATHER_COUNT = 2;
UIConstants.TANK_FEATHER_POOL_SIZE = 2;

//Lower the amount score fragments partivles spawning
UIConstants.MAX_SCORE_FRAGMENTS_PER_EXPLOSION = 0;
UIConstants.MIN_SCORE_FRAGMENTS_PER_LETTER = 0;

//Lower the sparkle effects
UIConstants.GOLD_SPARKLE_MAX_INTERVAL_TIME = 9999
UIConstants.GOLD_SPARKLE_MIN_INTERVAL_TIME = 9999
UIConstants.DIAMOND_SPARKLE_MAX_INTERVAL_TIME = 9999
UIConstants.DIAMOND_SPARKLE_MIN_INTERVAL_TIME = 9999

//Lower the spray shake effects
UIConstants.GARAGE_SPRAY_NUM_SHAKES = 3
UIConstants.GARAGE_SPRAY_SHAKE_TIME = 60

//Disable rubble particles
UIConstants.RUBBLE_TREAD_OFFSET = 0
UIConstants.RUBBLE_FRAGMENT_POOL_SIZE = 0
UIConstants.RUBBLE_FRAGMENT_MAX_LIFETIME= 0
UIConstants.RUBBLE_FRAGMENT_MIN_LIFETIME= 0
UIConstants.RUBBLE_FRAGMENT_MAX_ROTATION_SPEED= 0
UIConstants.RUBBLE_FRAGMENT_SPEED_SCALE = 0
UIConstants.RUBBLE_FRAGMENT_RANDOM_SPEED = 0
UIConstants.RUBBLE_SMOKE_SPEED_SCALE = 0
UIConstants.RUBBLE_SMOKE_RANDOM_SPEED = 0
UIConstants.INVERSE_RUBBLE_SPAWN_PROBABILITY_IN_COLLISION = 9999
UIConstants.INVERSE_RUBBLE_SPAWN_PROBABILITY_IN_THE_OPEN = 9999

//Disable sheild spark bolt effects
UIConstants.SHIELD_SPARK_BOLT_POOL_SIZE = 0

//Disable poof effects for every weapon
UIConstants.BULLET_PUFF_POOL_SIZE = 0

//Lower the amount of particles spawning for each quality
QualityManager.QUALITY_VALUES.auto = {
    "tank explosion smoke count": 2,
    "tank explosion fragment count": 2,
    "missile launch smoke count": 0,
    "missile smoke frequency": 999,
    "mine explosion smoke count": 2,
    "crate land dust count": 0,
    "aimer min segment length":2,
    "aimer off max segment length": 5.0,
    "aimer on max segment length": 3.0,
    "bullet puff count": 0,
    "shield inverse bolt probability": 1,
    "shield spark particles per emit": 0,
    "spawn zone inverse unstable particle probability": 1,
    "spawn zone num collapse particles": 0
};

QualityManager.QUALITY_VALUES.high = {
    "tank explosion smoke count": 2,
    "tank explosion fragment count": 2,
    "missile launch smoke count": 0,
    "missile smoke frequency": 999,
    "mine explosion smoke count": 2,
    "crate land dust count": 0,
    "aimer min segment length": 2,
    "aimer off max segment length": 10.0,
    "aimer on max segment length": 5.0,
    "bullet puff count": 0,
    "shield inverse bolt probability": 1,
    "shield spark particles per emit": 0,
    "spawn zone inverse unstable particle probability": 1,
    "spawn zone num collapse particles": 0
};

QualityManager.QUALITY_VALUES.low = {
    "tank explosion smoke count": 1,
    "tank explosion fragment count": 1,
    "missile launch smoke count": 0,
    "missile smoke frequency": 999,
    "mine explosion smoke count": 1,
    "crate land dust count": 0,
    "aimer min segment length": 0,
    "aimer off max segment length": 12.0,
    "aimer on max segment length": 6.0,
    "bullet puff count": 0,
    "shield inverse bolt probability": 1,
    "shield spark particles per emit": 0,
    "spawn zone inverse unstable particle probability": 1,
    "spawn zone num collapse particles": 0
};

