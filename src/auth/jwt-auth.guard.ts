import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
  
    const canActivate = super.canActivate(context) as boolean;
    
    if (!canActivate) {
      throw new UnauthorizedException('You are not authorized to access this resource');
    }
    
    return canActivate;
  }
}