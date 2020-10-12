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
import { LanguajeService } from './services/languaje.service';
import { TranslateModule, TranslateService, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

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
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        AuthService,
        TechsService,
        AuthGuard,
        TechsGuard,
        LanguajeService,
        TranslateService],

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});
