import { Module } from '@nestjs/common';
import { McpModule, Resolver, Tool } from '@nestjs-mcp/server';
import { CallToolResult } from '@modelcontextprotocol/sdk';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  /**
   * Simple health check tool
   */
  @Tool({
    name: 'server_health_check',
    description: 'Checks if the server is operational.',
  })
  healthCheck(): CallToolResult {
    return {
      content: [
        {
          type: 'text',
          text: 'Server is operational.',
        },
      ],
    };
  }
}

@Module({
  imports: [McpModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
