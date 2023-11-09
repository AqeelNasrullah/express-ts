"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** UNCAUGHT EXCEPTIONS **/
const uncaughtException = () => {
    process.on("uncaughtException", (err) => {
        console.log(`Error : ${err.message}`);
        console.log("Shutting down server due to uncaught exception");
        process.exit(1);
    });
};
exports.default = uncaughtException;
