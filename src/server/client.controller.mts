import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service.mjs';

@Controller('clients')
export class ClientController {
  constructor(private myService: ClientService) {}

  @Get()
  root(): string {
    this.myService.emitEvent('my event', 'Hello World!');
    return 'Event emitted!';
  }
}