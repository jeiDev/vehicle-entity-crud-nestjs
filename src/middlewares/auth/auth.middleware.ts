import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AccessTokenRepository } from 'src/modules/access-token/access-token.repository';
import { RoleType } from 'src/modules/role/roleType.enum';
import { getConnection } from 'typeorm';
import { AccessToken } from '../../modules/access-token/access-token.entity';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const bearerHeader: string = req.headers['authorization'];

    const accessToken: AccessTokenRepository = await getConnection().getRepository(AccessToken)
    const token = await accessToken.findOne({where: {token: bearerHeader.split(" ")[1]}})

    if(!token || !token.owner){
      throw new UnauthorizedException("You do not have permission to access the eset endpoint");
    }
    
    const isAdmin = token.owner.roles.find(role => role.level === RoleType.ADMIN)
    
    if(!isAdmin){
      throw new UnauthorizedException("You do not have permission to access the eset endpoint");
    }

    next();
  }
}
