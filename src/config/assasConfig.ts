import { Config, Options } from "./types"
export class AssasConfig{
    access_token:string
    options:Options
    constructor(config:Config) {
        this.access_token = config.access_token
        this.options = config.options
    }
}