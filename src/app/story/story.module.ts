/**
 * NgModule that includes all Story components and modules that are required to serve the application
 */

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Import story page components here
import { AboutBennuComponent } from './about-bennu/about-bennu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { KnowledgeJourneyComponent } from './knowledge-journey/knowledge-journey.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { RiskToEarthComponent } from './risk-to-earth/risk-to-earth.component';
import { SurvivalComponent } from './survival/suvival.component';

const declarations = [
    AboutBennuComponent,
    IntroductionComponent,
    KnowledgeJourneyComponent,
    LearnMoreComponent,
    RiskToEarthComponent,
    SurvivalComponent
];

@NgModule({
    declarations: [
        declarations
    ],
    imports: [
        SharedModule
    ],
    exports: [
        declarations,
    ]
})
export class StoryModule { }
