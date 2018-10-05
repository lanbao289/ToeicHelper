import { NvarbarComponent } from './core/nvarbar/nvarbar.component';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { TrainingComponent } from './training/training.component';
import { TestHistoryComponent } from './test-history/test-history.component';
import { PdfViewerModule } from '../../../node_modules/ng2-pdf-viewer';
import { ScheduleComponent } from './schedule/schedule.component';
import { RoomComponent } from './room/room.component';
import { MinitestHistoryComponent } from './minitest-history/minitest-history.component';
import { FooterComponent } from './core/footer/footer.component';
import { ForumComponent } from './forum/forum.component';
import { DetailroomComponent } from './detailroom/detailroom.component';
import { NgxEditorModule } from 'ngx-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AddingPostComponent } from './adding-post/adding-post.component';
import { MypostComponent } from './mypost/mypost.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

const webs: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'room', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'room/:id',
        component: RoomComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'test',
        component: TestComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'training',
        component: TrainingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'test-history',
        component: TestHistoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'minitest-history',
        component: MinitestHistoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'forum',
        component: ForumComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'adding-post',
        component: AddingPostComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'detailroom/:id',
        component: DetailroomComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'mypost',
        component: MypostComponent,
        canActivate: [AuthGuard]
      }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    NgxEditorModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    RouterModule.forChild(webs)
  ],
  exports: [RouterModule],
  // tslint:disable-next-line:max-line-length
  declarations: [WebComponent, LoginComponent, HomeComponent, TestComponent, TrainingComponent, TestHistoryComponent, ScheduleComponent, RoomComponent,
     MinitestHistoryComponent, NvarbarComponent, FooterComponent, ForumComponent, DetailroomComponent, AddingPostComponent, MypostComponent]
})
export class WebModule {}
