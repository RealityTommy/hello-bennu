/**
 * NgModule that includes all Story modules that are required to serve the application
 */

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutSiteComponent } from './about-site/about-site.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { KnowledgeJourneyComponent } from './knowledge-journey/knowledge-journey.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { RiskToEarthComponent } from './risk-to-earth/risk-to-earth.component';
import { SurvivalComponent } from './survival/suvival.component';

const declarations = [
    AboutSiteComponent,
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
        FlexLayoutModule
    ],
    exports: [
        declarations,
    ]
})
export class StoryModule { }
