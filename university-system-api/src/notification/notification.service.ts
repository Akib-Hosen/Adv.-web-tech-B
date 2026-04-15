import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return { message: 'Notification sent', studentName, notification: message };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollmentStatus = this.enrollmentService.getEnrollments();
    return { 
      message: 'Enrollment checked and notified', 
      studentName, 
      courseId, 
      status: enrollmentStatus 
    };
  }
}