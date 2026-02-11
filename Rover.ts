import { readSensors } from "./sensors";
import { navigate } from "./navigation";

export class Rover {
  start() {
    const data = readSensors();
    navigate(data);
  }
}
