import { HeaderComponent } from './core/header/header.component';
import { AuthAdminGuard } from './../guards/auth-admin.guard';
import { RoomComponent } from './room/room.component';
import { EditroomComponent } from './room/editroom/editroom.component';
import { ShowroomComponent } from './room/showroom/showroom.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ExamComponent } from './exam/exam.component';
import { ShowComponent } from './exam/show/show.component';
import { CreateComponent } from './exam/create/create.component';
import { EditComponent } from './exam/edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { CreateroomComponent } from './room/createroom/createroom.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { TestComponent } from './exam/test/test.component';
import { PdfViewerModule } from '../../../node_modules/ng2-pdf-viewer';
import { ForumComponent } from './forum/forum.component';
import { ShowforumComponent } from './forum/showforum/showforum.component';
import { EditforumComponent } from './forum/editforum/editforum.component';
import { CreateforumComponent } from './forum/createforum/createforum.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

const admins: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthAdminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'exam',
        component: ExamComponent,
        children: [
          { path: '', redirectTo: 'show', pathMatch: 'full' },
          {
            path: 'show',
            component: ShowComponent
          },
          {
            path: 'create',
            component: CreateComponent
          },
          {
            path: 'edit/:id',
            component: EditComponent
          },
          {
            path: 'test/:id',
            component: TestComponent
          }
        ]
      },
      {
        path: 'room',
        component: RoomComponent,
        children: [
          { path: '', redirectTo: 'show', pathMatch: 'full' },
          {
            path: 'show',
            component: ShowroomComponent
          },
          {
            path: 'create',
            component: CreateroomComponent
          },
          {
            path: 'edit/:id',
            component: EditroomComponent
          }
        ]
      },
      {
        path: 'forum',
        component: ForumComponent,
        children: [
          { path: '', redirectTo: 'show', pathMatch: 'full' },
          {
            path: 'show',
            component: ShowforumComponent
          },
          {
            path: 'create',
            component: CreateforumComponent
          },
          {
            path: 'edit/:id',
            component: EditforumComponent
          }
        ]
      }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(admins),
    FormsModule,
    PdfViewerModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [AdminComponent, DashboardComponent, UserComponent, RegisterComponent, HeaderComponent, SidebarComponent,
    ExamComponent, ShowComponent, CreateComponent, EditComponent,
    RoomComponent, ShowroomComponent, EditroomComponent, CreateroomComponent, TestComponent, ForumComponent, ShowforumComponent,
    CreateforumComponent, EditforumComponent ]
})
export class AdminModule { }
