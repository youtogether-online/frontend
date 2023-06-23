/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * YouTogether API
 * This is CRUD API documentation for you-together-online project.
You can get more info about that project [here](https://github.com/youtogether-online)
 * OpenAPI spec version: 1.0.0
 */
import type { Biography } from "./biography";
import type { Name } from "./name";
import type { Password } from "./password";
import type { Privacy } from "./privacy";

export interface Room {
  title?: Name;
  privacy?: Privacy;
  description?: Biography;
  password?: Password;
}
