import { CommandContract } from '../../../contract/command.contract';
import { Request } from 'express';
import { ListResponseDto } from './response-dto/list.response-dto';

export class ListCommand extends CommandContract {
    
    constructor() {
        super();
    }
    
    async run(req: Request): Promise<any> {
        return <ListResponseDto>{
            list: 'user list',
        };
    }
}
