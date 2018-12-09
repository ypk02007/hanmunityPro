import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { StudyComponent } from './components/study/study.component';
import { QuestionComponent } from './components/question/question.component';
import { PetitionComponent } from './components/petition/petition.component';
import { TogetherComponent } from './components/together/together.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { WriteStudyComponent } from './components/write-study/write-study.component';
import { WritePetitionComponent } from './components/write-petition/write-petition.component';
import { MessageComponent } from './components/message/message.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { TempService } from './services/temp.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'study', component: StudyComponent, canActivate:[AuthGuard]},
  {path:'question', component: QuestionComponent, canActivate:[AuthGuard]},
  {path:'together', component: TogetherComponent, canActivate:[AuthGuard]},
  {path:'petition', component: PetitionComponent, canActivate:[AuthGuard]},
  {path:'writeStudy', component: WriteStudyComponent, canActivate:[AuthGuard]},
  {path:'writePetition', component: WritePetitionComponent, canActivate:[AuthGuard]},
  {path:'message', component: MessageComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StudyComponent,
    QuestionComponent,
    PetitionComponent,
    TogetherComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WriteStudyComponent,
    WritePetitionComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
