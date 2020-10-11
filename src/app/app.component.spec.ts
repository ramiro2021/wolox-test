import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { NopagefoundModule } from './nopagefound/nopagefound.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthService } from './services/auth.service';
import { TechsService } from './services/techs.service';
import { AuthGuard } from './guards/auth.guard';
import { TechsGuard } from './guards/techs.guard';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        AppComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        ComponentsModule,
        PagesModule,
        SharedModule,
        AuthModule,
        NopagefoundModule,
      ],
      providers: [AuthService, TechsService, AuthGuard, TechsGuard],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});
