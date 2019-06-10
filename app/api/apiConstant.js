export const ENVIRONMENT = {
    PROD: 'PROD',
    DEV: 'DEV',
};

const getEnvironmentFile = (env) => {
    switch (env) {
        case ENVIRONMENT.PROD: return require('../config/prod.env');
        case ENVIRONMENT.DEV: return require('../config/prod.env');
        default: return require('../config/prod.env');
    }
};

let CurrentEnv = ENVIRONMENT.DEV;

module.exports = getEnvironmentFile(CurrentEnv);