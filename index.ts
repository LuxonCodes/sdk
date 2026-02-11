import { Rover } from "./rover/Rover";
import { log } from "./utils/logger";

log("Booting Luxon rover...");

const rover = new Rover();
rover.start();
