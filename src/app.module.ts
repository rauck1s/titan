import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { NotificationModule } from './notification/notification.module';
import { TestsController } from './tests/tests.controller';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [UserModule, CourseModule, NotificationModule, TestsModule],
  controllers: [AppController, TestsController],
  providers: [AppService],
})
export class AppModule {}
