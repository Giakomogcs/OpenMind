import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { McpModule } from '@nestjs-mcp/server';

import { AuthModule } from './auth/modules/auth.module';
import { OrchestratorModule } from './orchestrator/modules/orchestrator.module';
import { ProvisionerModule } from './provisioner/modules/provisioner.module';
import { User } from './auth/entities/user.entity';
import { Connection } from './connections/entities/connection.entity';
import { OrchestratorController } from './orchestrator/controllers/orchestrator.controller';
import { AuthService } from './auth/services/auth.service';
import { ProvisionerService } from './provisioner/services/provisioner.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Connection],
      synchronize: true, // Auto-create tables (for development)
    }),
    McpModule.forRoot(),
    AuthModule,
    OrchestratorModule,
    ProvisionerModule,
  ],
  controllers: [OrchestratorController],
  providers: [AuthService, ProvisionerService],
})
export class AppModule {}