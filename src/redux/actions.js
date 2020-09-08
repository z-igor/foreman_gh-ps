const LOG_ON = "LOG_ON";
const LOG_OFF = "LOG_OFF";
const IS_AUTH = "IS_AUTH";
const DEMO_AUTH = "DEMO_AUTH";

const APPLY_FILTER = "APPLY_FILTER";
const RESET_FILTER = "RESET_FILTER";
/**
 * 
 * start регистрация/вход/выход
 * 
 */

export function demoAuth(data) {
    return {
        type: DEMO_AUTH,
        data
    }
}

export function logOn(data) {
    return {
        type: LOG_ON,
        data
    }
};

export function onAuth(data) {
    return {
        type: IS_AUTH,
        data,
    }
};

export function logOff() {
    return {
        type: LOG_OFF,
    }
};
/**
 * 
 * end регистрация/вход/выход
 * 
 */

/**
 * start FILTER
 */

export function applyFilter(data) {
    return {
        type: APPLY_FILTER,
        data,
    }
}
export function resetFilter(reset) {
    return {
        type: RESET_FILTER,
        reset,
    }
}

/**
 * end FILTER
 */