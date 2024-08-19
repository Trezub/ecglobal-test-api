import { Controller, Get } from '@nestjs/common';
import { MembersService } from './members.service';

@Controller('/members')
export class MembersController {
    constructor(private membersService: MembersService) {}

    @Get()
    async getAll() {
        return this.membersService.getAll();
    }
}
