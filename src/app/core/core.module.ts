import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatTreeModule} from '@angular/material/tree';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatBadgeModule} from '@angular/material/badge';
import { UploadService } from './uploads/upload.service';
import { FilterPipe } from './pipe/filter.pipe';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ActionsComponent} from './modal/actions/actions.component'
import { InitModal } from './modal/init/init.modal';
import { AboutModal } from './modal/about/about.modal';
import { MaterialModal } from './modal/material/material.modal';
import { FileService } from './provider/file.service';
import { DraftviewerComponent } from './draftviewer/draftviewer.component';
import { WeaverViewComponent } from './modal/weaverview/weaverview.component';
import { SelectionComponent } from './draftviewer/selection/selection.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoomModal } from './modal/loom/loom.modal';
import { VaeService } from './provider/vae.service';
import { PatternfinderService } from './provider/patternfinder.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { AuthService } from './provider/auth.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        ColorPickerModule,
        MatChipsModule,
        MatSnackBarModule,
        ScrollingModule,
        DragDropModule,
        MatProgressBarModule,
        MatBadgeModule
    ],
    declarations: [
        FilterPipe,
        UploadFormComponent,
        TopbarComponent,
        ActionsComponent,
        InitModal,
        AboutModal,
        MaterialModal,
        LoomModal,
        DraftviewerComponent,
        SelectionComponent,
        SidebarComponent,
        WeaverViewComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent,
        EmailComponent
        ],
    providers: [
        UploadService,
        FileService,
        VaeService,
        PatternfinderService,
        AuthService,
    ],
    exports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        ColorPickerModule,
        MatChipsModule,
        MatSnackBarModule,
        ScrollingModule,
        MatBadgeModule,
        DragDropModule,
        FilterPipe,
        UploadFormComponent,
        TopbarComponent,
        ActionsComponent,
        InitModal,
        AboutModal,
        MaterialModal,
        LoomModal,
        DraftviewerComponent,
        SelectionComponent,
        SidebarComponent,
        WeaverViewComponent
    ]
})
export class CoreModule { }
