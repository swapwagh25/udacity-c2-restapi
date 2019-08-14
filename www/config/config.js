"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "dev": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRESS_PASSWORD,
        "database": process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_HOST,
        "dialect": "postgres",
        "aws_reigion": process.env.AWS_REIGION,
        "aws_profile": process.env.AWS_PROFILE,
        "aws_media_bucket": process.env.AWS_MEDIA_BUCKET //"udagram-wagh-dev"
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    }
};
//# sourceMappingURL=config.js.map