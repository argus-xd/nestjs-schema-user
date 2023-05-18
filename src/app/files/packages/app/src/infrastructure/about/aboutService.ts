import { Injectable } from "@nestjs/common";

import { ConfigDto } from "../config/index";
import { PackageJsonDto } from "../packageJson/index";

import { AboutDto } from "./dtos/index";

@Injectable()
export class AboutService {
  public constructor(
    private readonly config: ConfigDto,
    private readonly packageJson: PackageJsonDto,
  ) {}

  public about(): AboutDto {
    return {
      name: this.packageJson.name,
      version: this.packageJson.version,
      env: this.config.configEnv,
    };
  }
}
