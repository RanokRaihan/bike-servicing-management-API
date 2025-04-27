import { Router } from "express";
import bikeRouter from "../modules/bike/bike.route";
import customerRouter from "../modules/customer/customer.route";
import serviceRecordRouter from "../modules/serviceRecord/serviceRecord.route";

const router = Router();

const routes = [
  {
    path: "/customers",
    route: customerRouter,
  },
  {
    path: "/bikes",
    route: bikeRouter,
  },
  {
    path: "/services",
    route: serviceRecordRouter,
  },
];

routes.forEach((el) => {
  router.use(el.path, el.route);
});

export default router;
