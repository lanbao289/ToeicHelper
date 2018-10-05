import { PagerService } from './services/pager.service';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { TestroomService } from './services/testroom.service';
import { AddExamService } from './services/add-exam.service';
import { UploadfileService } from './services/uploadfile.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { DiscussionroomService } from './services/discussionroom.service';
import { WebModule } from './web/web.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { ExamService } from './services/exam.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    WebModule,
    AdminModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [
    AuthenticationService,
    UserService,
    AuthGuard,
    AuthAdminGuard,
    UploadfileService,
    AddExamService,
    ExamService,
    TestroomService,
    PagerService,
    DiscussionroomService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
