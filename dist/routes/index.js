"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bike_route_1 = __importDefault(require("../modules/bike/bike.route"));
const customer_route_1 = __importDefault(require("../modules/customer/customer.route"));
const serviceRecord_route_1 = __importDefault(require("../modules/serviceRecord/serviceRecord.route"));
const router = (0, express_1.Router)();
const routes = [
    {
        path: "/customers",
        route: customer_route_1.default,
    },
    {
        path: "/bikes",
        route: bike_route_1.default,
    },
    {
        path: "/services",
        route: serviceRecord_route_1.default,
    },
];
routes.forEach((el) => {
    router.use(el.path, el.route);
});
exports.default = router;
