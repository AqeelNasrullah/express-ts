"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** UNHANDLED PROMISE REJECT **/
const uncaughtRejection = (server) => {
    process.on("unhandledRejection", (err) => {
        console.log(`Error : ${err.message}`);
        console.log("Shutting down server due to unhadled promise rejection");
        server.close(() => {
            process.exit(1);
        });
    });
};
exports.default = uncaughtRejection;
