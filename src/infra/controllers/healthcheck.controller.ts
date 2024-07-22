import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Healthcheck')
@Controller("healthcheck")
export class HealthcheckController {
  constructor() {}

  @Get()
  @ApiResponse({ status: 200, description: "Ok" })
  async healthcheck() {
    return { status: "Ok" }
  }
}