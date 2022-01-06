import { Controller } from '@nestjs/common';
import { Payload,MessagePattern } from '@nestjs/microservices'

@Controller()
export class PaymentController {
    
    @MessagePattern("payment-topic") 
    receiveMessage(@Payload() message){
        console.log(message);
    }
}
