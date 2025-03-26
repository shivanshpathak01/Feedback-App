// Whenever there is type defined most of the time interface is there 
import { Message } from "@/model/User";

// ? --> Here it means optionality 
export interface ApiResponse{
    success: boolean; 
    message: string;
    isAcceptingMessages?: boolean // We have made this as optional by ?, Now it is not necessary that it is active everytime we send something
    messages?: Array<Message>
}