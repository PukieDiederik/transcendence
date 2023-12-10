import { Body, Controller, Get, Logger, Param, Post, Req, Res } from "@nestjs/common";
import { UserService } from "src/database/user.service";
import { Request, Response } from "express";
import { User } from "src/database/user.entity";
import { userCreateDto } from "./dto/userCreate.dto";

@Controller("user")
export class UserController{
    constructor(private userService: UserService) { }

    @Get(":id")
    async findById(@Req() req : Request, @Res() res : Response, @Param('id') id : number){
        const user : User = await this.userService.findById(id);
        if (!user)
            res.status(404).json({'error' : "Uknown user id"});
        const json = {
            'id' : user.id,
            'name': user.username,
            'profile_image': user.profile_image,
            'status': user.status,
            'last_online': user.last_online,
            'comp_level': user.comp_level,
            'games_played': 12, // TODO: Implement this and following attributes
            'games_won': 5,
        }

        res.status(200);
        res.json(json);
        return res;
    }


    // FIXME: DO INPUT VALIDATION!!
    @Post('')
    createUser(@Req() req : Request, @Res() res : Response, @Body() data_in: userCreateDto)
    {
        const user = this.userService.create(data_in.intra_id, data_in.name, "");
        res.json(user);
        return res;
    }
}